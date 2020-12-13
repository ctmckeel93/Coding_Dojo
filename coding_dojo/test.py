class User:
    def _init_(self, full_name, birthday):
        self.name = full_name
        self.birthday = birthday # yyyymmdd
user = User("Corey Mckeel" , "19930625")
print(User)