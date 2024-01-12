// Variable Arguments

function product(...num){
    pro = 1
    for(let i=0; i<num.length; i++){
        var pro = pro*num[i]; 
    }
    return pro;
}

console.log(product(8,7,3,4,7,5,1,2,3,4,4,9,5,4,4,3,3,6,7,8,9,9,5))