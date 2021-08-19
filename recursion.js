/*
let sum=0;
for(let i=1; i<=6; i++){
    console.log(i);
    sum = sum+i;
}
console.log(sum);
*/

// let sum=0;
// for(let i=6; i>=1; i--){
//     console.log(i);
//     sum = sum+i;
// }
// console.log(sum);

function sum(i){
    // console.log(i);
    if(i==1){
        return 1;
    }
    //i + sum(i-1);
    //6 + sum(6-1)
    //6 + sum(i) + sum(i-1) 
    //6 + 5 + sum(5-1)
    //6 + 5 + 4 + sum(4-1)
    //6 + 5 + 4 + 3 + sum(3-1)
    //6 + 5 + 4 + 3 + 2 + sum(2-1)
    //6 + 5 + 4 + 3 + 2 +sum(1)

    return sum(i-1) + i;
}
console.log(sum(6));