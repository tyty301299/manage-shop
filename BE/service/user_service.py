from  model import user_model 
class service:
    def __init__(self,
                 db
                 ) -> None:
        self.db = db
    
    def get_by_ID(self,email,password):
        cursor = self.db.cursor()
        query = "select * from user where email = %s and pass = %s"
        value = (email,password)
        cursor.execute(query, value)
        user = user_model.user(ID_user = -1)
        row = cursor.fetchone()
        if row != None:
             user = user_model.user(
                ID_user=row[0],
                email=row[1],
                password=row[2],
                role=row[3],
                name=row[4],
                adders=row[5],
                SDT=row[6],
            )
        return user.serialize()