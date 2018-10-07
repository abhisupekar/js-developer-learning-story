function removeDuplicate(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!(newArr.indexOf(arr[i]) > -1)) {
            // do nothing   
            newArr.push(arr[i]);
        }
    }
    return newArr;
}