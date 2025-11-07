from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from model import DummyLipModel

app = Flask(__name__)
CORS(app)  # Allow React frontend to talk to Flask

model = DummyLipModel()

@app.route('/')
def home():
    return "Flask backend is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files['frame']
        npimg = np.frombuffer(file.read(), np.uint8)
        frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        result = model.predict(frame)
        return jsonify({"prediction": result})
    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
