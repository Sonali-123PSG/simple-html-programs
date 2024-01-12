//callback function
// function reference ll be send as a parameter to a function...
function university(fun){
    console.log("Welcome to Anna University")
    fun();
}

function college(){
    console.log("Welcome to College Campus")
}

(function (){
    console.log("hello world")
})();
university(college)
// university( )
// //error:hello world
// Welcome to Anna University
// D:\22mx123\sem4\JavaScript\function.js:5
//     fun();
//     ^

// TypeError: fun is not a function