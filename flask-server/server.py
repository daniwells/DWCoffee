from flask import Flask, request, session
from flask_cors import CORS, cross_origin
from database.operations_database import create_custumer, login_custumer, return_restaurants_datas, return_coffee_datas
import json
from flask_session import Session

app = Flask(__name__, 
            static_url_path='', 
            static_folder='web'
)
        
CORS(app, supports_credentials=True)
app.secret_key = "paosinho"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config.from_object(__name__)
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
Session(app)


@app.route("/datas")
@cross_origin(supports_credentials=True)
def datas():
    with open('./dados.json', 'r') as file:
        datas = json.load(file)
    return datas


@app.route("/register_backend", methods=["POST"])
@cross_origin(supports_credentials=True)
def register_backend():
    if request.method == "POST":
        data_received = request.get_json() 
        confirm = create_custumer(data_received["name"], data_received["email"], data_received["password"])
        
        if confirm:
            return "User registered with success!! Make to login for access your account."
        return "Email already registered."
    return "FAILED URL"


@app.route("/login_backend", methods=["POST"])
@cross_origin(supports_credentials=True)
def login_backend():
    if request.method == "POST":
        data_received = request.get_json()
        if login_custumer(data_received["email"], data_received["password"]):
            return f"Login accomplished!!"
        return "ERROR!! Login or password icorrect."
    return "FAILED URL"
 

@app.route("/sendDatasCurriculum", methods=["POST"])
@cross_origin(supports_credentials=True)
def sendDatasCurriculum():
    if request.method == "POST":
        data_received = request.get_json()
        return "We already received your curriculum!! If you want to modify it you can send a new one."
    return "FAILED URL"


@app.route("/get_session", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_session():
    if request.method == "GET":
        return {"name":session.get("name"), "email":session.get("email")}


@app.route("/logout")
@cross_origin(supports_credentials=True)
def logout():
    session.pop('name', None)
    session.pop('email', None)
    return {}


@app.route("/get_restaurant_data/<pesquiseType>", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_restaurant_data(pesquiseType=""):
    datas = {}
    if pesquiseType == "address":
        datas = return_restaurants_datas(pesquiseType, ("id_restaurant", "name", "id_address", "email", "opening", "image_restaurant"))
    elif pesquiseType == "info":
        datas = return_restaurants_datas(pesquiseType, ("id_restaurant", "name", "description_menu", "id_chef", "description_kitchen"))
    return datas


@app.route("/get_coffee_data", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_coffee_data():
    
    try:
        datas = return_coffee_datas()
    
        return datas
    except:
        return {"ERROR":"ERROR"} # Tratar esse erro

if __name__ == "__main__":
    app.run(debug=True)