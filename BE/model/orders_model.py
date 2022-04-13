from model import user_model
from model import product_model
class orders:
    def __init__(self,ID_order=0,date="",size="",color="",status="",quantity=0,user:user_model = None,product:product_model = None) -> None:
        self.ID_order = ID_order
        self.date = date
        self.size = size
        self.color = color
        self.status = status
        self.quantity = quantity
        self.user = user
        self.product = product
      
    
    def serialize(self):
        return {
            'ID_order': self.ID_order,
            'date': self.date,
            'size': self.size,
            'color': self.color,
            'status': self.status,
            'quantity': self.quantity,
            'user': self.user.serialize(),
            'product': self.product.serialize(),
            
        }
        
