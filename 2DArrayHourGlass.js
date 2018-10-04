let arr = [
    [-1,2,3,4,2,3], 
    [3,-4,2,4,2,2],
    [3,5,-3,-9,5,3],
    [5,4,6,-2,1,5],
    [7,6,3,3,-1,3],
    [6,2,2,5,2,-2]
];

function hourGlass(arr) {
    let sum = 0;
    let result = -64;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            sum += arr[i + 1][j + 1];
            sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
    
            if(result < sum) {
                result = sum;
            }
        }
    }
    return result
}

console.log(hourGlass(arr));