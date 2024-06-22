import access_db
import sqlite3  # import sqlite3 module
from global_variables import DATABASE_PATH

# connect to the database
conn = sqlite3.connect(DATABASE_PATH)
c = conn.cursor()
print(access_db.get_patient_by_id(c, 1))