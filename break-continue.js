const products = [
    { name: 'samsung s3 phone', price: 12000},
    { name: 'asus laptop', price: 32000},
    { name: 'apple smart watch', price: 18000},
    { name: 'bosundora binding paper', price: 120},
    { name: 'lg smart phone', price: 10000},
    { name: 'old land phone', price: 1000},
    { name: 'samsung watch', price: 1200},
    { name: 'dell laptop', price: 32000},
    { name: 'lenevo laptop', price: 41000},
]

// for(const product of products){
//     if(product.price <= 10000){
//         break;
//     }
//     console.log(product);
// }

for(const product of products){
    if(product.price <= 10000){
        continue;//10000 er product guloke ignore or skip kore dibe and 10000 er uporer price er je shob product ase shei gulo dekhabe
        //aikane chaile console.log diyeo kora jabe 
        //kintu amra continue and break kivabe kaj kore sheita dekesi
    }
    console.log(product);
}