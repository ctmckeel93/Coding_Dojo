sum = 0
function arrSum (arr) {
for (var i = 0; i<arr.length;i++) {
    
    sum = sum + arr[i]
    
    console.log("num is" , arr[i], "sum so far is", sum)
    }
}
arrSum ([6,3,5,1,2,4])

var product = 0
function arrProduct (arr) {
for (var i = 0; i<arr.length;i++) {
    
    product = arr[i]*i
    
    console.log(product)
    }
}
arrProduct ([6,3,5,1,2,4])