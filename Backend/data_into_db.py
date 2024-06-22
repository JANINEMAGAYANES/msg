import sqlite3
from global_variables import DATABASE_PATH

# Open backend.db 
conn = sqlite3.connect(DATABASE_PATH)

# Create a cursor object using the cursor() method
cursor = conn.cursor()

# Create a dictionary of 30 differents demo entries for Patients id, first_name, surname
patients = [
    {'first_name': 'Alice', 'surname': 'Doe'},
    {'first_name': 'Bob', 'surname': 'Doe'},
    {'first_name': 'Charlie', 'surname': 'Smith'},
    {'first_name': 'David', 'surname': 'Smith'},
    {'first_name': 'Eve', 'surname': 'Brown'},
    {'first_name': 'Frank', 'surname': 'Brown'},
    {'first_name': 'Grace', 'surname': 'Black'},
    {'first_name': 'Henry', 'surname': 'Black'},
    {'first_name': 'Ivy', 'surname': 'White'},
    {'first_name': 'John', 'surname': 'White'},
    {'first_name': 'Kate', 'surname': 'Green'},
    {'first_name': 'Luke', 'surname': 'Green'},
    {'first_name': 'Mary', 'surname': 'Red'},
    {'first_name': 'Nate', 'surname': 'Red'},
    {'first_name': 'Olive', 'surname': 'Blue'},
    {'first_name': 'Peter', 'surname': 'Blue'},
    {'first_name': 'Quinn', 'surname': 'Yellow'},
    {'first_name': 'Rose', 'surname': 'Yellow'},
    {'first_name': 'Sam', 'surname': 'Purple'},
    {'first_name': 'Tina', 'surname': 'Purple'},
    {'first_name': 'Uma', 'surname': 'Orange'},
    {'first_name': 'Vince', 'surname': 'Orange'},
    {'first_name': 'Wendy', 'surname': 'Pink'},
    {'first_name': 'Xavier', 'surname': 'Pink'},
    {'first_name': 'Yvonne', 'surname': 'Brown'},
    {'first_name': 'Zack', 'surname': 'Brown'},
    {'first_name': 'Ava', 'surname': 'Black'},
    {'first_name': 'Ben', 'surname': 'Black'},
    {'first_name': 'Cathy', 'surname': 'White'},
    {'first_name': 'Dan', 'surname': 'White'}
]

# Create a dictionary of demo entries for Doctors
doctors = [
    {'first_name': 'Dr. John', 'surname': 'Doe'},
    {'first_name': 'Dr. Jane', 'surname': 'Doe'},
    {'first_name': 'Dr. Alice', 'surname': 'Smith'},
    {'first_name': 'Dr. Bob', 'surname': 'Smith'},
    {'first_name': 'Dr. Charlie', 'surname': 'Brown'},
    {'first_name': 'Dr. David', 'surname': 'Brown'},
    {'first_name': 'Dr. Eve', 'surname': 'Black'},
    {'first_name': 'Dr. Frank', 'surname': 'Black'},
    {'first_name': 'Dr. Grace', 'surname': 'White'},
    {'first_name': 'Dr. Henry', 'surname': 'White'}
]   

