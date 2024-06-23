from fastapi import FastAPI
from Patient import Patient

app = FastAPI()

@app.get("/")
def read_root():
    return {'hello': 'world'}

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
    return patient.get_drug()

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
    return ['103', '105']

@app.get("/drug/{drug_id}")
def read_drug(drug_id=1):
    """Get all information about a drug

    Args:
        drug_id (_type_): Unique identifier of one drug

    Returns:
        dict: a dictionary with the following structure:
        {'drug_id', 'name': 'IBUPROFEN', 'side_effects': 'Headache', 'alternatives':'Paracetamol'}
    """
    pat = Patient(1)
    return pat.get_drug_detail(drug_id)
    #return {'drug_id':'1243', 'name': 'IBUPROFEN', 'side_effects': 'Headache', 'alternatives':'Paracetamol'}

@app.get("/prescriptions/{prescription_id}")
def read_prescription(prescription_id=1):
    """Get details for one prescription

    Args:
        prescription_id (_type_): _description_

    Returns:
        dict: a dictionary with the following structure
        {'prescription_id':'103', 'drug_id':'1243', 'annotation':'headache', 'created_at':'2024-06-22', 'valid_until':'2024-07-22', 'used': '2024-06-24', 'pharm_id': '17263'}
    """
    # get prescription detail by prescription id
    pat = Patient(1)
    return pat.get_prescription_detail(prescription_id)
    #return {'prescription_id':'103', 'drug_id':'1243', 'annotation':'headache', 'created_at':'2024-06-22', 'valid_until':'2024-07-22', 'used': '2024-06-24', 'pharm_id': '17263'}
@app.get("/todays_medications/{patient_id}")
def read_todays_medications(patient_id):
    """Get all medications that need to be taken at the current day

    Args:
        patient_id (_type_): _description_

    Returns:
        list: a list of dicts in the following structure
        [{'name':'IBUPROFEN', 'drug_id': '1243', 'time':'10:00 AM'},
        {'name':'PARACETAMOL', 'drug_id': '1244', 'time':'18:00 AM'}]
    """
    return [{'name':'IBUPROFEN', 'drug_id': '1243', 'time':'10:00 AM'},
        {'name':'PARACETAMOL', 'drug_id': '1244', 'time':'18:00 AM'}]

@app.post("/change_medication/{patient_id}/{drug_id}")
async def update_prescription(patient_id, drug_id, data: dict):
    """_summary_

    Args:
        patient_id (_type_): _description_
        drug_id (_type_): _description_
        data (dict): a dictionary 

    Returns:
        dict: the posted dict
    """
    return data