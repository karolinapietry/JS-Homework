/*
let hello="Hello world";
console.log(hello); 

let firstName='Karolina';
console.log(firstName);

let latName= 'Pietry';
let age = 28;

let fullAge= true;

console.log(fullAge);

let job;
console.log(job);

job ='Teacher';
console.log(job);


let firstName = 'Karolina';
let age= 29;

console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried= false;

console.log(firstName + 'is a ' + age + 'years old' +job + 'Is he married?' + isMarried);


let year, yearJohn, yearMark;
ageJohn = 28;
ageMark = 33;

 year=2018;
 yearJohn = year - ageJohn;
 yearMark = year - ageMark;

console.log(yearJohn);

console.log(year+ 2);
console.log(year* 2);
console.log(year/ 10);

let johnOlder = ageJohn > ageMark;
console.log(johnOlder);

console.log(typeof johnOlder); 

let now = 2018;
let yearJohn = 1989;
let fullAge = 18;
let isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

let x, y;
x = y = (3 +5) *4 -6;
console.log(x, y);

x *= 2;
console.log(x);


let heightMark =169 ;
let heightJohn= 195; 
let massMark= 78; 
let massJohn=92; 
let bmiMark= massMark/(heightMark*heightMark);
let bmiJohn= massJohn/(heightJohn*heightJohn);
let bmi = bmiJohn < bmiMark;
console.log(' Is Mark\'s BMI is higher than John\'s? ' + bmi); 


let firstName = 'John';
let civilStatus = 'single';

if(civilStatus === 'married'){
    console.log( firstName + 'is married');
}
else{
    console.log(firstName + ' is single');
}
let isMarried = true;
if(isMarried){
    console.log( firstName + ' is married');
}
else{
    console.log(firstName + ' is single');
}

let heightMark =1.69 ;
let heightJohn= 1.95; 
let massMark= 78; 
let massJohn=190; 
let bmiMark= massMark/(heightMark*heightMark);
let bmiJohn= massJohn/(heightJohn*heightJohn);

if(bmiMark>bmiJohn){
    console.log('Mark is fatter than John');
}else {
    console.log('John is fatter than Mark');
}


let firstName = 'John';
let age = 7;
if (age < 13){
    console.log(firstName + ' is a boy.');
}else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teen.');
}else{
    console.log(firstName + ' is a man.');
}


let firstName = 'John';
let age =90;

age>=18 ? console.log(firstName + ' drinks beer') : console.log(firstName + 'drinks juce');

let drink = age>=18 ? ' beer' : 'juce';
console.log(drink);

let firstName = 'John';
let job = 'drunker';
switch(job) {
    case 'teacher':
        console.log(firstName + 'teaches kids');
        break;
    case 'driver':
        console.log(firstName + 'drives uber');
        break;
    case 'designer':
        console.log(firstName + 'design nice pictures');
        break;
    default: 
    console.log(firstName + ' is homeless')

}
let firstName = 'John';
let age = 16;
switch(true){ 
case age < 13:
    console.log(firstName + ' is a boy.');
    break; 
case age >= 13 && age < 20:
    console.log(firstName + ' is a teen.');
    break;
default:
    console.log(firstName + ' is a man.');
}


let JohnScore= (890 + 120 + 103)/ 3;
let MarkScore = (116 + 94 + 123) /3;
let MaryScore = (97 + 134 + 105) /3;
switch(true){
    case JohnScore > MarkScore || MaryScore:
        console.log('John has the higgest score: ' + JohnScore);
        break;
    case MarkScore > JohnScore  || MaryScore:
        console.log('Mark has the higgest score: ' + MarkScore);
        break;
    case MaryScore > JohnScore  || MarkScore:
    console.log('Mary has the higgest score: ' + MaryScore);
    break;
    default:
        console.log('There are some draws beetween players');
}


function caculateAge(birthYear){
    return 2019- birthYear;
}
let ageJohn = caculateAge(1990);
let ageMike = caculateAge(1924);
let ageAnna = caculateAge(1987);
console.log(ageJohn, ageMike, ageAnna);

function yearsUntilRetirement(year, firstName)
{
    let age = caculateAge(year);
    let retirement = 65 - age;
    if (retirement >0){

    console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is allready retire');
    }

}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1924, 'Mike');
yearsUntilRetirement(1986, 'Anna');


let whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches how to code';

        case 'driver':
            return firstName + ' drives an uber';

        case 'designer':
            return firstName + ' designs nice pictures';

        default: 
        return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('cop', 'Anna'));


let names = ['John', 'Mark', 'Anna'];
let years = new Array(1990, 1968, 1948);

console.log(names.length);
console.log(names [1]);

names[1] = 'Ben';
names[3] = 'Ben';
console.log(names);

let john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr. ');
console.log(john);

john.pop();
console.log(john);
john.pop();
john.shift();
console.log(john); 

console.log(john.indexOf(1990));

let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'Jon is designer';
console.log(isDesigner);



function tipCalcu(bill) {
    let percent;
    if (bill<50){
        percent = 0.2;
    }
    else if(bill>=50 && bill<200)
    {
        percent = 0.15;
    }else
    {
        percent = 0.1;
    }
    return percent*bill;
}

let bills=[124, 48, 268];
let tips=[tipCalcu(bills[0]), 
          tipCalcu(bills[1]), 
          tipCalcu(bills[2])];

let paid = [bills[0]+tips[0],
           bills[1]+tips[1],
           bills[2]+tips[2]];
console.log(paid)


let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.isMarried);
console.log(john['lastName']);
let x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried']=true;
console.log(john);

let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1980;
jane['lastName']= 'Miller';

console.log(jane);


let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};
john.calcAge();
console.log(john);

let john = {
    fullName: 'John Smith',
    mass: 192,
    haight: 1.95,
    calcBMI: function(){
       this.bmi= this.mass/(this.haight*this.haight);
       return this.bmi;
    }
};
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    haight: 1.69,
    calcBMI: function(){
       this.bmi= this.mass/(this.haight*this.haight);
       return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + 'has higher BMI of' + mark.bmi);
}else if(john.bmi < mark.bmi){
    console.log(mark.fullName + 'has higher BMI of' + john.bmi);
}else{
    console.log('They have the same BMI');
}

for (let i=0; i<10; i++){
    console.log(i);
}

let john = ['John', 'Smith', 1990, 'designer', false]; 
for(let i=0; i<john.length; i++){
    console.log(john[i]);
}
let i=0;
while (i < john.length){
    console.log(john[i]);
    i++;
}

let john = ['John', 'Smith', 1990, 'designer', false]; 
for(let i=0; i<john.length; i++){
    if (typeof john[i]!=='string') continue;
    console.log(john[i]);
}

for(let i=0; i<john.length; i++){
    if (typeof john[i]!=='string') break;
    console.log(john[i]);
}

let john = ['John', 'Smith', 1990, 'designer', false]; 
for (let i=john.length-1; i>=0; i--){
    console.log(john[i]);
}
*/

let JohnBills = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips=[];
        
        this.finalValues=[];
        
        for(let i=0; i<this.bills.length; i++){
            let percent;
            let bill=this.bills[i]
            if(bill<50){
            percent= 0.2;
        }
        else if (bill>=50&& bill<200){
            percent= 0.15;
        }else{
            percent=0.1;
        }
        this.tips[i]= percent*this.bills;
        this.finalValues[i]= bill+ bill* percent;
    }
}
};
JohnBills.calcTip();
console.log(JohnBills);