import sqlite3
import access_db
from global_variables import DATABASE_PATH
from datetime import datetime

class Prescription:
    def __init__(self, pres_id):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
        # get all prescription ids of the patient
        self.pat_id = self.c.execute("SELECT pat_id FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.drugs_id = self.c.execute("SELECT drug_id FROM Drug_in_Prescription WHERE prescription_id = ?", (pres_id,)).fetchall()
       
    def get_drugs(self): # returns a list of drug_ids
        return self.drugs_id
    
    def get_drug_name(self):
        # returns a list of drugs
        drugs = []
        for drug in self.get_drugs(): 
            drugs.append(access_db.get_drug_name_by_id(self.c, drug[0])[0]) 
        return drugs
    
    def get_prescription_of_patient(self, pat_id):
        return access_db.get_prescriptions_by_patient_id(self.c, pat_id)
            
            
    

class Prescription_Handler:
    def __init__(self):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
    def create_prescription(self, pat_id, drugs_id, annotation, created_at, valid_until, pharm_id):
        self.c.execute("INSERT INTO Prescription (pat_id, drugs_id, annotation, created_at, valid_until, pharm_id) VALUES (?, ?, ?, ?, ?, ?)", (pat_id, drugs_id, annotation, created_at, valid_until, pharm_id))
        self.conn.commit()
        # get id of the last inserted prescription
        self.c.execute("SELECT last_insert_rowid()")
        return Prescription(self.c.fetchone()[0])
    

class Drug_in_Prescription_Handler:
    def __init__(self, drug_id ,pres_id):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
        self.drug_id = drug_id
        self.pres_id = pres_id
       
        self.startdatum = access_db.get_startdatum_by_id(self.c, drug_id,pres_id)[0]    
        self.freq = access_db.get_freq_by_id(self.c, drug_id,pres_id)[0]
        

    

    def if_intervall_is_today(freq, startdatum, heute=datetime.now()):
    # Ensure startdatum is a datetime object
        if not isinstance(startdatum, datetime):
            startdatum = datetime.strptime(startdatum, "%Y-%m-%d")
    
        # Calculate the difference in days
        tage_seit_start = (heute - startdatum).days
    
    # Check if today is a kreislauf day
        return tage_seit_start % (freq/24) == 0
        
    
    
    
### Test ###
print(Prescription(1).get_drug_name())