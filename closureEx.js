/**
 * Example of closure creation
 */

function add (x) {
    let y = 2;
    // Returned function tries to access the variable of 
    // parent function (y)
    return function () {
        return x + y;
    }
}

console.log((add (2))()) // Results => 4