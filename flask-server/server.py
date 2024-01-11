from flask import Flask, request
from flask_cors import CORS
from connection import Bank
import json
import psycopg2



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

    datas['curriculum'][0] = dataReceived

    with open('./dados.json', 'w') as file:
        json.dump(
                datas, 
                file, 
                ensure_ascii=False,
                indent=3,
                separators=(',', ':'))
        
    
    bank = Bank()
    

    def verifySizeTable(table, columnSelect):
        bank.cur.execute("SELECT COUNT(*) FROM address")
        amount_codes = bank.cur.fetchone()

    bank.insert("address", ("cep", "phone"), (dataReceived["PersonalDatas"]["cep"], dataReceived["PersonalDatas"]["phone"]))
    

    bank.insert("curriculum", ("emergency_contact", "cpf", "about_user", "id_custumer_address"), 
                (
                    dataReceived["PersonalDatas"]["phone"],
                    dataReceived["PersonalDatas"]["cpf"],
                    dataReceived["PersonalDatas"]["about"],
                    amount_codes,
                ))
    
    bank.insert("address", ("cep", "phone"), (dataReceived["PreviousJobs"]["cepCompany"], dataReceived["PreviousJobs"]["phoneCompany"]))
    bank.insert("jobs", ("company", "position_company", "about_company", "date_start", "date_end", "id_address"), 
                (
                    dataReceived["PreviousJobs"]["company"],
                    dataReceived["PreviousJobs"]["position"],
                    dataReceived["PreviousJobs"]["about"],
                    dataReceived["PreviousJobs"]["date_start"],
                    dataReceived["PreviousJobs"]["date_limit"],

                ))


    return "Datas sended with success"

if __name__ == "__main__":
    app.run(debug=True)