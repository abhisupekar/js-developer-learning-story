/**
 * Given a string "aieoueifg" write a function to print a output 
 * which calculates the number of occurences of a element in a 
 * array like "​​​​​a1i2e2o1u1f1g1​​​​​"
 */

let s = "aieoueifg";
let arr = s.split('');
function calc(arr) {
    let s = "";
    for(let i = 0; i < arr.length; i++) {
        let newArr = [ ...new Set(arr) ]
        if(arr && newArr[i]) {
            s+=`${newArr[i]}${repChar(arr, newArr[i])}`;
        }
    }
    return s;
}

function repChar(arr, ele) {
    if(arr) {
        let count = 0;
        arr.forEach((v) => ele === v && count++ );
        return count;
    }
}

console.log(calc(arr)); // "​​​​​a1i2e2o1u1f1g1​​​​​"