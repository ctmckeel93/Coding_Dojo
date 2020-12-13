# given a value return a dictionary that calculates the optimal distribution of coins
# define a function that does that^
# create variables to set the value of each coin. 
# create an empty array to hold the values
# create  a for loop -
# -
import math
def correctChange(num):
    quarters = 25
    dimes = 10
    nickels = 5
    pennies = 1
    myArray =[quarters,dimes,nickels,pennies]
    dictionary =[]
    temp = num
    for i in range(len(myArray)):
        if (myArray[i] == quarters):
            num = math.floor(num/quarters)
            dictionary.append("quarters: " + str(num))
            num = temp - num*quarters
            temp = num
        elif (myArray[i] == dimes):
            num = math.floor(num/dimes)
            dictionary.append("dimes: " + str(num))
            # 
            num = temp - num*dimes
            temp = num
            print(num)
        elif (myArray[i] == nickels):
            num = math.floor(num/nickels)
            dictionary.append("nickels: " + str(num))
            print(num)
            num = temp - num*nickels
            temp = num
        elif (myArray[i] == pennies):
            num = math.floor(num/pennies)
            dictionary.append("pennies: " + str(num))
            num = temp - num*pennies
    return dictionary
        
            
        # if (myArray[i]== dimes):
        #     num =
print(correctChange(72))
