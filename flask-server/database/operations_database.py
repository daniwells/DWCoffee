from database.database import Database
from flask import session

def select_email(email, db):
    return db.select_condition("address", ("id_address",), f"email = '{email}'")

def select_custumer(id_address, db):
    return db.select_condition("address_custumer", ("id_custumer",), f"email = '{email}'")

def create_custumer(name, email, password):
    db = Database()
    
    response = False
    if len(select_email(email, db)) == 0:
        id_address = db.insert("address", ("email",), [email,], "id_address")
        
        id_address = select_email(email, db)[0]
        name = name.split(' ')
        first_name = name[0]
        last_name = " ".join(name[1:])

        id_custumer = db.insert("custumer", ("first_name","last_name","password"), (first_name, last_name, password))
        db.insert("address_custumer", ("id_custumer", "id_address"), (id_custumer,id_address))
        response = True
    
    db.close_connection()
    return response


def login_custumer(email, password):
    db = Database()
    id_address = select_email(email, db)

    response = False
    if len(id_address) > 0:
        password_registered = select_custumer(email, db, "password, first_name, last_name")
        
        if password == password_registered[0][0]:
            session["name"] = f"{password_registered[0][1]} {password_registered[0][2]}" 
            response = True
    
    db.close_connection()
    return response
        
