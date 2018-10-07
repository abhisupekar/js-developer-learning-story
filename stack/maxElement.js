function processData(inputString) {
    let inputArr = inputString.split("\n");;
    let newArr = inputArr.map(x => x.split(" ").map(p => Number(p)));
    let stack = [];
    let len = newArr.length;
    for (let i = 0; i < len; i++){
        if (newArr[i][0] === 1){
            stack.push(newArr[i][1]);
        } else if (newArr[i][0] === 2){
            stack.pop();
        } else if (newArr[i][0] === 3){
            console.log(Math.max(...stack));
        }
    }
} 