import psycopg2

class Database:
    def __init__(self):
        self.conn = psycopg2.connect(host="127.0.0.1", database="dwcoffee", user="postgres", password="admin")
        self.cursor = self.conn.cursor()

    def close_connection(self):
        self.conn.close()

    def insert(self, table, colunms, values):  
        string_columns = ','.join(colunms)
        values_reference = '%s, '*len(colunms) 
        values_reference = values_reference[:-2]
        print(values_reference)

        try:
            self.cursor.execute(f"INSERT INTO {table} ({string_columns}) VALUES({values_reference})", [value for value in values])
            self.conn.commit()

            result = "OK"
        except Exception as e:
            result = f"ERROR!! {e}"

        self.close_connection()
        return result

    def select(self, tabela, valores):
        self.cursor.execute(f"SELECT {valores} FROM {tabela}")
        return self.cursor.fetchall()
        
    
