class product:
    def __init__(self,ID_product=0,name_product="",image="",charact="",type="",material="",note="",price=0) -> None:
        self.ID_product = ID_product
        self.name_product = name_product
        self.image = image
        self.charact = charact
        self.type = type
        self.material = material
        self.note = note
        self.price = price
    
    def serialize(self):
        return {
            'ID_product': self.ID_product,
            'name_product': self.name_product,
            'image': self.image,
            'charact': self.charact,
            'type': self.type,
            'material': self.material,
            'note': self.note,
            'price': self.price,
            
        }
        
