function coinChange (cents) {
    var o = new Object ();
    o.quarters = o%25,
    o.dimes = quarters%10,
    o.nickels = dimes%5,
    return o
}
console.log(coinChange (94))


function  (arr) {
    for (i = 0; i< arr.length; i++) {
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
