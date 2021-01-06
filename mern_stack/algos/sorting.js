// Bubble Sort

var arr = [3,1,7,8,4]

function bubble_sort(arr) {
    for (var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1; j++){
            if (arr[i] > arr[i+1]) {
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
        }
        
        }
    }

}

console.log(bubble_sort(arr))

selection_sort = arr => {
    for (let i = 0; i < arr.length; i++){ //[3,1,7,8,4] -> [1,3,7,8,4]
        let idx = i
        for (let j = 0; j < arr.length; j++){
            // if the index after the current index is less, move it to the position of the current index, else keep track of that value and repeat
            if (arr[j+1] < arr[j]){
                arr[j] = arr[j+1]
                arr[j+1] = idx
            }
            else {
                break

            }
            



            
            
        }
    }
}
console.log(selection_sort([3,1,7,8,4]))

insertion_sort = arr =>  {
    for (let i = 1; i < arr.length; i++){
        let idx = arr[i]
        for (let j = i; j>=0 ; j--){
            
            if ( idx < arr[j-1]){
                arr[j] = arr[j-1]
                
            }
            else {
                arr[j] = idx
                break
            }
        }
    }
    return arr
}
console.log(insertion_sort([2,5,1,7,3]))

//Combine arrays
// Given two arrays that are sorted, combine them into one sorted array
// Ex: 
var sort1 = [2,4,6,8,10];
var sort2 = [1,3,9,11,13];
// Should return -> [1,2,3,4,6,8,9,10,11,13]
combineArrays = (array1, array2) => {
    let fusion = []
    for (let i = 0; i< array1.length; i++) {
        fusion.push(array1[i])
    }
    for (let i = 0; i< array2.length; i++) {
        fusion.push(array2[i])
    }
    console.log(fusion)
    for (var i = 0; i < fusion.length-1; i++){
        for (var j = 0; j < fusion.length-1; j++){
            if (fusion[j] > fusion[j+1]) {
                temp = fusion[j]
                fusion[j] = fusion[j+1]
                fusion[j+1] = temp
            }
        }
    }
    return fusion
}
console.log(combineArrays(sort1,sort2))

