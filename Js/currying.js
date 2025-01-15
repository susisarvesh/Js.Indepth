function currying(a) { 

    return function (b) { 
        return function (c) { 
            console.log(a+b+c);
            
        }
    }
}

currying(10)(10)(10)

function evaluate(what) {
    switch (what) {
        case "sum":
            return function (a) { 
                return (b) =>{ 
                  console.log(a+b);
                  
                }
            }
            
            break;
    
        default:
            break;
    }
}
 
evaluate("sum")(2)(3)
//infinite currying
function sum(a) {
    return function (b) {
        if (b)  return sum(a + b) 
        else return a
    }
}
sum(2)(3)(4)()
 