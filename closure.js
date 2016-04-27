//Another closure example

function multiply(number1) {
    return function(number2) {
        return number1 * number2;
    };
}

var threeTimes = multiply(3);
console.log(threeTimes(6));
//18 -- 3 * 6
console.log(threeTimes(4));
//12 -- 3 * 4
