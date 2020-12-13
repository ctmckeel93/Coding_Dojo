// 1. Sigma 

function sigmaNum (num) {
    var sum=0
    for (var i=0; i<=num; i++) {
        sum=sum+i
    }
    return sum
}

console.log(sigmaNum(6))

// 2. Factorial

function factoNum (num) {
    var product=1
    for (var i=1; i<=num; i++) {
        product=product*i
    }
    return product
}

console.log(factoNum(6))

// 3. Fibonnaccii
// I need to keep track of the previous 2 numbers (num1 and num2), the result of those numbers(sum), and create an array with those values

function fib(num) {
    arr = [0,1]
    for (var i=2; i<num;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[num-1]
}
console.log (fib(7))

// 4. Array second to last
var arr = 0
function secondtoLast (arr){
    for (var i = 0; i<arr.length; i++){
        if (arr.length < 2) {
            return "null"
        }
        else {
            return arr[arr.length-2]
        }
    }

}
console.log(secondtoLast([0,1, 3, 5, 7, 10, 14, 18]))

// 5 retunr n-th to last array

num = 0
arr = 0
function secondtoLast (arr, num){
    for (var i = 0; i<arr.length; i++){
        if (arr.length < 2) {
            return "null"
        }
        else {
            return arr[arr.length-num]
        }
    }

}
console.log(secondtoLast([0,1, 3, 5, 7, 10, 14, 18], 5))

// 6.  second largest value in an array 

function secondLargest (arr) {
    var max = arr[0]
    var second = arr[0]
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > max) {
            second = max
            max = arr[i]
        }
    }
    return second
}
    console.log([0, 27, 15, 22, 90])

// 7. Double trouble
function double (arr) {
    newArray =[]
    for (var i = 0; i<arr.length; i++) {
        newArray.push(arr[i], arr[i])
    }
    return newArray
}
console.log(double([1,3,5]))