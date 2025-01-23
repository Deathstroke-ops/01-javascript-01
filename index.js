function showText(text) {
    console.log(text);
}
function sum(a, b) {
    const result = a + b;
    return result
}
let resultSum = sum (1, 2);
let resultAnotherSum = sum (3, 7)
console.log('Сумма:', resultSum);
console.log('Другая сумма:', resultAnotherSum);
function multiply(a, b, c) {
    let result = a * b * c;
    if (result < 10){
        console.log('Произведение меньше 10');
    } else if (result === 10 ){
        console.log('Произвидение равно 10');
    }else{
        console.log(`Произведение больше 10`);
    }
    }
showText('Этот текcт будет показан в консоли круто!');
sum(11, 3);
multiply(5, 2, 1);
function greet(name, greeting = 'Привет'){
    console.log(name + ' ' + greeting + '!');
}
greet('Джон Сноу');
greet('Джон Сноу', 'Привет');
function square(number){
    return number * number;
}
console.log(number);
square();