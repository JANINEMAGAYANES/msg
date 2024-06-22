import sqlite3
import access_db
from global_variables import DATABASE_PATH

class Prescription:
    def __init__(self, pres_id):
        self.conn = sqlite3.connect(DATABASE_PATH)
        self.c = self.conn.cursor()
        self.pat_id = self.c.execute("SELECT pat_id FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.drugs_id = self.c.execute("SELECT drugs_id FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.annotation = self.c.execute("SELECT annotation FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.created_at = self.c.execute("SELECT created_at FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.valid_until = self.c.execute("SELECT valid_until FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.used = self.c.execute("SELECT used FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        self.pharm_id = self.c.execute("SELECT pharm_id FROM Prescription WHERE id = ?", (pres_id,)).fetchone()[0]
        
    def get_drugs(self):
        return self.drugs_id.split(", ")
    

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
    
    
### Test ###
pres01 = Prescription(1)
for drug_id in pres01.get_drugs():
    # get name of the drug
    print(access_db.get_drug_name_by_id(drug_id)) # print all drugs of the prescription