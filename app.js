function isPrime(num){
    if(num <=1) return false;
    if(num <=3) return true;
    if(num %2==0 || num%3 ==0) return false;
    for (let i=5; i*i<=num; i+=6){
        if(num %i ==0 || num%(i+2==0))
        return false;
    
    }
    return true;
}
function find(arr){
    return arr.filter(isPrime);
}
const numbers=[19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30];
const primeArray=find(numbers);
console.log("Prime Numbers",primeArray.toString());



const max = Math.max(...primeArray);

const min = Math.min(...primeArray);

let sum = 0;
for (let i = 0; i < primeArray.length; i++) {


    sum = sum + primeArray[i];
    
}

console.log('Maximum : ', max);
console.log('Minimum : ', min);
console.log('Sum : ', sum);