from database import Database

db = Database()

def select_email(email):
    return db.select_condition("address", ("id_address",), f"email = '{email}'")

def select_custumer(id_address, *columns):
    return db.select_condition("custumer", (columns), f"id_address = '{id_address}'")

def create_custumer(name, email, password):
    global db
    
    response = False
    if len(select_email()) == 0:
        db.insert("address", ("email",), [email,])
        
        email = select_email(email)[0]
        name = name.split(' ')
        first_name = name[0]
        last_name = " ".join(name[1:])

        db.insert("custumer", ("first_name","last_name","password_custumer","id_address"), (first_name, last_name, password, email))
        response = True
    
    db.close_connection()
    return response


def login_custumer(email, password):
    id_address = select_email(email)
    response = False
    
    if len(id_address) > 0:
        password_registered = select_custumer(id_address[0][0], "password_custumer")
        
        if password == password_registered[0][0]:
            response = True
    
    db.close_connection()
    return response
        
