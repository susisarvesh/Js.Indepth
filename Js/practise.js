const arr = [1, 1, 2, 3, 4, 2];
var result =[]
//opt -[1,2,3,4]
for (var i = 0; i < arr.length-1; i++) { 
    for (var j = i + 1; j < arr.length; j++) { 
        if (arr[i] === arr[j]) {
            continue;
        }
        else {
            result[i] = arr[i];
            break;
         }
    }
}

console.log(result);