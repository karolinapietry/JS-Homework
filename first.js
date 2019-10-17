// 1)	From years in array check for leap years [1974, 1900, 1985, 2000]
// is divisible by 4, but is not divisible by 100
// is divisible by 400

 let years = [1974, 1900, 1985, 2000];
 let year;
 for(let i=0; i<years.length; i++){
     year = years[i];
    
    if ((year % 4===0 && year %100!==0) || year % 400===0){
        console.log(year + " is a loap year.");
    }
}

// 2)	Calculate factorial of 7. 

let number = 7;
let factorial=1;
for(let i=1; i<=7; i++){

    factorial=factorial*i;
    
}
console.log(factorial);

//3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let numbers=[1,6,23,8,4,98,3,7,3,98,4,98];
let oddNumber=0;
for(let i=0; i<numbers.length; i++){
   
    if(numbers[i]%2!==0){
     oddNumber=oddNumber+numbers[i];
    }
   
}
console.log(oddNumber);