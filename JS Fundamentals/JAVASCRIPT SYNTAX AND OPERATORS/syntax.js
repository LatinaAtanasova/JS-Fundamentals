// Problem 1 - String Length
// function calculate(string1, string2, string3){
//     let sumOfLengths = string1.length + string2.length + string3.length;
//     let averLength = Math.floor(sumOfLengths/3);
//     console.log(sumOfLengths);
//     console.log(averLength);
// }
//
//
// calculate('pasta', '5', '22.3')
// calculate('chocolate', 'ice cream', 'cake')

//Problem 2.	Math Operations
// function calculate(num1, num2, operator) {
//     let result = 0;
//     switch (operator) {
//         case "+": result = Number(num1) + Number(num2); break;
//         case "-": result = num1 - num2; break;
//         case "*": result = num1 * num2; break;
//         case "/": result = num1 / num2; break;
//         case "%": result = num1 % num2; break;
//         case "**": result = num1 ** num2; break;
//     }
//     console.log(result);
// }
// calculate(5, 6, '+');
// calculate(3, 5.5, '*');

//Problem 3.	Sum of Numbers N…M
// function calculate(numN, numM){
//     let result = 0;
//     let a = Number(numN);
//     let b= Number(numM);
//
//     while(a <= b){
//          result = result + a;
//          a++;
//      }
//     console.log(result);
// }
//
// calculate('1', '5' );
// calculate('-8', '20');

//Problem 4.	Largest Number
// function largestNumbers(num1, num2, num3) {
//     let result = Math.max(num1, num2, num3);
//     console.log(`The largest number is ${result}.`);
// }

/*function largestNumbers(num1, num2, num3){
    let result;
    if (num1 > num2 && num1 > num3){
        result = num1;
    }
    else if (num2 > num1 && num2 > num3){
        result = num2;
    }
    else    result = num3;
    console.log(`The largest number is ${result}.`);
}
largestNumbers(5, -3, 16)
largestNumbers(-3, -5, -22.5)*/

//Problem Circle Area
function calculateArea(num1) {
    let result;
    let type = typeof (num1)
    if (type != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
    else    {
        result = Math.pow(num1, 2)*Math.PI;
        console.log(Number(result.toFixed(2)));
    }
}
calculateArea(5);
calculateArea('name');
