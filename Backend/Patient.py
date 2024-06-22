# Import
import sqlite3  # import sqlite3 module
import access_db  # import access_db module
from global_variables import DATABASE_PATH
import datetime

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
            drugs += access_db.get_drugs_by_prescription_id(self.c, pres)
        # remove duplicates
        drugs = list(dict.fromkeys(drugs))
        # return list of integer not tuples
        return list(map(lambda x: x[0], drugs))
    
    # delete prescription by id , only if pat id matches
    def delete_prescription(self, prescription_id):
        self.c.execute("DELETE FROM Prescription WHERE id = ?", (prescription_id,))
        # delete regarding entries in drug_in_prescription
        self.c.execute("DELETE FROM Drug_in_Prescription WHERE prescription_id = ?", (prescription_id,))
        self.conn.commit()
    
    
    
    
    # get list of all drugs as list of dictionaries with drug name, drug id and prescription id
    #  [{'name': 'IBUPROFEN', 'drug_id': '1243', 'prescriptions': ['103', '105']}]
    def get_drug_overview(self):
        drugs = self.get_list_of_drugs()
        drug_list = []
        for drug in drugs:
            prescription = access_db.get_prescriptions_by_drug_id(self.c, drug)
            drug_list.append({'name': access_db.get_drug_name_by_id(self.c, drug)[0], 'drug_id': drug, 'prescriptions': prescription})
        return drug_list
    
    # get prescription detail by prescription id
    # {'prescription_id':'103', 'drug_ids':['1243', ], 'doctor_id': '1', 'annotation':'headache', 'created_at':'2024-06-22', 'valid_until':'2024-07-22', 'used': '2024-06-24', 'pharm_id': '17263'}
    def get_prescription_detail(self, prescription_id):
        details = access_db.get_prescription_detail(self.c, prescription_id)
        doctor_id = details[2]
        annotation = details[3]
        created_at = details[4]
        valid_until = details[5]
        used = details[6]
        pharm_id = details[7]
        drug_ids = access_db.get_drugs_by_prescription_id(self.c, prescription_id)
        
        for drug in drug_ids:
            # get drug name by drug id
            drug_name = access_db.get_drug_name_by_id(self.c, drug[0])
            
            # get amount of drug in prescription by drug id and prescription id
            drug_amount = access_db.get_drug_amount_by_prescription_id(self.c, drug[0], prescription_id)
            
            # get frequency of drug in prescription by drug id and prescription id
            drug_frequency = access_db.get_drug_frequency_by_prescription_id(self.c, drug[0], prescription_id)
            
            drug_info = {'drug_id': drug[0], 'name': drug_name[0], 'amount': drug_amount, 'frequency': drug_frequency}  
      
        
        return {'prescription_id': prescription_id, 'drug': drug_info, 'doctor_id': doctor_id, 'annotation': annotation, 'created_at': created_at, 'valid_until': valid_until, 'used': used, 'pharm_id': pharm_id}
        
    # get all prescriptions of the patient as list of dictionaries with date of creation
    def get_prescriptions_overview(self):
        prescription_list = []
        for pres in self.prescriptions:
            prescription_list.append({'prescription_id': pres, 'created_at': access_db.get_created_at_by_prescription_id(self.c, pres)})
        return prescription_list
        
    # return dict with drug details
    # {'drug_id', 'name': 'IBUPROFEN', 'side_effects': 'Headache', 'alternatives':'Paracetamol'}
    def get_drug_detail(self, drug_id):
        return {'drug_id': drug_id, 'name': access_db.get_drug_name_by_id(self.c, drug_id)[0], 'side_effects': access_db.get_side_effects_by_drug_id(self.c, drug_id), 'alternatives':access_db.get_alternatives_by_drug_id(self.c, drug_id)}
    
    # list: a list of dicts in the following structure
    #[{'name':'IBUPROFEN', 'drug_id': '1243', 'time':'10:00 AM'},
    #{'name':'PARACETAMOL', 'drug_id': '1244', 'time':'18:00 AM'}]
    def get_todays_medication(self):
        # get todays date in format YYYY-MM-DD
        today = datetime.date.today()
        pass
        
        
        
    
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

# test get_drug function endpoints
#print(pat.get_list_of_drugs())
#print(pat.get_drug_overview())
#print(pat.get_prescriptions_overview())
#print(pat.get_drug_detail("1"))

print(pat.get_prescription_detail("9"))
        