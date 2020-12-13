# Given: Thank god it's friday, return TGIF
def acronym (s) :
    space_before = -1
    acronym = ""
    for i in range(len(s)):
        if s[i] == " ":
            space_before = i
        elif space_before +1  == i:
            acronym += s[i]
    return acronym.upper()

print(acronym("Thank god it's friday"))
    

def reverseString (a):
    newString=""
    for i in range(len(a),0,-1):
        newString.push(i)
    return newString 
print(reverseString("This is a new string"))





x = [1,3,2,5,7,8,6,4]*1000
min = arr[0]
max = arr[0]
def bubbleSort(arr):
    for i in range(len(arr)-1):
        for j in range(len(arr)-1):
            if (arr[j]>arr[(j+1)]):
                arr[j], arr[(j+1)] = arr[(j+1)], arr[j]
    return arr

print(bubbleSort(x))

print(f"{min} - {max}")

# write a function that passes a parameter of string
# iterate through the string forward and backward
# create 2 variables (forward = backwards) that are empty strings


def palindrome(string):
  bwd = ''
  for i in range(len(string)-1, -1, -1):
    bwd+= string[i]
  if (bwd == string):
    return True
  else:
    return False
print(palindrome('racecar'))

#create a function that returns an f-string
# create a variable that holds a range of numbers (new array)
# iterate through the array
#check if the difference between each value is 1 or 0
#if so push all of the numbers into (new array)
# if difference exceeds 1, push range into f-string, reset the array to an empty value 
# repeat until the length of the array has been checked

def createIndex(arr):
    newArray = []
    string = f""
    for i in range(0,len(arr)-1, 2):    
        if (arr[i+1] - arr[i] <= 1):
            newArray.extend([arr[i], arr[i+1]])
        else: 
            newArray.append(arr[i])
            max = 0
            min = 0
            for j in range(len(newArray)-1):
                if (newArray[j] < min):
                    min = newArray[j]
                if (newArray[j] > max):
                    max = newArray[j]
                string +=(f"{min} - {max}")
                newArray = []
print(createIndex([1,2,3,5,7,8,10]))
            



