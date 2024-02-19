from database.database import Database
from flask import session

def select_email(email, db):
    return db.select_condition("address", ("id_address",), f"email = '{email}'")

def select_custumer(id_address, db, *columns):
    return db.select_condition("custumer", (columns), f"id_address = '{id_address}'")

def create_custumer(name, email, password):
    db = Database()
    
    response = False
    if len(select_email(email, db)) == 0:
        db.insert("address", ("email",), [email,])
        
        email = select_email(email, db)[0]
        name = name.split(' ')
        first_name = name[0]
        last_name = " ".join(name[1:])

        db.insert("custumer", ("first_name","last_name","password_custumer","id_address"), (first_name, last_name, password, email))
        response = True
    
    db.close_connection()
    return response


def login_custumer(email, password):
    db = Database()
    id_address = select_email(email, db)
    response = False
    
    if len(id_address) > 0:
        password_registered = select_custumer(id_address[0][0], db, "password_custumer, first_name, last_name")
        
        if password == password_registered[0][0]:
            session["name"] = f"{password_registered[0][1]} {password_registered[0][2]}" 
            response = True
    
    db.close_connection()
    return response
        