# Create a dictionary of demo entries for Prescriptions id, pat_id, drugs_id, annotation, created_at, valid_until, used, pharm_id
# without notification, amount and freq
prescriptions = [
    {'pat_id': 1, 'drugs_id': 1, 'annotation': 'Take 1 tablet every 4 hours', 'created_at': '2021-01-01 00:00:00', 'valid_until': '2021-01-02 00:00:00', 'used': 'null', 'pharm_id': 1},
    {'pat_id': 2, 'drugs_id': 2, 'annotation': 'Take 1 tablet every 6 hours', 'created_at': '2021-01-02 00:00:00', 'valid_until': '2021-01-03 00:00:00', 'used': 'null', 'pharm_id': 2},
    {'pat_id': 3, 'drugs_id': 3, 'annotation': 'Take 1 tablet every 8 hours', 'created_at': '2021-01-03 00:00:00', 'valid_until': '2021-01-04 00:00:00', 'used': 'null', 'pharm_id': 3},
    {'pat_id': 4, 'drugs_id': 4, 'annotation': 'Take 1 tablet every 10 hours', 'created_at': '2021-01-04 00:00:00', 'valid_until': '2021-01-05 00:00:00', 'used': 'null', 'pharm_id': 4},
    {'pat_id': 5, 'drugs_id': 5, 'annotation': 'Take 1 tablet every 12 hours', 'created_at': '2021-01-05 00:00:00', 'valid_until': '2021-01-06 00:00:00', 'used': 'null', 'pharm_id': 5},
    {'pat_id': 6, 'drugs_id': 6, 'annotation': 'Take 1 tablet every 14 hours', 'created_at': '2021-01-06 00:00:00', 'valid_until': '2021-01-07 00:00:00', 'used': 'null', 'pharm_id': 6},
    {'pat_id': 7, 'drugs_id': 7, 'annotation': 'Take 1 tablet every 16 hours', 'created_at': '2021-01-07 00:00:00', 'valid_until': '2021-01-08 00:00:00', 'used': 'null', 'pharm_id': 7},
    {'pat_id': 8, 'drugs_id': 8, 'annotation': 'Take 1 tablet every 18 hours', 'created_at': '2021-01-08 00:00:00', 'valid_until': '2021-01-09 00:00:00', 'used': 'null', 'pharm_id': 8},
    {'pat_id': 9, 'drugs_id': 9, 'annotation': 'Take 1 tablet every 20 hours', 'created_at': '2021-01-09 00:00:00', 'valid_until': '2021-01-10 00:00:00', 'used': 'null', 'pharm_id': 9},
    {'pat_id': 10, 'drugs_id': 10, 'annotation': 'Take 1 tablet every 22 hours', 'created_at': '2021-01-10 00:00:00', 'valid_until': '2021-01-11 00:00:00', 'used': 'null', 'pharm_id': 10},
    {'pat_id': 11, 'drugs_id': 11, 'annotation': 'Take 1 tablet every 24 hours', 'created_at': '2021-01-11 00:00:00', 'valid_until': '2021-01-12 00:00:00', 'used': 'null', 'pharm_id': 1},
]

    
# Create a dictionary of 100 demo entries for Drugs id, name, side_effects, alternative_drug_id, price in €
# Vary with the number of drugs, side effects, alternative drugs and prices
drugs = [
    {'name': 'Paracetamol', 'side_effects': 'Headache, Nausea, Vomiting', 'alternative_drug_id': 2, 'price': '2.50'},
    {'name': 'Ibuprofen', 'side_effects': 'Dizziness, Rash, Itching', 'alternative_drug_id': 3, 'price': '3.50'},
    {'name': 'Aspirin', 'side_effects': 'Bleeding, Ulcers, Reye\'s syndrome', 'alternative_drug_id': 1, 'price': '1.50'},
    {'name': 'Amoxicillin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 5, 'price': '5.50'},
    {'name': 'Azithromycin', 'side_effects': 'Diarrhea, Nausea, Vomiting', 'alternative_drug_id': 6, 'price': '6.50'},
    {'name': 'Ciprofloxacin', 'side_effects': 'Nausea, Diarrhea, Vomiting', 'alternative_drug_id': 4, 'price': '4.50'},
    {'name': 'Doxycycline', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 8, 'price': '8.50'},
    {'name': 'Erythromycin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 9, 'price': '9.50'},
    {'name': 'Metronidazole', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 7, 'price': '7.50'},
    {'name': 'Clarithromycin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 11, 'price': '11.50'},
    {'name': 'Levofloxacin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 12, 'price': '12.50'},
    {'name': 'Trimethoprim', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 10, 'price': '10.50'},
    {'name': 'Fluconazole', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 14, 'price': '14.50'},
    {'name': 'Ketoconazole', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 15, 'price': '15.50'},
    {'name': 'Terbinafine', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 13, 'price': '13.50'},
    {'name': 'Acyclovir', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 17, 'price': '17.50'},
    {'name': 'Valacyclovir', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 18, 'price': '18.50'},
    {'name': 'Famciclovir', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 16, 'price': '16.50'},
    {'name': 'Ceftriaxone', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 20, 'price': '20.50'},
    {'name': 'Cefixime', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 21, 'price': '21.50'},
    {'name': 'Cefdinir', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 19, 'price': '19.50'},
    {'name': 'Cefpodoxime', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 23, 'price': '23.50'},
    {'name': 'Cefuroxime', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 24, 'price': '24.50'},
    {'name': 'Cephalexin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 22, 'price': '22.50'},
    {'name': 'Ciprofloxacin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 26, 'price': '26.50'},
    {'name': 'Levofloxacin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 27, 'price': '27.50'},
    {'name': 'Moxifloxacin', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 25, 'price': '25.50'},
    {'name': 'Doxycycline', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 29, 'price': '29.50'},
    {'name': 'Minocycline', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 30, 'price': '30.50'},
    {'name': 'Tetracycline', 'side_effects': 'Nausea, Vomiting, Diarrhea', 'alternative_drug_id': 28, 'price': '28.50'}
]
# Create a dictionary of demo entries for Drugs_in_Prescription
drugs_in_prescription = [
    {'drug_id': 1, 'prescription_id': 1, 'annotation': 'Take 1 tablet every 4 hours', 'amount': 1, 'freq': '4 hours'},
    {'drug_id': 2, 'prescription_id': 2, 'annotation': 'Take 1 tablet every 6 hours', 'amount': 1, 'freq': '6 hours'},
    {'drug_id': 3, 'prescription_id': 3, 'annotation': 'Take 1 tablet every 8 hours', 'amount': 1, 'freq': '8 hours'},
    {'drug_id': 4, 'prescription_id': 4, 'annotation': 'Take 1 tablet every 10 hours', 'amount': 1, 'freq': '10 hours'},
    {'drug_id': 5, 'prescription_id': 5, 'annotation': 'Take 1 tablet every 12 hours', 'amount': 1, 'freq': '12 hours'},
    {'drug_id': 6, 'prescription_id': 6, 'annotation': 'Take 1 tablet every 14 hours', 'amount': 1, 'freq': '14 hours'},
    {'drug_id': 7, 'prescription_id': 7, 'annotation': 'Take 1 tablet every 16 hours', 'amount': 1, 'freq': '16 hours'},
    {'drug_id': 8, 'prescription_id': 8, 'annotation': 'Take 1 tablet every 18 hours', 'amount': 1, 'freq': '18 hours'},
    {'drug_id': 9, 'prescription_id': 9, 'annotation': 'Take 1 tablet every 20 hours', 'amount': 1, 'freq': '20 hours'},
    {'drug_id': 10, 'prescription_id': 10, 'annotation': 'Take 1 tablet every 22 hours', 'amount': 1, 'freq': '22 hours'},
    {'drug_id': 11, 'prescription_id': 11, 'annotation': 'Take 1 tablet every 24 hours', 'amount': 1, 'freq': '24 hours'},
    {'drug_id': 12, 'prescription_id': 12, 'annotation': 'Take 1 tablet every 26 hours', 'amount': 1, 'freq': '26 hours'},
    {'drug_id': 13, 'prescription_id': 13, 'annotation': 'Take 1 tablet every 28 hours', 'amount': 1, 'freq': '28 hours'},
    {'drug_id': 14, 'prescription_id': 14, 'annotation': 'Take 1 tablet every 30 hours', 'amount': 1, 'freq': '30 hours'},
    {'drug_id': 15, 'prescription_id': 15, 'annotation': 'Take 1 tablet every 32 hours', 'amount': 1, 'freq': '32 hours'},
    {'drug_id': 16, 'prescription_id': 16, 'annotation': 'Take 1 tablet every 34 hours', 'amount': 1, 'freq': '34 hours'},
    {'drug_id': 17, 'prescription_id': 17, 'annotation': 'Take 1 tablet every 36 hours', 'amount': 1, 'freq': '36 hours'},
    {'drug_id': 18, 'prescription_id': 18, 'annotation': 'Take 1 tablet every 38 hours', 'amount': 1, 'freq': '38 hours'},
    {'drug_id': 19, 'prescription_id': 19, 'annotation': 'Take 1 tablet every 40 hours', 'amount': 1, 'freq': '40 hours'},
    {'drug_id': 20, 'prescription_id': 20, 'annotation': 'Take 1 tablet every 42 hours', 'amount': 1, 'freq': '42 hours'},
    {'drug_id': 21, 'prescription_id': 21, 'annotation': 'Take 1 tablet every 44 hours', 'amount': 1, 'freq': '44 hours'},
    {'drug_id': 22, 'prescription_id': 22, 'annotation': 'Take 1 tablet every 46 hours', 'amount': 1, 'freq': '46 hours'},
    {'drug_id': 23, 'prescription_id': 23, 'annotation': 'Take 1 tablet every 48 hours', 'amount': 1, 'freq': '48 hours'},
    {'drug_id': 24, 'prescription_id': 24, 'annotation': 'Take 1 tablet every 50 hours', 'amount': 1, 'freq': '50 hours'},
    {'drug_id': 25, 'prescription_id': 25, 'annotation': 'Take 1 tablet every 52 hours', 'amount': 1, 'freq': '52 hours'},
]

# Create a dictionary of demo entries for Pharmacies
pharmacies = [
    {'name': 'Pharmacy 1'},
    {'name': 'Pharmacy 2'},
    {'name': 'Pharmacy 3'},
    {'name': 'Pharmacy 4'},
    {'name': 'Pharmacy 5'},
    {'name': 'Pharmacy 6'},
    {'name': 'Pharmacy 7'},
    {'name': 'Pharmacy 8'},
    {'name': 'Pharmacy 9'},
    {'name': 'Pharmacy 10'}
]

# Insert the demo entries into the Patients table
for patient in patients:
    cursor.execute("INSERT INTO Patient (first_name, surname) VALUES (?, ?)", (patient['first_name'], patient['surname']))
    
# Insert the demo entries into the Doctors table
for doctor in doctors:
    cursor.execute("INSERT INTO Doctor (first_name, surname) VALUES (?, ?)", (doctor['first_name'], doctor['surname']))
    
# Insert the demo entries into the Prescriptions table
for prescription in prescriptions:
    cursor.execute("INSERT INTO Prescription (pat_id, drugs_id, annotation, created_at, valid_until, used, pharm_id) VALUES (?, ?, ?, ?, ?, ?, ?)", (prescription['pat_id'], prescription['drugs_id'], prescription['annotation'], prescription['created_at'], prescription['valid_until'], prescription['used'], prescription['pharm_id']))
# Insert the demo entries into the Drugs table
for drug in drugs:
    cursor.execute("INSERT INTO Drugs (name, side_effects, alternative_drug_id, price) VALUES (?, ?, ?, ?)", (drug['name'], drug['side_effects'], drug['alternative_drug_id'], drug['price']))
    
# Insert the demo entries into the Drugs_in_Prescription table
for drug_in_prescription in drugs_in_prescription:
    cursor.execute("INSERT INTO Drug_in_Prescription (drug_id, prescription_id, annotation, amount, freq) VALUES (?, ?, ?, ?, ?)", (drug_in_prescription['drug_id'], drug_in_prescription['prescription_id'], drug_in_prescription['annotation'], drug_in_prescription['amount'], drug_in_prescription['freq']))
# Insert the demo entries into the Pharmacies table
for pharmacy in pharmacies:
    cursor.execute("INSERT INTO Pharmacy (name) VALUES (?)", (pharmacy['name'],))
    
# Commit the changes
conn.commit()

    
    



