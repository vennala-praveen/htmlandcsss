// Arraya and for loop

const firstName = ["Jason", "Tony", "Thor"];
let lastName = "Ben";

const newArray = [];

// for loop

for(let i = 0; i < firstName.length; i++){
    // console.log(i);
    // console.log(firstName[i]);
    let fullName = `${firstName[i]} ${lastName}`;
    newArray.push(fullName);

}

console.log(newArray);

// Exercise-2
// Functions, return, if, arrays, for loop, Objects

const gas = [40, 60, 80];
const food = [90, 70, 90];

function calculateTotal(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if(total > 200){
        console.log("Hey, U spending to much money");
    }else{
        console.log("Good, total is lessthan 200");
    }
    return total;
}

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);

console.log({
    gas: gasTotal,
    food: foodTotal,
})

console.log(gasTotal);
console.log(foodTotal);