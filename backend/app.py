from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import cv2
import tensorflow as tf

app = Flask(__name__)
CORS(app)

# ✅ Load trained Keras model
MODEL_PATH = "lipreader_model.keras"
model = tf.keras.models.load_model(MODEL_PATH)

# 🔤 Recreate your vocabulary
vocab = [x for x in "abcdefghijklmnopqrstuvwxyz'?!123456789 "]
char_to_num = tf.keras.layers.StringLookup(vocabulary=vocab, oov_token="", mask_token=None)
num_to_char = tf.keras.layers.StringLookup(
    vocabulary=char_to_num.get_vocabulary(), oov_token="", mask_token=None, invert=True
)

def preprocess_frame(frame):
    """
    Convert frame into the format expected by the lip reading model:
    - Convert to grayscale
    - Crop mouth region
    - Normalize
    - Add time, batch, and channel dimensions
    """
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    crop = gray[190:236, 80:220]  # mouth region
    crop = (crop - np.mean(crop)) / (np.std(crop) + 1e-7)
    crop = np.expand_dims(crop, axis=-1)  # (46, 140, 1)

    # Model expects 75 frames, so we repeat this single frame 75 times
    frames = np.repeat(crop[np.newaxis, :, :, :], 75, axis=0)  # (75, 46, 140, 1)
    frames = np.expand_dims(frames, axis=0)  # add batch dim → (1, 75, 46, 140, 1)
    return frames.astype(np.float32)

def decode_prediction(preds):
    """
    Greedy CTC decoding to convert model output into readable text.
    """
    decoded, _ = tf.keras.backend.ctc_decode(
        preds,
        input_length=np.full((preds.shape[0],), preds.shape[1]),
        greedy=True
    )
    decoded = decoded[0].numpy()

    results = []
    for seq in decoded:
        seq = tf.constant(seq, dtype=tf.int64)
        chars = num_to_char(tf.boolean_mask(seq, seq > 0))
        if tf.size(chars) == 0:
            results.append("")
        else:
            results.append(tf.strings.reduce_join(chars).numpy().decode('utf-8'))
    return results[0]

@app.route('/')
def home():
    return "✅ Flask backend is running and ready for lip reading!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        print(request.files.keys())
        frames = []

        # Loop through 75 frames sent from frontend
        for i in range(75):
            file = request.files.get(f"frame{i}")
            if file is None:
                return jsonify({"error": f"frame{i} missing"}), 400
            npimg = np.frombuffer(file.read(), np.uint8)
            frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

            # Preprocess single frame
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            crop = gray[190:236, 80:220]
            crop = (crop - np.mean(crop)) / (np.std(crop) + 1e-7)
            crop = np.expand_dims(crop, axis=-1)  # (46, 140, 1)
            frames.append(crop)

        # Stack frames → shape: (1, 75, 46, 140, 1)
        video_input = np.expand_dims(np.stack(frames, axis=0), axis=0).astype(np.float32)

        # Predict
        preds = model.predict(video_input)

        # Decode
        decoded_text = decode_prediction(preds)

        return jsonify({"prediction": decoded_text})

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
