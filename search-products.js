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

function searchProducts(products, searchText){
    // console.log(products,searchText);
    const matched = [];
    for(const product of products){
        const name = product.name;
        // console.log(name);
        // if(name.indexOf('w') == -1 ){//jegulor maje w nai shei name gulo dekhabe
        //     console.log(name);
        // }
        if(name.indexOf(searchText) != -1 ){//jegulor maje input string ta ase shei name dekhabe
            // console.log(name);
            // matched.push(name);//shudu name dekhar jonno
            matched.push(product);//jeta jeta match korbe sheitar pura shob property ta dekhabe
        }
    }
    return matched;
}

const matched = searchProducts(products,'laptop');//future a aikan theke return pabo
console.log(matched);