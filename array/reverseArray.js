let arr = [1,4,3,2];

function reverseArr (arr) {
    let reverArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverArr.push(arr[i]);
    }
    return reverArr;
}

console.log(reverseArr(arr));