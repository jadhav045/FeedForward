from fastapi import FastAPI, File, UploadFile
from models import classify_image
from groq_api import check_with_groq

app = FastAPI()

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()

        # Get prediction from ResNet18
        label = classify_image(image_bytes)

        # Check with Groq API
        result = check_with_groq(label)

        return {
            "is_food": result.lower() == "yes"
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
