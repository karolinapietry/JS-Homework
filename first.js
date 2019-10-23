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
let factorial = 1;
    for(let i=1; i<=number; i++){
    
        factorial=factorial*i;  
}
console.log(factorial);

//3) c [1,6,23,8,4,98,3,7,3,98,4,98]

let numbers=[1,6,23,8,4,98,3,7,3,98,4,98];
let oddNumber=0;
    for(let i=0; i<numbers.length; i++){
   
        if(numbers[i]%2!==0){
            oddNumber=oddNumber+numbers[i];
    } 
}
console.log(oddNumber); 

//4)	Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let array = [1,6,23,8,4,98,3,7,3,98,4,98];
let max=array[0];
let min=array[0];
for (let i=0; i<array.length; i++){
    if(max=array[i]){
        max=array[i];
    }
    if(min=array[i]){
        min=array[i];
    }
}
console.log('The highest numer is: ' + max + ' The smallest numer is: '+ min);
console.log(); 

//5)	Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

let names=['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];
let longestName=names[0];
for(let i=0; i<names.length; i++){
    if(longestName.length<names[i].length){
        longestName=names[i];
    }
}
console.log('The longest string is: '+longestName);

//6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

let nextArray=[1,6,23,8,4,98,3,7,3,98,4,98];
let max=nextArray[0];
for (let i=0; i<nextArray.length; i++){
    if(max=nextArray[i]){
        max=nextArray[i];
    }
}
for (let i=0; i<nextArray.length; i++){
    if(nextArray[i]===max){
        console.log('Indexes of highest numer is: '+ i);
    }
}
//6 in one loop
let nextArray=[1,6,23,8,4,98,3,7,3,98,4,98];
for (let i=0; i<nextArray.length; i++)



//7)	Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

let tablica= [1,6,23,8,4,98,3,7,3,98,4,98];
let suma=0;
let ile=0;
for(let i=0; i<tablica.length; i++){
    if(tablica[i]%2===0){
        suma=suma+tablica[i];
        ile=ile+1;
    }
}
console.log('Average value is: ' + suma/ile);

//8)	Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let suma = 0;
let ile = 0;
for (let i=1; i<tablica.length; i++){
    if(i%2===0){
        suma = suma + tablica[i];
        ile = ile + 1;
    }
}
console.log('Average value is: ' + suma / ile);

//9)	With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

let tablica = [1,6,23,8,4,98,3,7,3,98,4,98];
let suma = 0;
for(let i = 0; i < tablica.length; i ++){
    if(tablica[i] %2 === 0){
        suma = suma + tablica[i];
    }
    else{
        suma = suma - tablica[i];
    }
}
console.log('Result is: ' + suma);


