'use strict';

function getResult(a,b,c){
    let x = [];
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant === 0){
        x.push(-b / (2*a));
    } else if (discriminant > 0) {
        x.push((-b + (discriminant)**0.5) / (2 * a));
        x.push((-b - (discriminant)**0.5) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark;
    let i;
    
    if (marks.length === 0){
        return 0;
    }
    
    for (i = 0; i < marks.length; i++){
        if (i === 5){
            break;
        }

        sum += marks[i];
    }

    return sum / i;
}

function askDrink(name,dateOfBirthday){
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18){
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}