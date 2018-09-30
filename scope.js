function foo(a) {
    console.log(a + b);
    b = a;
}

foo(2);

// Reference error for 'b'
// Magic of Compiler and Engine when working together