
from distutils.util import execute
from model import orders_model, user_model, product_model


class service:
    def __init__(self,
                 db
                 ) -> None:
        self.db = db

    def add(self, orders: orders_model = None):
        cursor = self.db.cursor()
        query = "INSERT INTO orders (date, size, color,ID_user,ID_product,status,quantity) VALUES (%s, %s, %s, %s, %s,%s,%s)"
        value = (
            orders.date,
            orders.size,
            orders.color,
            orders.user.ID_user,
            orders.product.ID_product,
            orders.status,
            orders.quantity

        )
        cursor.execute(query, value)
        self.db.commit()
        return cursor.rowcount

    def get_by_ID_user(self, ID_user):
        cursor = self.db.cursor()
        query = """SELECT * FROM orders as o 
                    LEFT JOIN product as p on o.ID_product = p.ID_product
                    where o.ID_user = %s and status = 1"""
        value = (ID_user,)
        cursor.execute(query, value)
        data = cursor.fetchall()
        result = []
        for row in data:
            pro = product_model.product(
                ID_product=row[8],
                name_product=row[9],
                image=row[10],
                charact=row[11],
                type=row[12],
                material=row[13],
                note=row[14],
                price=row[15]
            )

            sp = orders_model.orders(
                ID_order=row[0],
                date=row[1],
                size=row[2],
                color=row[3],
                user=user_model.user(ID_user=row[4]),
                product=pro,
                status=row[6],
                quantity=row[7],
            )
            result.append(sp.serialize())
        return result

    def get_by_ID_user_list(self):
        cursor = self.db.cursor()
        query = """SELECT * FROM orders as o LEFT JOIN product as p on o.ID_product = p.ID_product 
                    RIGHT JOIN user as u on o.ID_user = u.ID_user
                    where status = 1"""

        cursor.execute(query)
        data = cursor.fetchall()
        result = []
        for row in data:
            pro = product_model.product(
                ID_product=row[8],
                name_product=row[9],
                image=row[10],
                charact=row[11],
                type=row[12],
                material=row[13],
                note=row[14],
                price=row[15]
            )
            use = user_model.user(
                ID_user=row[16],
                email=row[17],
                password=row[18],
                role=row[19],
                name=row[20],
                adders=row[21],
                SDT=row[22]
            )
            sp = orders_model.orders(
                ID_order=row[0],
                date=row[1],
                size=row[2],
                color=row[3],
                user=use,
                product=pro,
                status=row[6],
                quantity=row[7],
            )
            result.append(sp.serialize())
        return result

    def get_by_date_ID_user(self):
        cursor = self.db.cursor()
        query = """SELECT * FROM orders as o LEFT JOIN product as p on o.ID_product = p.ID_product 
                    RIGHT JOIN user as u on o.ID_user = u.ID_user where o.status = 2"""
        cursor.execute(query)
        data = cursor.fetchall()
        result = []
        for row in data:
            pro = product_model.product(
                ID_product=row[8],
                name_product=row[9],
                image=row[10],
                charact=row[11],
                type=row[12],
                material=row[13],
                note=row[14],
                price=row[15]
            )
            use = user_model.user(
                ID_user=row[16],
                email=row[17],
                password=row[18],
                role=row[19],
                name=row[20],
                adders=row[21],
                SDT=row[22]
            )
            sp = orders_model.orders(
                ID_order=row[0],
                date=row[1],
                size=row[2],
                color=row[3],
                user=use,
                product=pro,
                status=row[6],
                quantity=row[7],
            )
            result.append(sp.serialize())
        return result

    def get_by_update(self, ID_order):
        cursor = self.db.cursor()
        query = """UPDATE orders SET status = 2 WHERE ID_order = %s"""
        value = (ID_order,)
        cursor.execute(query, value)
        self.db.commit()
        return cursor.rowcount

    def get_by_delete(self, ID_order):
        cursor = self.db.cursor()
        query = """DELETE FROM orders WHERE ID_order = %s"""
        value = (ID_order,)
        cursor.execute(query, value)
        self.db.commit()
        return cursor.rowcount
