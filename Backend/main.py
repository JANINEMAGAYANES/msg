from fastapi import FastAPI
import access_db

app = FastAPI()

example_patient = access_db.get_patient_by_id(1)

@app.get("/")
def read_root():
    return example_patient

@app.get("/prescriptions/{patient_id}")
def read_prescriptions(patient_id: int):
    #database stuff
    return {'103': {'annotations': 'blub blub'}}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}