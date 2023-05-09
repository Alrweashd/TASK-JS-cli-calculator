const prompt = require("prompt-sync")(); // Please don't touch me :)

//let text1 = "Please enter the first number: ";
let firstNumber = prompt("Please enter the first number: ");
firstNumber = parseInt(firstNumber);
//let text2 = "Please enter the second number: ";
let secondNumber = prompt("Please enter the second number: ");
secondNumber = parseInt(secondNumber);


if (isNaN(firstNumber)||isNaN(secondNumber)){
console.log("cannot be a string")
//isNaN is not a number. return true if is a string

}else{


//let text3 = "Please choose the operation (+, -, /, *): ";
const operation = prompt("Please choose the operation (+, -, /, *): ");
switch(true){
    case operation == "+":
        console.log(`${firstNumber}+${secondNumber}=${firstNumber+secondNumber}`);
        break;
    case operation == "-":
        console.log(`${firstNumber}-${secondNumber}=${firstNumber-secondNumber}`);
        break;
    case operation == "/":
        console.log(`${firstNumber}/${secondNumber}=${firstNumber/secondNumber}`);
        break;
    case operation == "*":
        console.log(`${firstNumber}*${secondNumber}=${firstNumber*secondNumber}`);
        break;    
}
}
