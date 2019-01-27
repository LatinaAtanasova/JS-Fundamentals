//Problem 1.	I like JavaScript!
/*
function greeting(name) {
    console.log(`Hello ${name}, do you like JavaScript?`)
}
greeting('George');*/

//Problem 2.	Even Numbers 1 to N

function evenNumbers(num) {
    for (let a = 1; a <=num; a++){
        if ((a%2)=== 0 ){
            console.log(a);
        }
    }
}
evenNumbers(7);
