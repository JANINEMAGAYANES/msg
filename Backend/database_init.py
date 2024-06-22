# Create a SQLite DB and tables for the backend based on the following DBML schema:
"""
Table Patient {
  id integer [primary key]
  first_name string
  surname string
}

Table Doctor {
  id integer [primary key]
  first_name string
  surname string
}

Table Prescription {
  id integer [primary key]
  pat_id integer
  drugs_id varchar
  annotation string
  created_at timestamp
  valid_until timestamp
  used timestamp
  pharm_id integer
}

Table Drugs {
  id integer [primary key]
  name string
  side_effects string
  alternative_drug_id int
  price string
}
Table Drug_in_Prescription{
  con integer [primary key]
  drug_id integer
  prescripition_id integer
  annotation string
  amount integer
  freq string
  notification dict
}
Table Pharmacy {
  id integer [primary key]
  name string
}

Ref: Patient.id < Prescription.id // many-to-one
Ref: Prescription.id < Drug_in_Prescription.con
Ref: Drug_in_Prescription.con > Drugs.id
Ref: Doctor.id < Prescription.id
Ref: Pharmacy.id < Prescription.id
"""


# Importing the required libraries
import sqlite3

# Create a connection to the SQLite DB im current Folder Backend
conn = sqlite3.connect('msg/Backend/backend.db')
c = conn.cursor()	

# Create the tables
c.execute('''CREATE TABLE Patient (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    surname TEXT
)''')   

c.execute('''CREATE TABLE Doctor (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    surname TEXT
)''')

c.execute('''CREATE TABLE Drugs (
    id INTEGER PRIMARY KEY,
    name TEXT,
    side_effects TEXT,
    alternative_drug_id INTEGER,
    price TEXT
)''')

c.execute('''CREATE TABLE Pharmacy (
    id INTEGER PRIMARY KEY,
    name TEXT
)''')

c.execute('''CREATE TABLE Prescription (
    id INTEGER PRIMARY KEY,
    pat_id INTEGER,
    drugs_id TEXT,
    annotation TEXT,
    created_at TIMESTAMP,
    valid_until TIMESTAMP,
    used TIMESTAMP,
    pharm_id INTEGER
)''')

c.execute('''CREATE TABLE Drug_in_Prescription (
    con INTEGER PRIMARY KEY,
    drug_id INTEGER,
    prescription_id INTEGER,
    annotation TEXT,
    amount INTEGER,
    freq TEXT
)''')


# Commit the changes and close the connection
conn.commit()
conn.close()
