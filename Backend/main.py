from fastapi import FastAPI
from Patient import Patient 
import access_db

app = FastAPI()

@app.get("/")
def read_root():
    return access_db.get_patient_by_id(1)

@app.get("/drug_overview/{patient_id}")
def read_drug_overview(patient_id: int):
    """
    Endpoint that needs a patient id as parameter and returns the drugs the patient has been prescribed
    Args:
        patient_id (int): the id of the patient

    Returns:
        list: a list of dictionaries in the following format:
        [{'name': 'IBUPROFEN', 'drug_id': '1243', 'prescriptions': ['103', '105']}]
    """
    patient = Patient(patient_id)
    print(patient)
    return patient.get_list_of_drugs() #patient.get_list_of_drugs()

@app.get("/prescription_overview/{patient_id}")
def read_prescription_overview(patient_id: int):
    """
    Endpoint that needs a patient id as parameter and all prescriptions of a patient
    Args:
        patient_id (int): the id of the patient

    Returns:
        list: a list of prescription ids:
        ['103', '105']
    """
    patient = Patient(patient_id)
    patient.get_list_of_drugs()
    return patient.get_list_of_drugs()

@app.get("/drug/{drug_id}")
def read_drug(drug_id):
    return {"item_id": item_id, "q": q}

@app.get("/prescriptions/{prescription_id}")
def read_prescription(prescription_id):
    return {"item_id": item_id, "q": q}