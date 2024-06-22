
from global_variables import DATABASE_PATH# Create a SQLite DB and tables for the backend based on the following DBML schema:

# Importing the required libraries
import sqlite3

# Create a connection to the SQLite DB im current Folder Backend
conn = sqlite3.connect(DATABASE_PATH)
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
