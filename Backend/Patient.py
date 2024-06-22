# Import
import sqlite3  # import sqlite3 module
import access_db  # import access_db module
from global_variables import DATABASE_PATH

class Patient:
    def __init__(self, pat_id):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
        self.name = access_db.get_patient_by_id(self.c, pat_id)[1]
        self.surname = access_db.get_patient_by_id(self.c, pat_id)[2]
        self.prescriptions = access_db.get_prescription_by_patient_id(self.c, pat_id) # list of all prescriptions of the patient
    
    # get drugs from all prescriptions of the patient
    def get_list_of_drugs(self):
        drugs = []
        for pres in self.prescriptions:
            drugs += access_db.get_drugs_by_prescription_id(self.c, pres[0])
        return drugs
    
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
print(list(map(lambda x: access_db.get_drug_name_by_id(pat.c, x[0])[0], pat.get_list_of_drugs())))

    
        