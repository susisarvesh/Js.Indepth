//What is Execution Context?
//its is the environment in which the JavaScript code is executed.
//The JavaScript engine creates an execution context for every function call.
//Everything in JavaScript happens inside an execution context.

//When we run a JavaScript code, the JavaScript engine creates an execution context in the Call Stack (anonymous).

//It consists of two components:
//1. Memory Component (Variable Environment)
//2. Code Component (Thread of Execution)

//Memory Component:
//Variable Environment: It stores all the variables and functions in the memory.

//Stores in Key:value pair.
//Key: Variable Name
//Value: Variable Value
//Ex:a:10 , fn() : function (whole function is stored in the memory)

//Code Component:
//Consist of the code and executes the code line by line.


var a = 10;


function fn(num) {
    var ans = num * num;
    return ans;
}

var b = fn(a);

//Flow of the program
//1. Global Execution Context is created.

//2. Memory Component is created.
//In that memory component, a:undefined, b:fn() function is stored.

//3. Code Component is created.
//Code is executed line by line.
//a=10, fn() function is stored in the memory.

//4. fn(a) is called.
// when function Invocation happens, a new Execution Context is created.
//Memory Component is created.
//In that memory component, num:10, ans:undefined is stored.
//Code Component is created.
//Code is executed line by line.
//ans=100
//return actually returns the value to the calling function.
// the Execution Context is popped out from the Call Stack.
//Once the Execution Context is popped out, the memory is cleared.

// After the Execution Context is popped out.

