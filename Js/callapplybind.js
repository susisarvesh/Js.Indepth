// ----------------------------------------
// What is 'call', 'apply', and 'bind'?
// ----------------------------------------

// In JavaScript, functions are objects, and they can be called with a specific 'this' context using 'call', 'apply', or 'bind'.
// These methods are used to explicitly set the 'this' keyword inside a function, which determines the object the function operates on.

// Normally, 'this' inside a function refers to the object that owns the method.
// However, sometimes you may want to use a function with a different object as its context ('this').
// That's where 'call', 'apply', and 'bind' come in handy.

// ----------------------------------------
// 1. 'call' method:
// ----------------------------------------
// - 'call' is used to immediately invoke a function with a specified 'this' context.
// - The first argument of 'call' is the object to be used as 'this'.
// - Subsequent arguments are passed individually to the function.

fullname.call(name, "avadi", 2025);  
// Here, 'name' becomes the 'this' context inside the 'fullname' function.
// It immediately invokes 'fullname' and outputs: "sarvesh susi avadi 2025"

// ----------------------------------------
// 2. 'apply' method:
// ----------------------------------------
// - 'apply' is similar to 'call', but it takes the arguments as an array instead of passing them individually.
// - The first argument is the object to be used as 'this'.
// - The second argument is an array of arguments to be passed to the function.

fullname.apply(nameis, ["annanagar", 2025]);  
// Here, 'nameis' becomes the 'this' context inside the 'fullname' function.
// It immediately invokes 'fullname' and outputs: "kanguva suriya annanagar 2025"

// ----------------------------------------
// 3. 'bind' method:
// ----------------------------------------
// - 'bind' is different from 'call' and 'apply' because it does not immediately invoke the function.
// - Instead, it returns a new function with the specified 'this' context and optional pre-set arguments.
// - This new function can be called later when needed.

let fnbind = fullname.bind(name, "dabaku", 8282);  
// Here, 'bind' creates a new function 'fnbind' with 'this' set to 'name' and the arguments "dabaku" and 8282 pre-set.

// When we call 'fnbind()', it uses 'name' as 'this' and the pre-set arguments.
// It outputs: "sarvesh susi dabaku 8282"

// ----------------------------------------
// Why use 'call', 'apply', and 'bind'?
// ----------------------------------------
// These methods are useful when:
// 1. You want to reuse a function with different objects as its context.
// 2. You need to borrow methods from one object to use with another object.
// 3. You want to create a copy of a function with a permanently set 'this' context for later use (using 'bind').
