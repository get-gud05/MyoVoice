import tensorflow as tf

# Load your model
model = tf.keras.models.load_model("lipreader_model.keras")

# Print basic details
print("✅ Model loaded successfully!")
print("Output shape:", model.output_shape)
print("\nModel summary:")
model.summary()
