function renderStair(n) {
    let s = '';
    for(let i=1; i <= n; i++) {
        s += `${' '.repeat(n-i)}${'#'.repeat(i)}\n`
    }
    return s;
}

console.log(renderStair(5))