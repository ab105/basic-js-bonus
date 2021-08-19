//6! = 6*5*4*3*2*1
let multiply = 1;
for(let i=6; i>=1; i--){
    console.log(i);
    multiply = multiply * i;
}
console.log(multiply);

function factorial(i){
    if(i==1){
        return 1;
    }
    return i * factorial(i-1);
}
//aikane function tate giye value bar bar call korbe and amra if condition match howar age porjonto return tar maje function call kore value return pabo
//i * factorial(i-1)
//6 * factorial(6-1)
//6 * 5 * factorial(5-1)
// 6 * 5 * 4 * factorial(4-1)
// 6 * 5 * 4 * 3 * factorial(3-1)
// 6 * 5 * 4 * 3 * 2 * factorial(2-1)
// 6 * 5 * 4 * 3 * 2 * factorial(1)
// 6 * 5 * 4 * 3 * 2 * 1

console.log(factorial(6));