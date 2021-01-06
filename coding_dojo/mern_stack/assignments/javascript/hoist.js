// #1
console.log(hello);                                   
var hello = 'world';                                 

// Prediction - world
// Incorrect - undefied because variable wascalled before it was defined. DUH!

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle)
}

// magnet
// correct

// #3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Prediction - super cool
// correct!

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Predict - chicken, half-chicken
// correct!

// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// Predict - undefined
// Correct!

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// Predict - disco
// Incorrect! - Correction: undefined, rock, r&b, disco 
// conclusion: The variable was defined globally outside of the function and therefore did not need to utilize var to assign a different value to genre.

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Predict - undefined, undefined, burbank, undefined
// Incorrect - Correction: san jose, seattle, burbank, san jose
// conclusion - as the variable was defined after interpretation, it was able to be used globally and there was no reason to redeclare it as a variable. 

// #8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Predict - it will throw a syntax error because the function attmpts to redefine a const variable
// Correct!
