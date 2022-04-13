class user:
    def __init__(self, ID_user=0, email="", password="", role=0, name="", adders="", SDT="") -> None:
        self.ID_user = ID_user
        self.email = email
        self.password = password
        self.role = role
        self.name = name
        self.adders = adders
        self.SDT = SDT

    def serialize(self):
        return {
            'ID_user': self.ID_user,
            'email': self.email,
            'pass': self.password,
            'role': self.role,
            'name': self.name,
            'adders': self.adders,
            'SDT': self.SDT,

        }
