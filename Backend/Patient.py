# Import
import sqlite3  # import sqlite3 module
import access_db  # import access_db module
from global_variables import DATABASE_PATH

class Patient:
    def __init__(self, pat_id):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
        self.id = pat_id
        self.name = access_db.get_patient_by_id(self.c, pat_id)[1]
        self.surname = access_db.get_patient_by_id(self.c, pat_id)[2]
        self.prescriptions = access_db.get_prescription_by_patient_id(self.c, pat_id) # list of all prescriptions of the patient
    
    # get drug_ids from all prescriptions of the patient
    def get_list_of_drugs(self):
        drugs = []
        for pres in self.prescriptions:
            drugs += access_db.get_drugs_by_prescription_id(self.c, pres[0])
        # remove duplicates
        drugs = list(dict.fromkeys(drugs))
        
        return drugs
    
    # get list of all drugs as list of dictionaries with drug name, drug id and prescription id
    #  [{'name': 'IBUPROFEN', 'drug_id': '1243', 'prescriptions': ['103', '105']}]
    def get_drug_overview(self):
        drugs = self.get_list_of_drugs()
        drug_list = []
        for drug in drugs:
            print(access_db.get_drug_name_by_id(self.c, drug[0])[0])
            prescription = access_db.get_prescriptions_by_drug_id(self.c, drug[0])
            drug_list.append({'name': access_db.get_drug_name_by_id(self.c, drug[0])[0], 'drug_id': drug[0], 'prescriptions': prescription})
        return drug_list
    
    def get_prescriptions_overview(self):
        access_db.get_prescription_by_patient_id(self.c, self.id)
        
    # return dict with drug details
    # {'drug_id', 'name': 'IBUPROFEN', 'side_effects': 'Headache', 'alternatives':'Paracetamol'}
    def get_drug_detail(self, drug_id):
        return {'drug_id': drug_id, 'name': access_db.get_drug_name_by_id(self.c, drug_id)[0], 'side_effects': access_db.get_side_effects_by_drug_id(self.c, drug_id), 'alternatives':access_db.get_alternatives_by_drug_id(self.c, drug_id)}
    
class Patient_Handler:
    
    def __init__(self):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
    
    def create_patient(self, name, surname):
        self.c.execute("INSERT INTO Patient (name, surname) VALUES (?, ?)", (name, surname))
        self.conn.commit()
        # get id of the last inserted patient
        self.c.execute("SELECT last_insert_rowid()")
        return self.c.fetchone()[0] 
    
    def get_patient_by_id(self, id):
        self.c.execute("SELECT * FROM Patient WHERE id = ?", (id,))
        return self.c.fetchone()
            
 ### Test ###
 # get list of drug names of the patient with id 1
pat = Patient(1)
# get list of drugs of the patient with id 1 using access_db module get_drug_name_by_id function
# lambada function is used to get the first element of the tuple
#print(list(map(lambda x: access_db.get_drug_name_by_id(pat.c, x[0])[0], pat.get_list_of_drugs())))

# test get_drug function
print(pat.get_drug_overview())
print(pat.get_prescriptions_overview())
print(pat.get_drug_detail(6))
        