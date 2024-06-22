import access_db
import Patient
import sqlite3
import datetime
from global_variables import DATABASE_PATH

class Doctor:
    
    def __init__(self):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()        
            
    def get_patient(self, first_name, last_name):
        patient_id = access_db.get_patient_by_name_surname(self.c, first_name, last_name)[0]
        patient = Patient.Patient(patient_id)
        return patient
    
    def new_precription(self, patient_id, list_of_drug_id, valid_until, amount, freq, annotation):
        # today's date
        today = datetime.date.today()
        
        # new empty prescription & get prescription_id
        self.c.execute("INSERT INTO Prescription (pat_id, annotation, valid_until, created_at) VALUES (?, ?, ?, ?)", (patient_id, annotation, valid_until, today))
        prescription_id = self.c.lastrowid
        
        # insert drug_in_prescription
        for drug_id in list_of_drug_id:
            self.c.execute("INSERT INTO Drug_in_Prescription (drug_id, prescription_id, annotation, amount, freq) VALUES (?, ?, ?, ?, ?)", (drug_id, prescription_id, annotation, amount, freq))
        
        
        self.conn.commit()
        return prescription_id
        
    
        
# test
doctor = Doctor()
print(doctor.get_patient("Bob", "Doe"))
id = doctor.new_precription(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "2022-01-01", 2, "1-0-1", "Take with food")
print(access_db.get_prescription_by_id(doctor.c, id))
        