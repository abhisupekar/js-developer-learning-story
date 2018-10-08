function duplicateElement(arr) {
    let dupEle = [];
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!(newArr.indexOf(arr[i]) > -1)) {
            newArr.push(arr[i]);
        } else {
            dupEle.push(arr[i]);
        }
    }
    return dupEle;
}