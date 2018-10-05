let n = 5;
let queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
];

function calc (n, queries) {
    let arr = new Array(n);
    arr.fill(0, 0, n);

    queries.forEach((query) => {
        for ( let k = query[0] - 1; k < query[1]; k++) {
            arr[k] += query[2];
        }
    })

    return Math.max(...arr);
}

console.log(calc(n, queries));
