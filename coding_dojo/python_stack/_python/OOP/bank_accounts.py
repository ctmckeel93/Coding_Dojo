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

acc1 = BankAccount(balance=100)
acc2 = BankAccount(balance=200)

acc1.deposit(300).deposit(300).deposit(400).withdraw(200).yield_interest().display_account_info()
acc2.deposit(300).deposit(700).withdraw(50).withdraw(100).withdraw(150).withdraw(100).yield_interest().display_account_info()

