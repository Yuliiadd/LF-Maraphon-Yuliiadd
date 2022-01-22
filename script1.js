

function culc(ident,a,b) {
sum = a + b;
multi = a * b;
divide = a / b;
let status = 'Привет, я - калькулятор!';
console.log(status);

/* проверка параметров */

if (typeof a !=='number' && typeof b !=='number') {
status = "error (оба аргумента - не число)";
console.log(status);
return(console.log('Результат невозможно посчитать'));
} else if (typeof a =='number' && typeof b !=='number') {
    status = "error (второй аргумент - не число)";
    console.log(status);
    return(console.log('Результат невозможно посчитать'));
} else if (typeof a !=='number' && typeof b =='number') {
    status = "error (первый аргумент - не число)";
    console.log(status);
    return(console.log('Результат невозможно посчитать'));
} else if (b == 0) {
        console.log('Результат невозможно посчитать - деление на ноль');
} else if (typeof a =='number' && typeof b =='number') {
    console.log('Проверка завершена. Все аргументы - числа');
} else {
    console.log('Что-то не так');
}

/* определение действия */

if (ident == "sum") {
    result = `${sum}`;  
} else if (ident == "multi") {
    result = `${multi}`;
} else if (ident == "divide") {
    result = `${divide}`;
} else if (ident == '') {
    return(console.log('Выбери оператор (sum, multi or divide)'));
} else if (ident !="sum" || "multi" || "divide" || '') {
    return(console.log('Выбери оператор из списка (sum, multi or divide)'));
} else {
    console.log('Оператор выбран, арументы - числа');
} 
console.log('Получилось! Твой результат - ' + result);
}


culc('sum', 5, 6);