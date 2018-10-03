let arr1 = ['def', 'de', 'fgh', 'fgh'];
let arr2 = ['de', 'lmn', 'fgh'];

let arr = [];
function result(arr1, arr2) {
    for ( let j = 0; j < arr2.length; j++) {
        let count = 0;
        for (let i = 0; i < arr1.length; i++) {
            if(arr2[j] === arr1[i]) {
                count++;
            }
        }
        arr.push(count);
    }
    return arr;
}

console.log(result(arr1, arr2));