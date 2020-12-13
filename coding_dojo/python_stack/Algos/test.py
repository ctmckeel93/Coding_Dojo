def correctChange(num):
    quarters = 25
    dimes = 10
    nickels = 5
    pennies = 1
    myArray =[quarters,dimes,nickels,pennies]
    dictionary =[]
    
    temp = num
    for i in range(len(myArray)):
        num = num//myArray[i]
        dictionary.append(f"{str(myArray[i])} : {num}")
        num = temp - num*myArray[i]
        temp = num
    return dictionary
print(correctChange(78))
