'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}.`;
    }
    else if (isNaN(contribution)) {
        return `Параметр 'Первоначальный взнос' содержит неправильное значение ${contribution}.`;
    }
    else if (isNaN(amount)) {
        return `Параметр 'Сумма кредита' содержит неправильное значение ${amount}.`;
    }

    let S = amount - contribution;
    let P = percent / 100 / 12;
    let n = (date.getFullYear() - new Date().getFullYear()) * 12;
    let monthlyPayment = S * (P + P / ((Math.pow((1 + P), n)) - 1 ));
    let totalAmount = monthlyPayment * n;
    console.log(monthlyPayment);
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let greeting = `Привет, мир! Меня зовут ${(name === undefined || name === null || name === '') ? 'Аноним' : name}`;
    return greeting;
}