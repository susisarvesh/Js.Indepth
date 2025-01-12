//nullish coalsing operator
const a = null ?? "SARVESH";
console.log(a);

const b = false ?? "SARVESH";
console.log(b);
const c = NaN ?? "SARVESH";
console.log(c);
const d = 13 ?? "SARVESH";
console.log(d);

//optional chaining

const ambuja ={
    b: {
        a: {
            name:"sarvesh"
        }
    }
} 
console.log(ambuja.b.a.age  );

