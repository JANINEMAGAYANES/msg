from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/prescriptions/{patient_id}")
def read_prescriptions(patient_id: int):
    #database stuff
    return {'103': {'annotations': 'blub blub'}}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}