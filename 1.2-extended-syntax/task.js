'use strict';

function getResult(a,b,c){
    let x = [];
    let dis = b ** 2 - 4 * a * c;
    console.lo
    if (dis === 0){
        x.push(-b / (2*a));
    } else if (dis > 0) {
        x.push((-1 * b + (b ** 2 - 4 * a * c)**0.5) / (2 * a));
        x.push((-1 * b - (b ** 2 - 4 * a * c)**0.5) / (2 * a));
    }
    return x;
}

function getAverageMark(marks){
    let sum = 0;
    let averageMark;
    let i;
    
    if (marks.length === 0){
        averageMark = 0;
    } else {
        for (i = 0; i < marks.length; i++){
            if (i === 5){
                break;
            }

            sum += marks[i];
        }

        averageMark = sum / i;
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let curDate = new Date()
    if (curDate.getFullYear() - dateOfBirthday.getFullYear() > 18){
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}