//[0,1,1,2,3,5]
// const fibo =[0,1]
// for(let i=2; i<=6; i++ ){
//     //fibo[2]=fibo[1]+fibo[0]
//     //fibo[3]=fibo[2]+fibo[1]
//    fibo[i] = fibo[i-1] + fibo[i-2];
//}
//index 4 means 5th podh ta dekhabe
// console.log(fibo[4]);//5th podh ta dekhabe
//console.log(fibo);//full dara ta dekhte parbo

//fibonacci er element ber korar ekta recursive system given at the below
function fibo(i){
    if(i==0){
        return 0;
    }
    if(i==1){
        return 1;
    }
    return fibo(i-1)+fibo(i-2);
}
console.log(fibo(7));