function Person (age, name) {
    this.age = age;
    this.name = name;
    this.getName = function(){
        console.log(`Age : ${this.age} Name: ${this.name}`)
    }
}

function Teacher (age, name, sex){
    Person.call(this);
    this.sex = sex;
    this.getInfo = function () {
        console.log(`Name: ${this.name} Age: ${this.age} Sex: ${this.sex}`)
    }
}

let p1 = new Teacher(23, 'Puja', 'Female')
let p2 = new Teacher(27, 'Nitin', 'Male')


console.log(p1.getInfo())