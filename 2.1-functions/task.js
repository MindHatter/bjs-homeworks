'use strict';

function getSolutions(a, b, c){
    let D = b ** 2 - 4 * a * c;
    if (D < 0){
        return {D, roots: []};
    } else if (D === 0){
        let x1 = -b / (2 * a);
        return {D, roots: [x1]};
    } else {
        let x1 = (-b + (D)**0.5) / (2 * a);
        let x2 = (-b - (D)**0.5) / (2 * a);
        return {D: D, roots: [x1, x2]};
    }
}

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет 1 корень Х1 = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет 2 корня: X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
    }
}
showSolutionsMessage(1, 5, 4);
showSolutionsMessage(1, 2, 1);
showSolutionsMessage(7, 20, -3);

function getAverageScore(data){
    if (Object.entries(data).length === 0) {
        data['average'] = 0;
        return data;
    }
    let averageScore = 0;
    let averageMark;
    let markCount = 0;
    for (let subject in data){
        markCount += 1;
        averageMark = getAverageMark(data[subject]);
        data[subject] = averageMark;
        averageScore += averageMark;
    }
    data['average'] = averageScore / markCount;
    return data;
}

console.log(getAverageScore({}));
function getAverageMark(data){
    if (data.length === 0) return 0;
    let average = 0;
    for (let i = 0; i < data.length; i++){
        average += data[i];
    }
    return average / data.length;
}