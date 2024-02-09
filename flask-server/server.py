from flask import Flask, request
from flask_cors import CORS
from database import Database
import json


app = Flask(__name__)
CORS(app)
db = Database()

#INSERT IN TABLES
#def insert

@app.route("/datas")
def datas():
    print("opa")
    with open('./dados.json', 'r') as file:
        datas = json.load(file)

    return datas

@app.route("/sendDatasCurriculum", methods=["POST"])
def sendDatasCurriculum():
    data_received = request.get_json()
    
    print(data_received)

    return "Datas sended with success!!"

if __name__ == "__main__":
    app.run(debug=True)