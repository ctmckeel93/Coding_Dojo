#1. 

def a():
    return 5
print(a())

# prediction: 5
# correct!

#2

def a():
    return 5
print(a()+a())

# prediction: 10
# correct!

#3

def a():
    return 5
    return 10
print(a())

# prediction: 5 - you cannnot return 2 values in a function
# correct!

#4

def a():
    return 5
    print(10)
print(a())

# prediction: 5 - once a function is returned, it does not continue through the writtenn values
# correct

#5

def a():
    print(5)
x = a()
print(x)

# prediction: 5, a() - nothing was returned within the function
# almost! - apparently a variable can not be printed with a function itself and will return as 'none'

#6

def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))

# prediction: 3, 5, none - you cannot print a function without a name. If a value is not returned within, the function has no value. 
#  correct!

#7

def a(b,c):
    return str(b)+str(c)
print(a(2,5))

# prediction: 25 - it will return 2 concatonated strings 
# correct! - strings have no numerical value and therefore would not be added mathematically

#8

def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())

# prediction: 100, 10 - after the else statement and return, the function will not continue and be logged with the value '10' then it will print the functions returned value
# correct! - the function will run its course in the order it is written once called. 

#9
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))

# prediction: 7, 14, 21
# correct!

#10
def a(b,c):
    return b+c
    return 10
print(a(3,5))

# prediction: 8 - a function cannot return 2 values and ends upon the first return 
# correct

#11

b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)

# prediction: 500, 500, 300, 500
# correct

#12

b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)

# prediction: 500, 500, 300, 300, 500
# correct!

#13

b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)

# prediction: 500, 500, 300, 300
# correct!

#14

def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()

# prediction: 1,3,2 - the function is defined before function a() is called therefore def b() gets called within def a()
# correct!

#15

def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)

# prediction : 1, 3, 5, 10
# correct!

# final 14.5/15









