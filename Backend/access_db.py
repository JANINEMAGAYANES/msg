# import
import sqlite3

# create connection
conn = sqlite3.connect('msg/Backend/msg.db')

# create cursor
c = conn.cursor()

## Getter functions ##

#################### Patients ####################
# get patient by id
def get_patient_by_id(id):
    c.execute("SELECT * FROM patients WHERE id = ?", (id,))
    return c.fetchone()

# get patient by name & surname
def get_patient_by_name_surname(name, surname):
    c.execute("SELECT * FROM patients WHERE name = ? AND surname = ?", (name, surname))
    return c.fetchone()

# get list of patients
def get_patients():
    c.execute("SELECT * FROM patients")
    return c.fetchall()

#################### Prescription ####################
# get prescription by patient id
def get_prescription_by_patient_id(id):
    c.execute("SELECT * FROM prescriptions WHERE patient_id = ?", (id,))
    return c.fetchall()

# get drug by id
def get_drug_by_id(id):
    c.execute("SELECT * FROM drugs WHERE id = ?", (id,))
    return c.fetchone()

# get drug by name
def get_drug_by_name(name):
    c.execute("SELECT * FROM drugs WHERE name = ?", (name,))
    return c.fetchone()

# get list of drugs
def get_drugs():
    c.execute("SELECT * FROM drugs")
    return c.fetchall()

# get doctor by id
def get_doctor_by_id(id):
    c.execute("SELECT * FROM doctors WHERE id = ?", (id,))
    return c.fetchone()

# get pharmacy by id
def get_pharmacy_by_id(id):
    c.execute("SELECT * FROM pharmacies WHERE id = ?", (id,))
    return c.fetchone()




