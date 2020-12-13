x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15

print(x)
# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = 'Bryant'
print(students)
# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)
# Change the value 20 in z to 30
z[0]['y'] = 30
print(z)




# --------------------------------------------------------------------------------------------------------------





# iterateDictionary(students) 
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - T

students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]


def iterateDictionary(students):
    for i in range(len(students)):
        print(students[i])      
iterateDictionary(students)




def iterateDictionary_2(key, students):
    for i in range(len(students)):
        print(students[i][key])      
iterateDictionary_2('last_name', students)

# ------------------------------------------------------------------------




# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(dojo):
    for i in (dojo):
        list_length = len(dojo[i])
        print(i, list_length)
        for j in range(len(dojo[i])):
            
            print(dojo[i][j])
    
printInfo(dojo)










x = [1,3,2,5,7,8,6,4, 9, 10]*2

def bubbleSort(arr):
    for i in range(len(arr)-1):
        
        if (arr[i]>arr[i+1]):
            arr[i], arr[i+1] = arr[(i+1)], arr[i]
            # if (i == len(arr)-1):
            for j in range(len(arr)-1,0,-1):
                if (arr[j]<arr[j-1]):
                    arr[j], arr[(j-1)] = arr[(j-1)], arr[j]
                    # print(arr)

    return arr

print(bubbleSort(x))