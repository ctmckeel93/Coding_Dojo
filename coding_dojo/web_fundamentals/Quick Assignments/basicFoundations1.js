// 1. print 1 to 255
function oneto255 () {
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
    
}
oneto255 ()

// 2. Even 1000
function even1000 () {
    for (var i =1;i<=1000; i++ ) {
    if (i%2 == 0) {
        console.log(i)
        }
    }
}
even1000 ()

// 3. odds to 5000


function odd5000 () {
    var sum=0
    for (var i =1;i<=1000; i++ ) {
    if (i%2 != 0) {
        console.log("integer" ,i)
        sum = sum+i
        console.log ("sum so far is" ,sum)
    }      
    }
}
odd5000 ()
// 4. Iterate an Array


var myArray = [2,4,6,8,10]
function sumArray (arr) {
    var sum = 0
    for (var i = 0; i < arr.length ; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log (sumArray (myArray))

// 5. find Max value of an Array 


var myArray = [2, 7, 1, 11, 5]


function arrayMax (arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        
    }
    return max
}
console.log(arrayMax (myArray))

// 6. Find the average of the sum of an array

var myArray = [2,4,6,8,10]

function arrayAvg (arr) {
    var avg = 0
    var sum = 0
    for (var i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum    
}
sum = arrayAvg (myArray)
console.log (sum/myArray.length)

// 7. Create an array of odds 1-50

var newArray = []

function oddArray1to50 () {
    for (var i = 1; i<=50; i++) {
        if (i%2 != 0) {
            newArray.push(i)
        }
        
    }
    return newArray
}
oddArray1to50 ()
console.log (oddArray1to50 ())

// 8. Values greater than Y


function countGreaterThanY (arr, y) {
    var count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]>y) {
            count++
        }
        
    }
    return count 
}
console.log(countGreaterThanY ([3,6,9,12,15,18], 10))

// 9. Square all values in an Array

var myArray = [2,4,6,8,10]
var newArray = []
function arraySquared (arr) {
    for (var i = 0; i<arr.length; i++) {
        arr[i]= arr[i] * arr[i]
        newArray.push(arr[i])

    }
    return newArray
}
console.log(arraySquared(myArray))

// 10. Replace negatives with 0

var myArray = [-2,4,-6, 8,-10]
var newArray = []

function negativeToZero (arr) {
    for ( var i = 0; i<arr.length; i++) {
        if (arr[i]<0) {
            arr[i] = 0 
        }
        newArray.push(arr[i])
    }
    return newArray
}
console.log(negativeToZero (myArray))

// 11. Print Min, Max and Average values

function arrayMaxMinAvg (arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = 0
    var newArray = []

    for (var i=0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum = sum + arr[i]
    }
    newArray.push ("max " + max)
    newArray.push ("min " + min)
    newArray.push ("avg " + sum/arr.length)
    console.log(newArray)
}
arrayMaxMinAvg([2, 10, -11, 13, -5, 0])

// 12. Swap values  

function swapValues (arr) {
    
    for (var i = 0; i<arr.length; i++) {
    var temp = arr[0]
        arr[0] = arr[4]
        arr[4] = temp
    }
    return arr
}
console.log(swapValues([2,4,6,8,10]))

// 13. negativetoDojo

var myArray = [-2,4,-6, 8,-10]
var newArray = []
function negativeToDojo (arr) {
    for ( var i = 0; i<arr.length; i++) {
        if (arr[i]<0) {
            arr[i] = 'Dojo' 
        }
        newArray.push(arr[i])
    }
    return newArray
}
console.log(negativeToDojo (myArray))
