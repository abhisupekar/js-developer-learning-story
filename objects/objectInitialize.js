let obj2 = Object.create(null);
let obj1 = new Object();
let obj3 = {};
let Obj = function (a) {
    this.a = a;
}

let obj4 = new Obj('1');


console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4)