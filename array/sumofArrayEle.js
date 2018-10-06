function sumArray (arrayItem) {
    let count = 0;
    for (let i = 0; i < arrayItem.length; i++) {
        if(typeof arrayItem[i] === 'number') {
            count += arrayItem[i];
        }
    }
    return count;
}

console.log(sumArray([1,2,3,4,0]))