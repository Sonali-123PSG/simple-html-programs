// function outer(){
//   //  let d = a*a;
//     console.log("Hello World");
//     function inner(b){
//         return b*b;
//     }
//     return inner;
// }
// //let =10, b=5;

// const z = outer()
// const h = z(5)
// console.log("The value of H is " + h)

// alter method
const outer = function(str){
    const inner = function(){
        console.log(str)
    }
    return inner
}

const out = outer("Darling")
out()