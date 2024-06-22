# import
import sqlite3
from global_variables import DATABASE_PATH


## Getter functions ##

#################### Patients ####################
# get patient by id
def get_patient_by_id(c,  id):
    c.execute("SELECT * FROM Patient WHERE id = ?", (id,))
    return c.fetchone()

# get patient by name & surname
def get_patient_by_name_surname(c, name, surname):
    c.execute("SELECT * FROM Patient WHERE name = ? AND surname = ?", (name, surname))
    return c.fetchone()

# get list of patients
def get_patients(c):
    c.execute("SELECT * FROM Patient")
    return c.fetchall()

#################### Prescription ####################
# get prescription by patient id
def get_prescription_by_patient_id(c, id):
    c.execute("SELECT id FROM Prescription WHERE pat_id = ?", (id,))
    return c.fetchall()

# get drug by id
def get_drug_name_by_id(c, id):
    c.execute("SELECT name FROM Drugs WHERE id = ?", (id,))
    return c.fetchone()

# get drug by prescription id
def get_drugs_by_prescription_id(c, id):
    c.execute("SELECT drug_id FROM Drug_in_Prescription WHERE prescription_id = ?", (id,))
    return c.fetchall()

# get list of drugs
def get_drugs(c):
    c.execute("SELECT id FROM Drugs")
    return c.fetchall()

def get_startdatum_by_id(c, drug_id, pres_id):
    c.execute("SELECT startdatum FROM Drug_in_Prescription WHERE drug_id = ? AND prescription_id = ?", (drug_id, pres_id))
    return c.fetchone()

def get_freq_by_id(c, drug_id, pres_id):
    c.execute("SELECT freq FROM Drug_in_Prescription WHERE drug_id = ? AND prescription_id = ?", (drug_id, pres_id))
    return c.fetchone()






# get doctor by id
def get_doctor_by_id(c, id):
    c.execute("SELECT * FROM Doctor WHERE id = ?", (id,))
    return c.fetchone()

# get pharmacy by id
def get_pharmacy_by_id(c, id):
    c.execute("SELECT * FROM Pharmacy WHERE id = ?", (id,))
    return c.fetchone()



    


