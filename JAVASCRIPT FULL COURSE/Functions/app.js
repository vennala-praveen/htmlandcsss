


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