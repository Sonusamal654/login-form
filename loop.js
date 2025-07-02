// function table(x){
//     for(let i=1;i<=10;i++){
//     console.log(`${x} x ${i} = ${x*i}`);
//     }

// }
// table(10);
// function factorcount(num){
//     let factorcount=0;
//     for(i=num;i>=1;i--){
//     if(num%i==0){
//     factorcount++;
//     }
// }
// return factorcount;
// }
// console.log(factorcount(5));

// factorial count
// function factorialcount(num){
//     let factorialcount=num;
//     for(i=num-1;i>=1;i--){
//     factorialcount=factorialcount*i;
//     }

// return factorialcount;
// }

// console.log(factorialcount(5));
// prime number
function isprimenumber(num){
    let factorcount=0;
    for(i=num;i>=1;i--){
    if(num%i==0){
        factorcount++;
    }
}
    if(factorcount<=2){
        return true;
    }else{
        return false;
    }
}

console.log(isprimenumber(5));

