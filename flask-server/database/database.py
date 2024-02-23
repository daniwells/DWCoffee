import psycopg2

class Database:
    def __init__(self):
        self.conn = psycopg2.connect(host="127.0.0.1", database="dwcoffee", user="postgres", password="admin")
        self.cursor = self.conn.cursor()

    def close_connection(self):
        self.conn.close()

    def insert(self, table, colunms, values, id=None):  
        string_columns = ','.join(colunms)
        values_reference = '%s, '*len(colunms) 
        values_reference = values_reference[:-2]

        try:

            self.cursor.execute(f"INSERT INTO {table} ({string_columns}) VALUES({values_reference}) RETURNING {id}", values)
            id = self.cursor.fetchone()[0]
            self.conn.commit()

            if id:
                return id
            
        except Exception as e:
            print(f"Error to insert in the database!! ERROR:{e}")
            return False

    def select(self, table, columns):
        string_columns = ','.join(columns)

        self.cursor.execute(f"SELECT {string_columns} FROM {table}")
        return self.cursor.fetchall()
    
    def select_condition(self, table, columns, condition):
        string_columns = ','.join(columns)

        self.cursor.execute(f"SELECT {string_columns} FROM {table} WHERE {condition}")
        return self.cursor.fetchall()
        
    
