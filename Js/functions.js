var a = 1;
ab();
b();
console.log(a);
function ab() { 
    a = 10; //global variable its been updated
    console.log(a);
}
function b() { 
    a = 100;//global variable its been updated
    console.log(a);
}

// var a = 1; //global variable
// ab();
// b();
// console.log(a);
// function ab() { 
//     var a = 10; //local variable popped out of the stack after the function is executed
//     console.log(a);
// }
// function b() { 
//     var a = 100;//local variable popped out of the stack after the function is executed
//     console.log(a);
// }