from model import product_model


class service:
    def __init__(self,
                 db
                 ) -> None:
        self.db = db

    def get_all(self):
        cursor = self.db.cursor()
        query = "select * from product"
        cursor.execute(query)
        data = cursor.fetchall()
        result = []
        for row in data:
            sp = product_model.product(
                ID_product=row[0],
                name_product=row[1],
                image=row[2],
                charact=row[3],
                type=row[4],
                material=row[5],
                note=row[6],
                price=row[7],
            )
            result.append(sp.serialize())
        return result

    def get_by_ID(self, ID_product):
        cursor = self.db.cursor()
        query = "select * from product where ID_product = %s"
        value = (ID_product,)
        cursor.execute(query, value)
        sp = product_model.product(ID_product=-1)
        row = cursor.fetchone()
        if row != None:
            sp = product_model.product(
                ID_product=row[0],
                name_product=row[1],
                image=row[2],
                charact=row[3],
                type=row[4],
                material=row[5],
                note=row[6],
                price=row[7],
            )
        return sp.serialize()

    def add_sp(self, product: product_model = None):
        cursor = self.db.cursor()
        query = "INSERT INTO product (image,name_product,charact,type,material,note,price) VALUES (%s, %s, %s, %s, %s,%s,%s)"
        value = (
            product.image,
            product.name_product,
            product.charact,
            product.type,
            product.material,
            product.note,
            product.price
        )
        cursor.execute(query, value)
        self.db.commit()
        return cursor.rowcount
