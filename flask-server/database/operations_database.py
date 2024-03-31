from database.database import Database
from flask import session
import base64

def select_custumer(email, db, columns):
    return db.select_condition("custumer", (columns,), f"email = '{email}'")

##################################################

def create_custumer(name, email, password):
    db = Database()
    
    response = False
    if len(select_custumer(email, db, "email")) == 0:
        name = name.split(' ')
        first_name = name[0]
        last_name = " ".join(name[1:])

        db.insert("custumer", ("first_name","last_name","password","email"), (first_name, last_name, password, email))
        response = True

    db.close_connection()
    return response

##################################################

def login_custumer(email, password):
    db = Database()
    id_custumer = select_custumer(email, db, "email")

    response = False
    if len(id_custumer) > 0:
        custumer_datas = select_custumer(email, db, "password, first_name, last_name")
        
        if password == custumer_datas[0][0]:
            session["name"] = f"{custumer_datas[0][1]} {custumer_datas[0][2]}" 
            session["email"] = email
            response = True
    
    db.close_connection()
    return response

##################################################

def returnImages(db, title, id, id_name):
    path = db.select_condition("dinamic_images", ("path_image",), f"{id_name} = {id} AND title = '{title}'")[0][0]

    with open(f"{path}", 'rb') as arq:
        image_restaurant = base64.b64encode(arq.read()).decode("utf-8")

    return image_restaurant

##################################################

def return_restaurants_datas(type, columns_restaurant_table):
    db = Database()
    restaurants = db.select("restaurants", columns_restaurant_table)

    response = {"response":False}
    if len(restaurants) > 0:
        restaurants_datas = []
        if type == "address":
            for rest in restaurants:
                imgRestaurant_info = returnImages(db, "restaurant_info", rest[0], "id_restaurant")
                
                restaurants_datas.append({
                    "restaurant":[rest[1], rest[3], rest[4], imgRestaurant_info],
                    "address":db.select_condition("address", ("cep", "city", "neighbordhood", "street", "phone_number", "postal_code"),f"id_address = {rest[2]}")[0]
                })
        else:
            for rest in restaurants:
                imgRestaurant_kitchen = returnImages(db, "kitchen", rest[0], "id_restaurant")
                imgRestaurant_chef = returnImages(db, "chef", rest[0], "id_restaurant")
              
                restaurants_datas.append({
                        "restaurant":[rest[1], rest[2], rest[4], imgRestaurant_kitchen, imgRestaurant_chef],
                        "chef":db.select_condition("chefs", ("name", "description", "x_social_media"),f"id_chef = {rest[3]}")[0]
                    })
            
        response = {"response":restaurants_datas}

    db.close_connection()
    return response

##################################################

def return_coffee_datas():
    db = Database()
    data_coffee = db.select("coffee", ("id_coffee", "name", "price", "description"))

    response = {"response":False}
    if len(data_coffee) > 0:
        datas_image = []
        for data in data_coffee:
            imgCoffee_1 = returnImages(db, "coffee_1", data[0], "id_coffee")
            imgCoffee_back = returnImages(db, "coffee_back", data[0], "id_coffee")
            datas_image.append([data[1], data[2], data[3], imgCoffee_1, imgCoffee_back, data[0]])
        
        response = {"response":datas_image}

    return response

##################################################

def return_one_coffee_datas(coffee_id):
    db = Database()
    coffee_path = db.select_condition("dinamic_images", ("path_image",), f"id_coffee = {coffee_id}")

    images_path = []
    for path in coffee_path[2:]:
        
        with open(f"{path[0]}", 'rb') as arq:
            images_path.append(base64.b64encode(arq.read()).decode("utf-8"))
    return {"RESPONSE":images_path}
