# 1 Print integers 0-150
for x in range(151):
    print(x)

# 2.Multiples of 5 (5-1000)
for x in range(5,1001):
    if (x%5 == 0):
        print(x)

# 3. counting the dojo way

for x in range(1,101):
    if (x%10 == 0):
        print('coding dojo')
    elif (x%5 == 0):
        print('coding')
    else :
        print(x)

# 4. integers 0,500k and sum so far
sum = 0
for x in range(1,500001):
    sum = sum + x
    print(x)
    print("Sum so far is", sum)

# 5 2018 - 0 by 4s
for x in range(2018, 0, -4):
    print(x)

# 6. flexible counter 
lowNum = 1
highNum = 100
mult = 3
for x in range(lowNum, highNum):
    if (x%3 == 0):
        print(x)

