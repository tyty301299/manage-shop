
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from model import user_model
from model import orders_model
from model import product_model
from service import user_service
from service import product_service
from service import orders_service
import mysql.connector
db = mysql.connector.connect(
    host="localhost",
    port='3306',
    user="root",
    passwd="",
    database='manage_shop'
)

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
@cross_origin(origins='*')
def home_get_all():
    service = product_service.service(db)
    result = service.get_all()
    return jsonify(result)


@app.route('/detail/<int:ID_product>', methods=['GET'])
@cross_origin(origins='*')
def home_get_by_ID(ID_product):
    service = product_service.service(db)
    result = service.get_by_ID(ID_product)
    return jsonify(result)


@app.route('/login', methods=['POST'])
@cross_origin(origins='*')
def home_login():
    body = request.get_json(force=True)
    service = user_service.service(db)
    email = body.get('email', '')
    password = body.get('pass', '')
    result = service.get_by_ID(email, password)
    return jsonify(result)


@app.route('/cart', methods=['POST'])
@cross_origin(origins='*')
def home_addcart():
    body = request.get_json(force=True)

    orders = orders_model.orders(
        date=body.get('date', ''),
        size=body.get('size', ''),
        color=body.get('color', ''),
        user=user_model.user(ID_user=body.get('ID_user', '')),
        product=product_model.product(ID_product=body.get('ID_product')),
        status=body.get('status', ''),
        quantity=body.get('quantity', ''),
    )
    service = orders_service.service(db)
    result = service.add(orders)
    return jsonify({
        "message": result
    })


@app.route('/insertdata', methods=['POST'])
@cross_origin(origins='*')
def home_addsp():
    body = request.get_json(force=True)
    po = product_model.product(
        image=body.get('image', ''),
        name_product=body.get('name_product', ''),
        charact=body.get('charact', ''),
        type=body.get('type', ''),
        material=body.get('material', ''),
        note=body.get('note', ''),
        price=body.get('price', ''),
    )

    service = product_service.service(db)
    result = service.add_sp(po)
    return jsonify({
        "message": result
    })


@app.route('/cart/<int:ID_user>', methods=['GET'])
@cross_origin(origins='*')
def get_orders_by_ID_user(ID_user):
    service = orders_service.service(db)
    result = service.get_by_ID_user(ID_user)
    return jsonify(result)


@app.route('/revenue', methods=['GET'])
@cross_origin(origins='*')
def get_orders_by_ID_user_date():
    service = orders_service.service(db)
    result = service.get_by_date_ID_user()
    return jsonify(result)


@app.route('/browselist', methods=['GET'])
@cross_origin(origins='*')
def get_orders_by_ID_user_list():
    service = orders_service.service(db)
    result = service.get_by_ID_user_list()
    return jsonify(result)

@app.route('/update', methods=['PUT'])
@cross_origin(origins='*')
def get_order_update():
    body = request.get_json(force=True)
    ID_order = body.get("ID_order","")
    service = orders_service.service(db)
    result = service.get_by_update(ID_order)
    return jsonify({
        "message": result
    })
    
@app.route('/delete', methods=['DELETE'])
@cross_origin(origins='*')
def get_order_delete():
    body = request.get_json(force=True)
    ID_order = body.get("ID_order","")
    service = orders_service.service(db)
    result = service.get_by_delete(ID_order)
    return jsonify({
        "message": result
    })

app.config.from_object(__name__)
if __name__ == '__main__':
    app.run()
    # host='localhost', port='8000', debug=True
