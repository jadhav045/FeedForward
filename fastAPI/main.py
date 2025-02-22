from fastapi import FastAPI, HTTPException
import requests
from PIL import Image
from io import BytesIO
from models import classify_image
from groq_api import check_with_groq

app = FastAPI()

@app.post("/predict")
async def predict(url: str):
    try:
        # Download image from the provided URL
        response = requests.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to download image")

        image = Image.open(BytesIO(response.content)).convert("RGB") 
        img_buffer = BytesIO()
        image.save(img_buffer, format="JPEG")  
        image_bytes = img_buffer.getvalue()

        label = classify_image(image_bytes)  
        result = check_with_groq(label)

        return {
            "is_food": result.lower() == "yes"
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
