function findD(n, k, a) {
    let count = 0;
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= n; j++) {
            let v = a[i] + a[j];
            if((v % k == 0) && i < j) {
                count+= 1;
            }
        }
    }
    return count;
}