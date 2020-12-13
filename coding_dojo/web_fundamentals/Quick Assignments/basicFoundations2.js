// 1. Biggie Size

var myArray = [-2,4,-6, 8,-10]
var newArray = []
function positivetoBig (arr) {
    for ( var i = 0; i<arr.length; i++) {
        if (arr[i]>=0) {
            arr[i] = 'Big' 
        }
        newArray.push(arr[i])
    }
    return newArray
}
console.log(positivetoBig (myArray))

// 2. Print the lowest value and return the highest value in an array
var myArray = [2,4,6,8,10]

function printReturn (arr) {
    var max = arr[0]
    var min = arr[0]
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
    return max
}
printReturn (myArray)

// 3. print one return another
function printReturnAnother  (arr) { 
    for (var i = 0; i< arr.length; i++) {
        if (arr[i] == arr[arr.length-2]) {
            console.log(arr[i])
        }
    }

    for (var i = 0; i<arr.length; i++) {
        if (arr[i]%2 !=0){
            return arr[i]
        }
    }
}
printReturnAnother ([2,3,6,8,10])

// 4. Double vision

function doubleVision (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*2
    }
    return arr
}
console.log(doubleVision ([2,4,6,8,10]))

// 5. Count the positives numbers in an array and set the final value to the count

function countPositives (arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
    if  (arr[i]%2 == 0) {
        count++
        }
    
    }
    arr[arr.length-1] = count
    return arr
}
console.log(countPositives ([2,3,6,8,10])) 

// 6. count every time there are 3 evens in a row and count when there are 3 odds in a row

function oddsandEvens (arr) {
    var count = 0
    for (var i =0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            count++
        }
        if (count == 3){
            console.log ("Even More so!")
            count = 0
            }
        if (arr[i]%2 !== 0) {
            count++
        }
        if (count == 3){
                console.log("That's odd!")
                count = 0
        }
        if (arr[i]%2 == 0) {
            count = 0
            }
    }
}

oddsandEvens ([1,3,4,6,8,3,7,9,3,5,6,4,2,6])


// 7. Add 1 to ever odd index and print and return the array 

function oddPlus1 (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i%2 != 0) {
            arr[i] = arr[i] + 1
        }
        console.log(arr[i])
    }
    return arr
}
oddPlus1 ([1,3,4,8,10,11])

// 8. Previous Lengths: Return an array with the given values of each index the length of the string before it.

function prevLength (arr) {
    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length
    }
    return arr
}
console.log(prevLength (["mako", "joy", "me", "tourist"]))

// 9. create a new array adding seven to the original values.
var newArray= []
function addSeven (arr){
    for (var i=0; i<arr.length; i++) {
        newArray.push(arr[i]+7)
    }
    return newArray
}
console.log(addSeven([1,2,3,4,5]))

