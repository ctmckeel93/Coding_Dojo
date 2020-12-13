# Countdown 

def countdown():
    for i in range(10, -1, -1):
        print(i)
countdown()

# Print one return the other
arr = 0
def printAndReturn(arr):
    for i in range(len(arr)):
        print(arr[i])
    return arr[i]

print(printAndReturn([3,7]))
print(printAndReturn(arr))
        
# return 1st+length

arr = 0
def firstPlusLength (arr):
    result = 0
    for i in range(len(arr)):
        result = arr[0] + len(arr)
    return result
print(firstPlusLength([2,4,6,8,10,12]))

# values greater than second
myArray =[2,7,14,3,9]

def greaterThanSecond (arr):
    max = arr[1]
    newArray = []
    count = 0
    for i in range(len(arr)):
        if (arr[i]>max):
            count = count + 1
            newArray.append(arr[i])
    print(count)
    return newArray
print(greaterThanSecond(myArray))

# this length that value
# length = 0
# value = 0
def lenValue (length, value):
    newArray = []
    for i in range(length):
        newArray.append(value)
    return newArray
print(lenValue(5,3))
