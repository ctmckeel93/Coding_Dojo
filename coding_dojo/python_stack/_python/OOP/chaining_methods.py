class User:
    def __init__(self, name, email, balance):
        self.name = name
        self.email = email
        self.account_balance = balance
        
    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def make_transfer(self, amount, target):
        self.account_balance -= amount
        target.account_balance += amount
        return self

    def display_balance(self):
        print(f" The balance of {self.name} is {self.account_balance}")
        return self



user1 = User('Marcus', 'mkjordan@gmail.com', 500)
user2 = User('Raina', 'incendiskye@gmail.com', 1000)
user3 = User('Jacob', 'Jakefromstatefarm@all.com', 50 )

user1.make_deposit(100).make_deposit(200).make_deposit(50).make_withdrawal(100).make_transfer(100, user3).display_balance()
user2.make_deposit(100).make_deposit(200).make_withdrawal(100).make_withdrawal(100).display_balance()
user3.make_deposit(100).make_withdrawal(200).make_withdrawal(100).make_withdrawal(100).display_balance()




