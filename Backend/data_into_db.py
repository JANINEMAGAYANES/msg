import sqlite3

# Open backend.db 
conn = sqlite3.connect('msg/Backend/backend.db')

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

# Create a dictionary of demo entries for Prescriptions
prescriptions = [
    {'pat_id': 1, 'drugs_id': '1,2,3', 'annotation': 'Take with food', 'amount': 3, 'freq': 'morning, noon, night', 'notification': '10:00, 14:00, 20:00', 'created_at': '2021-01-01 00:00:00', 'valid_until': '2021-01-31 00:00:00', 'used': '2021-01-01 00:00:00', 'pharm_id': 1},
    {'pat_id': 2, 'drugs_id': '4,5,6', 'annotation': 'Take with water', 'amount': 2, 'freq': 'morning, night', 'notification': '09:00, 21:00', 'created_at': '2021-01-02 00:00:00', 'valid_until': '2021-01-30 00:00:00', 'used': '2021-01-02 00:00:00', 'pharm_id': 2},
    {'pat_id': 3, 'drugs_id': '7,8,9', 'annotation': 'Take with milk', 'amount': 1, 'freq': 'morning', 'notification': '08:00', 'created_at': '2021-01-03 00:00:00', 'valid_until': '2021-01-29 00:00:00', 'used': '2021-01-03 00:00:00', 'pharm_id': 3},
    {'pat_id': 4, 'drugs_id': '10,11,12', 'annotation': 'Take with juice', 'amount': 4, 'freq': 'morning, noon, evening, night', 'notification': '07:00, 12:00, 18:00, 22:00', 'created_at': '2021-01-04 00:00:00', 'valid_until': '2021-01-28 00:00:00', 'used': '2021-01-04 00:00:00', 'pharm_id': 4},
    {'pat_id': 5, 'drugs_id': '13,14,15', 'annotation': 'Take with coffee', 'amount': 5, 'freq': 'morning, noon, evening, night, midnight', 'notification': '06:00, 11:00, 17:00, 21:00, 23:00', 'created_at': '2021-01-05 00:00:00', 'valid_until': '2021-01-27 00:00:00', 'used': '2021-01-05 00:00:00', 'pharm_id': 5},
    {'pat_id': 6, 'drugs_id': '16,17,18', 'annotation': 'Take with tea', 'amount': 6, 'freq': 'morning, noon, evening, night, midnight, early morning', 'notification': '05:00, 10:00, 16:00, 20:00, 22:00, 04:00', 'created_at': '2021-01-06 00:00:00', 'valid_until': '2021-01-26 00:00:00', 'used': '2021-01-06 00:00:00', 'pharm_id': 6},
    {'pat_id': 7, 'drugs_id': '19,20,21', 'annotation': 'Take with beer', 'amount': 7, 'freq': 'morning, noon, evening, night, midnight, early morning, late night', 'notification': '04:00, 09:00, 15:00, 19:00, 21:00, 03:00, 01:00', 'created_at': '2021-01-07 00:00:00', 'valid_until': '2021-01-25 00:00:00', 'used': '2021-01-07 00:00:00', 'pharm_id': 7},
    {'pat_id': 8, 'drugs_id': '22,23,24', 'annotation': 'Take with wine', 'amount': 8, 'freq': 'morning, noon, evening, night, midnight, early morning, late night, early evening', 'notification': '03:00, 08:00, 14:00, 18:00, 20:00, 02:00, 00:00, 17:00', 'created_at': '2021-01-08 00:00:00', 'valid_until': '2021-01-24 00:00:00', 'used': '2021-01-08 00:00:00', 'pharm_id': 8},
    {'pat_id': 9, 'drugs_id': '25,26,27', 'annotation': 'Take with vodka', 'amount': 9, 'freq': 'morning, noon, evening, night, midnight, early morning, late night, early evening, late evening', 'notification': '02:00, 07:00, 13:00, 17:00, 19:00, 01:00, 23:00, 16:00, 22:00', 'created_at': '2021-01-09 00:00:00', 'valid_until': '2021-01-23 00:00:00', 'used': '2021-01-09 00:00:00', 'pharm_id': 9},
    {'pat_id': 10, 'drugs_id': '28,29,30', 'annotation': 'Take with gin', 'amount': 10, 'freq': 'morning, noon, evening, night, midnight, early morning, late night, early evening, late evening, early afternoon', 'notification': '01:00, 06:00, 12:00, 16:00, 18:00, 00:00, 22:00, 15:00, 21:00, 14:00', 'created_at': '2021-01-10 00:00:00', 'valid_until': '2021-01-22 00:00:00', 'used': '2021-01-10 00:00:00', 'pharm_id': 10}
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
    cursor.execute("INSERT INTO Prescription (pat_id, drugs_id, annotation, amount, freq, notification, created_at, valid_until, used, pharm_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (prescription['pat_id'], prescription['drugs_id'], prescription['annotation'], prescription['amount'], prescription['freq'], prescription['notification'], prescription['created_at'], prescription['valid_until'], prescription['used'], prescription['pharm_id']))
    
# Insert the demo entries into the Drugs table
for drug in drugs:
    cursor.execute("INSERT INTO Drugs (name, side_effects, alternative_drug_id, price) VALUES (?, ?, ?, ?)", (drug['name'], drug['side_effects'], drug['alternative_drug_id'], drug['price']))
    
# Insert the demo entries into the Pharmacies table
for pharmacy in pharmacies:
    cursor.execute("INSERT INTO Pharmacy (name) VALUES (?)", (pharmacy['name'],))
    
# Commit the changes
conn.commit()

    
    



