from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/datas")
def datas():
    print("opa")
    with open('./dados.json', 'r') as file:
        datas = json.load(file)

    return datas

@app.route("/sendDatas", methods=["POST"])
def sendDatas():
    
    dataReceived = request.get_json()
    with open('./dados.json', 'r') as file:
        datas = json.load(file)

    datas['curriculum'].append(dataReceived)

    with open('./dados.json', 'w') as file:
        json.dump(
                datas, 
                file, 
                ensure_ascii=False,
                indent=3,
                separators=(',', ':'))


    return "Datas sended with success"

if __name__ == "__main__":
    app.run(debug=True)