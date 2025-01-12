console.log("Functional Programming");

function Hello() { 
    return function () { 
        console.log("Return this anonumus")
    }
}
let vp = Hello();
let inside = vp();
