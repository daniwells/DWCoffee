from flask import Flask, request
from flask_cors import CORS
from database.operations_database import create_custumer, login_custumer
import json

app = Flask(__name__)
CORS(app)

@app.route("/datas")
def datas():
    print("opa")
    with open('./dados.json', 'r') as file:
        datas = json.load(file)

    return datas


@app.route("/register_backend", methods=["POST"])
def register_backend():
    if request.method == "POST":
        data_received = request.get_json()
        if data_received["password"] == data_received["confirmPassword"]:   
            confirm = create_custumer(data_received["name"], data_received["email"], data_received["password"])
            if confirm:
                return "SUCCESS"
            return "ERROR!! Email already registered."
        return "ERROR!! Passwords aren't equals."


@app.route("/login_backend", methods=["POST"])
def login_backend():
    if request.method == "POST":
        data_received = request.get_json()
        if login_custumer(data_received["email"], data_received["password"]):
            return "SUCCESS"
        return "FAILED"
 

@app.route("/sendDatasCurriculum", methods=["POST"])
def sendDatasCurriculum():
    
    data_received = request.get_json()
    
    print(data_received)

    return "Datas sended with success!!"

if __name__ == "__main__":
    app.run(debug=True)