


function addNumber(num1, num2){
    return num1 + num2;
}


const firstValue = addNumber(20, 26);
const secondValue = addNumber(43, 67);


//function expressions
const add = function(num1, num2){
    return num1+num2;
}

const thirdValue = add(50, 36);

const result = [firstValue, secondValue, thirdValue];
console.log(result);

//Arrow function

const Addition = (num1,num2) => num1 + num2;

//Objects in JS -- key/value pair

const person = {
    name : "Aizen",
    lastName : "Sosuke",
    age : 45,
    education : true,
    married : false,
    friends : ["Ichigo", "Gin"],
    greeting : function(){
        console.log("Heyy Email!!");
    },
};

console.log(person);
console.log(typeof(person));

//Conditonal Statements
//>, <, >=, <=, ==, ===, !=, !==

const value = 3 > 2;

if(value){
    console.log("Hi Tony");
}else{
    console.log("Iron Man");
}

//Comparison Operators

const value1 = 13;
const value2 = 130 ;

const value3 = false;
if(!value3){
    console.log("Hi Tony");
}
if(value1 > value2){
    console.log("value1 is greater than value2");
}else if(value1 >= value2){
    console.log("Both are equal");
}else{
    console.log("value2 is greater than value1");
}

//Equality

const num1 = 55;
const num2 = "5" ;


const value4 = num1 == num2;
const value5 = num1 === num2;
const value6 = num1 != num2;

console.log(value4);
console.log(value5);
console.log(value6);

// Logical Operators

const userName = "Gin";
const age = 45;

if(userName === "Gin" || userName === "Gojo"){
    console.log("Heyy! I'm in");
}else{
    console.log("I'm not in");
}

if(userName === "Gin" && age !== 55){
    console.log("Correct value");
}else{
    console.log("Wrong value");
}


//Switch and Dice value 1-6

// switch, else if, if


const dice = 4;

//switch

switch(dice){
    case 1:
        console.log("U got One");
    case 2:
        console.log("U got Two");
    case 3:
        console.log("U got Three");
    case 4:
        console.log("U got Four");
        break;
    case 5:
        console.log("U got Five");
    case 6:
        console.log("U got Six");
    default:
        console.log("U didn't rool the dice");
}

//else if

if(dice==1){
    console.log("U got One");
}
 else if(dice==2){
    console.log("U got Two");
}
else if(dice==3){
    console.log("U got Three");
}
else if(dice==4){
    console.log("U got Four");
}
else if(dice==5){
    console.log("U got Five");
}
else if(dice==6){
    console.log("U got Six");
}
else{
    console.log("U didn't roll the dice");
}

//If
if(dice==1){
    console.log("U got One");
}
if(dice==2){
    console.log("U got Two");
}
if(dice==3){
    console.log("U got Three");
}
if(dice==4){
    console.log("U got Four");
}
if(dice==5){
    console.log("U got Five");
}
if(dice==6){
    console.log("U got Six");
}
if(dice > 6 || dice <= 0){
    console.log("U didn't roll the dice");
}


// Loops 
// Repeatedly run a block of code while condition is true
// while loop (i don't count, plz use while loop)

let amount = 15;

while(false){
    console.log("I have " + amount + " i will go to shopping");
    amount--;
}

// Do while loop
// Code block first, Second Condition
// Runs at least

let money = 20;

do{
    console.log("I have "+ money +" $ ");
    money++;
}while(money <10);


// For Loop (i know the count, use for loop)
// for(Initialization, Condition, Increment/Decrement)

let j;

// for(j=1; j <= 10; j++){
//     console.log("Number is : "+ j);
// }

for(j=10; j >= 0; j--){
    console.log("Number is : "+ j);
}


// string properties and methods
// Wrapper string object, Don't Memorize Methods

let text = " Sung Jin-Woo ";

const person1 = {
    name : "Sung",
    greeting: function(){
        console.log("Heyy, How r u");
        return text;
    },
};

console.log(person1);
console.log(person1.name);
console.log(person1.greeting());
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.trim());


// Template Literals - ES6+
// Backtick Characters (``)
// Interpolation ${} - Insert Expression(value)

const firstName = "Sung Jin-Woo";
const age1 = 27;

const mat = `Hey it's me ${firstName}, My age is ${age1} years old.`;
console.log(mat);


//Array properties and Methods

let carsName = ["BMW", "Audi", "Bugatti", "Bentley", "Ferrari", "Lamborghini", "Mustang"];

console.log(carsName.length);
console.log(carsName[5]);



// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeOf

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value.

// when assigning non-primitive data type value to a variable is done by refernce so any changes will affect all the reference.


