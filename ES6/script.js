/////////////////////////////////////////////
//// Important points to be remember:

//'bind'
//'template notations'
//'Lexical this keyword'
//'Arrow functions'
//'map'
//'Distructuring' gives us a very convenient way to extract data 
//-from a data structure like an object or an array.
//'querySelectorAll' method does not return an array with these
//-elements but instead it returns a node list.
//'for off' loop.

/////////////////////////////////////////////

// Lecture: let and const
//ES5
/* var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); */

//ES6
/* const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6); */

//ES5
/* function driversLicence5(passedTest)
{
    if (passedTest)
    {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true); */

//Es6

/* function driversLicence6(passedTest)
{
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest)
    {
        firstName = 'John';
        
    } 
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true); */

//ES5
/* var i = 23;

for (var i = 0; i < 5; i++)
{
    console.log(i);
}
console.log(i);
 */
//ES6
/* let i = 23;

for (let i = 0; i < 5; i++)
{
    console.log(i);
}
console.log(i);
 */

 //////////////////////////////////////////////
 //Lecture: Blocks and IIFEs

 //ES6
 //variables declared using let and const are block-scoped.
//-This means that these variables are defined inside of a block
//-And from the outside of tha block they are not accesible.( It's a data privacy --- for this we used immediatley invoked function expressions)
//but Here, in ES6 achieving data privacy much esaier and simpler way.
 //Block-scope
/*  {
    const a = 1;// const and let variables are block scoped.
    let b = 2;
    var c = 3;// variables(var) are function scoped.
}
//console.log(a + b);
console.log(c);
 */
//ES5 and IIFE written like this
//function-scope
/* (function () {
    var d = 5; // variables(var) are function scoped.
})(); */

//console.log(d);

////////////////////////////////////////////
// Lecture : Strings

/* let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year)
{
    return 2020 - year;
}
 */
//ES5
/* console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.'); */

//ES5 
//We are using 'template literals' (using backticks and dollor symbol and curly braces)
/* console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`); */

//we have lot of other new features in ES6 is..
//below are boolean expressions.
/* const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); 
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5)); */

///////////////////////////////////////////////
// Lecture : Arrow functions

/* const years = [1990, 1993, 1945, 1932]; */

//ES5
//map method: to loop over the array.
//- we have access to the current element, the current index, and also the entire years array.
/* var ages5 = years.map(function (el) {
    return 2020 - el;
});
console.log(ages5); */

//ES6
/* let ages6 = years.map(el => 2020 - el);
console.log(ages6); */

//If we have two arguments then write like this below,
/* ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6); */

/* ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6); */

//////////////////////////////////////////
//Lecture: Arrow functions 2

//ES5
/* var box5 = {
    color: 'green',
    postion: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This box number ' + self.postion + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe(); */
 
//ES6
/* var box6 = {
    color: 'green',
    postion: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.postion}  and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe(); */
 

/* function person(name)
{
    this.name = name;
}
  */
//ES5
/*  person.prototype.myFriends5 = function (friends) {
    
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new person('John').myFriends5(friends);  */

//ES6
/*  person.prototype.myFriends6 = function (friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new person('John').myFriends6(friends);  */

/////////////////////////////////////////////
// Lecture: Destructuring
//'Distructuring' gives us a very convenient way to extract data 
//-from a data structure like an object or an array.

//ES5
/* var john = ['John', 26];
var name = john[0];
var age = john[1];
console.log(name);
console.log(age); */


//ES6
// extract data from an array.
/* const [name, age] = ['John', 26];
console.log(name);
console.log(age); */

//extract data from objects.
/* const obj = {
    firstName: 'John',
    lastName: 'Smith'
}; */

/* const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName); */


/* const { firstName: a, lastName: b } = obj;
console.log(a); 
console.log(b);
 */
/* function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement); */

//////////////////////////////////////////////
// Lecture: Arrays

//'querySelectorAll' method does not return an array with these
//-elements but instead it returns a node list.
/* const boxes = document.querySelectorAll('.box'); */

//ES5
/*  var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
  */
  
//ES6
/* const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue'); */


//ES5
/* for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}*/
 

 //ES6
 //using 'for of' loop
/* for (const cur of boxesArr6)
{
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';   
} */

//ES5
 /* var ages = [12, 17, 38, 21, 14, 11]; 

 var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);  */

//ES6
/* console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)); */
     
//////////////////////////////////////////////////////
//Lecture: Spread operator
//The new spread operator is a very convenient way to expand 
//-elements of an array in places like arguments and function calls.

/* function addFourAges (a, b, c, d) {
    return a + b + c + d;
}
 */
/* var sum1 = addFourAges(18, 19, 30, 32);
console.log(sum1); */

//ES5
/*  var ages = [18, 19, 30, 32];  */
/* var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
 */
//ES6
/* const sum3 = addFourAges(...ages);
console.log(sum3); */

//To merge two arrays using spread operator
/* const familySmith = ['John', 'Jane', 'Mark'];
const familyRakesh = ['Vedha', 'Swetha', 'Rakesh'];
const bigFamily = [...familySmith, 'Gadipelli', ...familyRakesh];
console.log(bigFamily); */

//Example on a nodeList
/* const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); */

//////////////////////////////////////////////
// Lecture: rest parameters
// spread operator is used in the function call.
//while the rest operator is used in the function declaration
//-to exact an arbitary number of parameters.

//ES5
/* function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= 18);
    });

} */
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 2010, 1987, 1983, 1983);


//Es6
/* function isFullAge6(...years) {
    years.forEach(cur => (2016 - cur) >= 18);
   
}
isFullAge6(1990, 1999, 1965); */


/* function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
   
}
isFullAge6(18, 1990, 1999, 1965); */

////////////////////////////////////////////////////////
// Lecture: Default parameters

//ES5
/* function SmithFamily(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Gadipelli' : lastName = lastName;
    nationality === undefined ? nationality = 'Indian' : nationality = nationality;
   
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
} 
var swetha = new SmithFamily('swetha', 1990);
var vedha = new SmithFamily('vedha', 2017);*/

//ES6
/* function SmithFamily(firstName, yearOfBirth, lastName = 'Gadipelli', nationality = 'Indian') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
var swetha = new SmithFamily('swetha', 1990);
var vedha = new SmithFamily('vedha', 2017); */

//////////////////////////////////////////////////
// Lecture : Map()
// Map is a new key-value structure in ES6.

/* const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version ? ');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'Es2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong answer, please try again!');

console.log(question.get('question')); */


//question.delete(4);

/* if(question.has(true)) {
    question.delete(true);
           
} */

//question.clear();

//console.log(question.size);

//question.forEach((value, key) => console.log(`This a ${key}, and it's set to ${value}`));

/* for (let [key, value] of question.entries()) {
    console.log(`This is ${key}, and it's set to ${value}.`);
} */

/* for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number')
    {
        console.log(`Answer ${key}: ${value}`);
     }
}
 //we can use 'Number' or 'parseInt' in the below statement.
const ans = Number(prompt('Write the corect answer'));
console.log(question.get(ans === question.get('correct'))); */


////////////////////////////////////////////////////
// Lecture: Classes

//ES5
/* var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var John5 = new Person5('John', 1990, 'teacher'); */

//ES6
/* class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge()
    {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

const John6 = new Person6('John', 1990, 'teacher'); */

////////////////////////////////////////////////
//Lecture: Classes with Subclasses

//ES5
/* var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals)
{
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function ()
{
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal(); */

//ES6
/* class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge()
    {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
}
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals)
    {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal()
    {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
 */