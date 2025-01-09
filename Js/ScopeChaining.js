var age = 10;
console.log(a);
function a() {
    // var age
    var bahu="strong"
    console.log(age);
    b()
   function b() {
    console.log(bahu);
    
   }
    
}
a();

//it is created along with the execution context
//lexical memory space is nothing but the local memory along with lexical environment of its parent
//the global space consist of lexical memory of itself i.e age and a
// the a() fn consist of the lexical memory of itself and its parent i.e global  
