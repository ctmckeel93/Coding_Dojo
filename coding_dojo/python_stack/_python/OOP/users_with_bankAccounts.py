class User:
    def __init__(self, name, email, balance):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.01, balance=0)
        
    def make_deposit(self, amount):
        self.account.balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account.balance -= amount
        return self

    def make_transfer(self, amount, target):
        self.account.balance -= amount
        target.account.balance += amount
        return self

    def display_balance(self):
        print(f" The balance of {self.name} is {self.account.balance}")
        return self

class BankAccount:
    def __init__(self, int_rate=0.01, balance=0):
        self.account_type = 'checking',
        self.balance = balance
        self.int = int_rate
    
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(self.balance)
        return self
    def yield_interest(self):
        self.balance += self.balance * self.int
        print(self.balance)
        return self

        user1 = User(na;sna;md;lamsdlkma)
        acc1 = (lksd;lmsdl;ms;lkmflksm)

        print(user1.acc1.balance(lsdlkmd))
