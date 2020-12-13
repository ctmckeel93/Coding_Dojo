# Python Biggie Size
def biggieSize(arr):
    for x in range(len(arr)):
        if arr[x] > 0:
           arr[x] = 'big'
    return arr

print(biggieSize([-3, 4, 5, 6, -2]))

#Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values.

def countPositives(arr):
    count = 0
    for x in range(len(arr)):
        if arr[x]>0:
            count=count+1
            arr[len(arr)-1] = count
    return arr[len(arr)-1]
print(countPositives([-3, 0, 2, 6, 8, 9, 10, -2, 1]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
def sumValues(arr):
    sum= 0
    for x in range(len(arr)):
        sum = arr[x] + sum
    return sum
print(sumValues([2,4,6,8,10]))

# Average - Create a function that takes a list and returns the average of all the values.x

def avgValues(arr):
    sum=0
    for x in range(len(arr)):
        sum = sum+arr[x]
        avg = sum/len(arr)
    return avg
print(avgValues([2,7,8,10,13]))

# Length - Create a function that takes a list and returns the length of the list.
list = ["corey", "aria", "darius", "meg", "micheal"]

def length(arr):
    count = 0
    for x in range(len(arr)):
        count+=1
    return count
print(length(list))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
list= []

def minimum(arr):
    if (len(arr) == 0):
            return False
    min = arr[0]
    for x in range (len(arr)):
        if (arr[x]<min):
            min = arr[x]
        
    return min
print(minimum(list))

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
list= [2,7,12,99]

def maximum(arr):
    if (len(arr) == 0):
            return False
    max = arr[0]
    for x in range (len(arr)):
        if (arr[x]>max):
            max = arr[x]
        
    return max
print(maximum(list))

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
list = [3, 12, 99, 1, 5]
def ultimateAnalysis(arr):
    max = arr[0]
    min = arr[0]
    sum = 0
    for x in range(len(arr)):
        if arr[x]<min:
            min = arr[x]
        if arr[x]>max:
            max = arr[x]
        sum = sum + arr[x]
        avg = sum/len(arr)
    return min, max, sum, avg, len(arr)
print(ultimateAnalysis(list))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list.

list = [3, 12, 99, 1, 5]

def reverseList(arr):
    import math
    for x in range(math.floor(len(arr)/2)):
        temp = arr[x] #3
        arr[x] = arr[len(arr)-x-1] #index of array = the index of the value(length of array - index -1)
        arr[len(arr)-x-1] = temp
    return arr
print(reverseList(list))









