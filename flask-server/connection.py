import psycopg2
import sqlalchemy

class Bank:
    def __init__(self):
        self.conn = psycopg2.connect(host="127.0.0.1", database="dwcoffee", user="postgres", password="admin")
        self.cur = self.conn.cursor()

    def insert(self, table, colunms, values):
        #concatenateValues = ""
        concatenateColumns = ""
        concatenateConfugurationValues = ""

        for i in range(len(colunms)):
            concatenateColumns += f"{colunms[i]}, "
            concatenateConfugurationValues += "%s, "
       
        concatenateColumns = concatenateColumns[:-2]
        concatenateConfugurationValues = concatenateConfugurationValues[:-2]
        self.cur.execute(f"INSERT INTO {table} ({concatenateColumns}) VALUES({concatenateConfugurationValues})", [value for value in values])
        self.conn.commit()
        print("Sended with successfuly")

    def select(self, tabela, valores):
        self.cur.execute(f"SELECT {valores} FROM {tabela}")
        return self.cur.fetchall()
        


bank = Bank()
bank.insert("custumer", ("full_name", "password_account", "email"), ("daniel", "123", "daniel@gmail.com"))
#cur.close()
#conn.close()

##############################################################################

"""
engine = sqlalchemy.create_engine("postgresql+psycopg2://postgres:Irineu@231@localhost:5432/dwcoffee")

base = declarative_base()

class Custumer(base):
    __tablename__ = "custumer"
"""

    
