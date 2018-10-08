function gradingCalc(grades) {
    let arr = [];
    for(let i = 0; i < grades.length; i++) {
        let value = grades[i].toString();
        if(grades[i] < 38) {
            arr.push(grades[i]);
        } else if((Number(value.split('')[1]) < 5) && (5-Number(value.split('')[1]) < 3) ) {
            arr.push(grades[i] + 5-Number(value.split('')[1]))
        } else if((Number(value.split('')[1]) + 3 === 10) || Number(value.split('')[1]) === 0 || (Number(value.split('')[1]) + 4 === 10) ||
        (Number(value.split('')[1]) === 1) || (Number(value.split('')[1]) === 5)) {
            arr.push(grades[i]);
        } else if(Number(value.split('')[1]) + 2 === 10) {
            arr.push(grades[i] + 2);
        }
    }
    return arr;
}