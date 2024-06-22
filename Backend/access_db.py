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
# get list for prescription ids by patient id 
def get_prescription_by_patient_id(c, id):
    c.execute("SELECT id FROM Prescription WHERE pat_id = ?", (id,))
    # return list of integers
    return list(map(lambda x: x[0], c.fetchall()))
    

# get all prescription with specific drug
def get_prescriptions_by_drug_id(c, id):
    c.execute("SELECT prescription_id FROM Drug_in_Prescription WHERE drug_id = ?", (id,))
    prescriptions = c.fetchall()
    prescriptions = list(dict.fromkeys(prescriptions))
    # each prescription is a tuple, so we need to extract the first element
    return list(map(lambda x: x[0], prescriptions))

#################### Drugs ####################
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

# get side effects of a drug
def get_side_effects_by_drug_id(c, id):
    c.execute("SELECT side_effects FROM Drugs WHERE id = ?", (id,))
    return c.fetchone()

# get alternatives of a drug
def get_alternatives_by_drug_id(c, id):
    c.execute("SELECT alternative_drug_id FROM Drugs WHERE id = ?", (id,))
    return c.fetchone()

#################### Doctor ####################

# get doctor by id
def get_doctor_by_id(c, id):
    c.execute("SELECT * FROM Doctor WHERE id = ?", (id,))
    return c.fetchone()

# get pharmacy by id
def get_pharmacy_by_id(c, id):
    c.execute("SELECT * FROM Pharmacy WHERE id = ?", (id,))
    return c.fetchone()




# test get_drugs_by_patient_id function
conn = sqlite3.connect(DATABASE_PATH)
c = conn.cursor()
print(get_prescription_by_patient_id(c, 1))