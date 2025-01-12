let a = 10;//pass by value stores the copy of the value onto the a;
let b = a;
a = 20;
console.log(b);

//non primitive (refrence types)
let obj1 = {
    name:"sarvesh"
}
let obj2 = obj1;
obj2.name ="notsarvesh"
console.log(obj1.name);


