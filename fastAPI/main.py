from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
from PIL import Image
from io import BytesIO
from pymongo import MongoClient
from bson import ObjectId
from models import classify_image
from groq_api import check_with_groq
from call_service import generate_call_script, make_call

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URI = "mongodb+srv://mrshaktiman01:nK5Epooo7G2rk5zo@cluster0.2edlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client["test"]
orders_collection = db["orders"]

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
    
@app.get("/call/{order_id}")
def call_donor(order_id: str):
    try:
        order = orders_collection.find_one({"_id": ObjectId(order_id)})
        if not order:
            raise HTTPException(status_code=404, detail="Order not found")
        
        script = generate_call_script(order)
        call_sid = make_call(script)
        return {"message": "Call initiated", "call_sid": call_sid}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
