class User:
    def __init__(self, name, email, balance):
        self.name = name
        self.email = email
        self.account_balance = balance
    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def make_transfer(self, amount, target):
        self.account_balance -= amount
        target.account_balance += amount

    def display_balanace(self):
        print(f" The balance of {self.name} is {self.account_balance}")



user1 = User('Marcus', 'mkjordan@gmail.com', 500)
user2 = User('Raina', 'incendiskye@gmail.com', 1000)
user3 = User('Jacob', 'Jakefromstatefarm@all.com', 50 )

user1.make_deposit(100)
user1.display_balanace()
user1.make_deposit(200)
user1.display_balanace()
user1.make_deposit(50)
user1.display_balanace()
user1.make_withdrawal(100)
user1.display_balanace()

user2.make_deposit(100)
user2.display_balanace()
user2.make_deposit(200)
user2.display_balanace()
user2.make_withdrawal(100)
user2.display_balanace()
user2.make_withdrawal(100)
user2.display_balanace()

user3.make_deposit(100)
user3.display_balanace()
user3.make_withdrawal(200)
user3.display_balanace()
user3.make_withdrawal(100)
user3.display_balanace()
user3.make_withdrawal(100)
user3.display_balanace()




print(user1.account_balance, user3.account_balance)
user1.make_transfer(100, user3)
print(user1.account_balance, user3.account_balance)


