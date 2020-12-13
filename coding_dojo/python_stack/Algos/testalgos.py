def createIndex(arr):
    newArray = []
    # string = f""
    for i in range(0,len(arr)-1, 2):    
        if (arr[i+1] - arr[i] <= 1):
            newArray.extend([arr[i], arr[i+1]])
        else: newArray.append(arr[i])
    return newArray
print(createIndex([1,2,3,5,7,8,10]))