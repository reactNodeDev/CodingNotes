"use strict";

// ------------------------------------VERY VERY IMPORTANT ----------------------------------------- //
// 1- if a variable is declared in the global scope and is then mutated inside a function or a local scope, its new value is the mutated value and is accessible in the global scope and other functions/local scopes in the global scope

let whatsMyName = "Tushar";

function updateMyName() {
  whatsMyName = "Virat"; // 'whatsMyName' has been mutated/updated to 'Virat'. so after this function declaration ends and this function is called, the value of 'whatsMyName' is 'Virat'
}

updateMyName(); // function is called
whatsMyName; //'Virat' will be returned as we mutated/changed 'whatsMyName' to 'Virat' in above function and then called the function

// 5 falsy values - [0 , '' , undefined , null , NaN]

//--------------------- FUNCTION DECLARATION -----------------------//
//function functionName(parameter){
//   return 'something' - parameter;
//}
// 1- function declarations can be called before they are defined in the code

// ---- CALLING/INVOKING FUNCTION ----//
// functionName(argument);

// --------------------- FUNCTION EXPRESSION ------------------- //
const ageCalc = function (birthYear) {
  return 2021 - birthYear;
};

// 1- function expressions dont have a function name, just the function body. //
// 2- then we store that expression in variables //
// 3- function expression cannot be called before they are defined in the code//

// --------------------Calling one function inside another----------//
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function juicer(fruitOneName, fruitOnePieces, fruitTwoName, fruitTwoPieces) {
  const firstfruitPieces = cutFruitPieces(fruitOnePieces);
  const secondFruitPieces = cutFruitPieces(fruitTwoPieces);

  const juice = `Your juice contains ${firstfruitPieces} pieces of ${fruitOneName} and ${secondFruitPieces} of ${fruitTwoName}`;
  return juice;
}

juicer("apple", 5, "Moushmi", 3);

// ---- Coding Challenge-----//
const teamScore = function (match1Score, match2Score, match3Score) {
  const total = match1Score + match2Score + match3Score;
  return total;
};

const calcAverage = function (match1Score, match2Score, match3Score) {
  const totalScore = teamScore(match1Score, match2Score, match3Score);
  const averageScore = totalScore / 3;
  return averageScore;
};

// const pandaAvgScore1 = calcAverage(123,233,711);
// const koalaAvgScore1 = calcAverage(65,54,49);

const decideWinner = (pandaAvgScore1, koalaAvgScore1, season) => {
  if (pandaAvgScore1 >= 2 * koalaAvgScore1) {
    console.log(
      `Pandas won season ${season}, their average is ${
        pandaAvgScore1 / koalaAvgScore1
      } times more than koalas`
    );
  } else if (koalaAvgScore1 >= 2 * pandaAvgScore1) {
    console.log(
      `Koalas won season ${season}, their average is ${
        koalaAvgScore1 / pandaAvgScore1
      } times more than Pandas`
    );
  } else {
    console.log(`Match tied !`);
  }
};
// decideWinner(pandaAvgScore1,koalaAvgScore1,1);

// const pandaAvgScore2 = calcAverage(85,54,41);
// const koalaAvgScore2 = calcAverage(23,34,27);
// decideWinner(pandaAvgScore2,koalaAvgScore2,2);

// ---------------------------------------- Array methods -------------------------------------------- //
let mobiles = [
  "poco x3 pro",
  "iphone 11 pro max",
  "samsung galaxy s20 fe",
  "oneplus 9r",
];
const newLength = mobiles.push("xiaomi mi 11t"); //push function returns the new length of the array

mobiles.unshift("redmi k20 pro");

mobiles.pop(); //removes last element , returns the removed element
mobiles.shift(); //removes first element
mobiles.includes("oneplus 9r"); //true
mobiles.includes("pixel 5"); //false

// -- Coding challenge -- //
const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};
const tip1 = calcTip(100);

const bills = [125, 555, 44];
let tips = [];
for (let bill of bills) {
  tips.push(calcTip(bill));
}
// console.log(tips);

let totalBillValue = [];
for (let i = 0; i < bills.length; i++) {
  totalBillValue.push(bills[i] + tips[i]);
}
// console.log(totalBillValue);

//  ------------------------------ Objects -----------------------------//
// array - just has values. to access the values, we need to access them in the right order. structured data
// objects - has both keys and values, we can access the values using the keys, order doesnt matter. unstructured data

const myMobile = {
  firstName: "asus",
  lastName: "6z",
  brand: "asus",
  processor: "snapdragon 855",
  battery: 5000,
  display: "6.4 inch",
  launchYear: 2017,
  calcPrice: function () {
    // a function inside an object is called a "METHOD"
    // console.log(this); //"this" will output the object which is calling the "calcPrice" functn
    return this.battery * 6;
  },
  getAge: function () {
    this.age = 2021 - this.launchYear; //the "age" property is added to the object that calls "getAge" function, if "myMobile" calls it, then "age" is added to "myMobile"
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} ${this.lastName} has a ${
      this.processor
    } processor, ${this.display} display, ${
      this.battery
    }mah battery. It is priced at ${this.calcPrice()}`;
    return this.summary;
  },
};

//--dot notation-- //
myMobile.brand;

// --bracket notation-- //
myMobile["brand"]; //outputs the value of the 'brand' key
const nameKey = "Name";
myMobile["first" + nameKey]; //outputs the firstName's value

let wannaKnowWhat; //= prompt('what do you want to know? firstName, lastName, processor, battery or display?');

myMobile.wannaKnowWhat; //undefined will be returned because wannaKnowWhat is not a key/property in myMobile

//above problem can be solved using bracket notation//
myMobile[wannaKnowWhat];

myMobile.storageType = "UFS 3.1";
myMobile["refresh rate"] = "120hz";

myMobile.calcPrice(); //using dot notation
myMobile["calcPrice"](5000); //using bracket notation
myMobile.getAge();
myMobile.getSummary();

//! --- CODING CHALLENGE #3 --- //
// calculate and compare BMIs //
const Mark = {
  firstName: "Mark",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const markBmi = Mark.calcBMI();
const johnBmi = john.calcBMI();

if (markBmi > johnBmi) {
  //  console.log(`Mark's BMI(${markBmi}) is more than that of John's(${johnBmi})`);
} else if (johnBmi > markBmi) {
  //  console.log(`John's BMI(${johnBmi}) is more than that of Mark's BMI(${markBmi})`);
} else {
  //  console.log('both have equal BMI');
}

// ---------------- FOR LOOPS --------------------- //
const years = [1980, 1984, 1990, 1993, 1996, 2003];
let ageArray = [];

for (let i = 0; i < years.length; i++) {
  ageArray.push(2021 - years[i]);
}
//  console.log(ageArray);

//  ------------------ CONTINUE AND BREAK -----------------//
let arrayMix = [12, "asus rog", true, "macbook pro", 875, 908, "iqoo 7 pro"];
let newArrMix = [];

for (let i = 0; i < arrayMix.length; i++) {
  if (typeof arrayMix[i] !== "string") continue; //this means if its not iterating a string, it should skip and continue
}

for (let i = 0; i < arrayMix.length; i++) {
  if (typeof arrayMix[i] !== "number") break; //this means that as soon as the iterator finds an element which is not a number, it will end the process//
}

// -------------- LOOPING BACKWARDS ------------- //

for (let i = arrayMix.length - 1; i >= 0; i--) {
  //   console.log(arrayMix[i]);
}

// ----------------- WHILE LOOP ------------------ //
// while loop is used when we dont know how many iterations the loop will have, when we dont know when will the loop end

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  //console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    //console.log(`Rolling ends here`);//
  }
}

// ----------- CODING CHALLENGE #4 ------------------//
let bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips4 = [];
let totalBill4 = [];

for (let i = 0; i < bills4.length; i++) {
  const tip = calcTip(bills4[i]);
  tips4.push(tip);
  totalBill4.push(tip + bills4[i]);
}

// -- calculate average of all the bill values -- //
const calcAverage4 = function (bill4) {
  let sum = 0;
  for (let i = 0; i < bill4.length; i++) {
    sum += bill4[i];
  }
  const averageOfBills = sum / bill4.length;
  return averageOfBills;
};

const billTotal = calcAverage4(bills4);
const taxTotal = calcAverage4(tips4);
const billTotalWithTaxes = calcAverage4(totalBill4);

// ---------------------- HOW JAVASCRIPT WORKS BEHIND THE SCENES --------------------- //

// -------------------- SCOPES -------------------------//
// 1- FUNCTION SCOPE - variables defined inside a function can only be accessed within that function
// 2- BLOCK SCOPE - staring from ES6, blocks like 'for, if-else, while, do-while' also have their own local scope
// 3- CONST and LET variables are block scoped. they cant be accessed outside the block. however, VAR variables can be accessed outside a block
// 4- functions can access variables from their parent functions but vice-versa is NOT true
// 5- scope chain has nothing to do with when and how funcitons are called
// 6- FUNCTIONS are block scoped in STRICT MODE

// ------------------------ HOISTING ----------------------//
// 1- hoisting means some variables are accessible/usable before they are actually declared in the code
// 2- before execution, each code is scanned for variable declarations, and for each variable, a new property is created called "variable environment oject".
// 3- VAR & Function Declaration are hoisted. means they can be accessed before they are declared
// 4- function expressions and arrow functions are hoisted ONLY when declared with var.
// 5- if let/const variables are accessed before they are declared, we get the "cannot access before initialization error"

// ---------------- THIS keyword ----------------- //
// 1- METHOD-  when a method (a function attached to an object) uses the this keyword, it points to the object which is calling the method.
// 2- SIMPLE FUNCTION- when a simple function uses this keyword, it returns the window object (in non-strict mode). Undefined is returned in the strict mode. simple function does get its own This keyword though
// 3- ARROW FUNCTION- Arrow functn do not get their own this keyword. when arrow function uses this keyword, it points to the surrounding function or parent function. this is called "Lexical This Keyword"
// 4- EVENT LISTENER- if an event listener uses the this keyword, it points to the DOM element that the handler is attached to
// 5- THIS does not point to the functn itself or its variable environment
// 6- OBJECT- when an object's method uses This keyword, the method points to the object calling the method
// 7- An Object is not a code block. so it doesnt have its own block scope

const tushar = {
  firstName: "tushar",
  birthYear: 1996,
  calcAge: function () {
    //"calcAge" method is defined in "tushar"
    this.age = 2021 - this.birthYear;
    return this.age;
  },
};
tushar.calcAge();

const vaibhav = {
  birthYear: 2000,
};

vaibhav.calcAge = tushar.calcAge; //tushar's calcAge method borrowed by vaibhav. so now calcAge methodbelongs to vibhav too.
vaibhav.calcAge(); //vaibhav is calling 'calcAge' now. so, 'this' in calcAge will point to vaibhav here.

const anObject = {
  firstName: "shankar",
  class: "12th",
  getFirstName: () => {
    //an arrow function
    // return this.firstName;
  },
};

anObject.getFirstName(); //undefined will be returned because arrow functn doesnt get its own this keyword. when this is called, it points to its parent element(window object here). As window obj doesnt have a property called "firstName", undefined is returned

var firstName = "gaurav";
anObject.getFirstName(); //'gaurav' will be returned now as the window object does have a firstName property now (defined with var. const and let will still return undefined)

// --------  PRO TIP - You should never ever use an ARROW FUNCTION as a METHOD as you cannot use this keyword with arrow functions

// ---- handling objects with functions inside a method ------
const anotherObject = {
  firstName: "Savi",
  lastName: "Shukla",
  getName: function () {
    this.firstNameIs = this.firstName;

    // --------- Pre ES6 method ----------- //
    // const self = this; //this sets the "this" keyword in a variable. now we can use it in the below function to acess "this" of the object calling the method
    // function getLastName() {
    //     const lastNameIs = self.lastName; //here "self" refers to the "this" keyword pointing to the object calling the method
    // }
    // getLastName();

    // ------- ES6 method (Use arrow function) -------------- //
    // we'll use arrow function here as it points the this keyword to its parent function
    const getLastName = () => {
      const lastNameIs = this.lastName;
      return lastNameIs;
    };
    getLastName();
  },
};

anotherObject.getName();

// --------------- "ARGUMENTS" keyword --------------------- //
// 1- "arguments" keyword is useful when we want to access all the parameters passed in the function call

const multiply = function (a, b) {
  console.log(arguments); //the "arguments" keyword gives us access to the parameters passed in the function call
  console.log(a * b);
};
// multiply(4,5,8,1);

// "arguments" keyword is not supported in arrow functions
// if we pass the "arguments" keyword in an arrow function, we'll get an error

// --------------- Primitive vs reference types ----------------------//

// 1- when we assign a first variable's value to a second variable, nothing is changed in the first variable
// 2- however, when we assign a first object equal to a second object, we just copy the reference, both the references still point to the same object. all the changes made to either object will be applied to both the objects
// 3- primitive data type - primitive data type means values of variables are stored in the memory independently. so, the value of one variable doesnt depend on other variables. undefined, null, boolean, number, string, and symbol are primitive data types
// 4- reference data types - reference data types are objects, functions and arrays. it means that the reference DT is not stored in the variable, but somewhere in the memory and so all the copies of the DT are dependent on each other because they are pointing to the same object in memory. changes in the object from one variable will reflect the changes in all the copies because the object in memory has been altered

let age1 = 25;
const age2 = age1;
age1 = 30;
// console.log(age1); //30 will be printed
// console.log(age2); //25 will be printed

const obj1 = { age: 25 };
const obj2 = obj1;
obj2.age = 31;
obj1.age = 45;
//as obj2=obj1 now, all the changes made to obj2 will be applied to obj1 too
// console.log(obj1); //age=31 will be printed
// console.log(obj2); //age=31 will be printed

//to solve the above problem, we use 'Object.assign()' method to create a copy of the object first

const tusharGh = {
  firstName: "tushar",
  lastName: "ghildiyal",
  age: 25,
  occupation: "web developer",
};

const tusharCopy = Object.assign({}, tusharGh); //"tusharCopy" is a copy of "tusharGh" now
const tusharTheActor = tusharCopy; //we assign the second object = copy of the first obj. this way the first obj will be unchanged
tusharTheActor.firstName = "Virat";
tusharTheActor.lastName = "Saadhav";
tusharTheActor.occupation = "actor";

// "Object.assign()" only creates a shallow copy, which means it copies properties only at the first level. properties like arrays, objects etc. arent copied

//we need to make a deep clone, which will copy everything

// ----------------------- DATA STRUCTURES, MODERN OPERATORS AND STRINGS ------------------------------------- //

// ----------------------- ARRAY DESTRUCTURING ------------------------- //
const arr1 = [2, 1, 0, 4];
const [el1, el2, el3, el4] = arr1;

const pizzaArr = [
  "dominos",
  "pizza hut",
  "pizza uncle",
  "jungle hut",
  "valencia galleria",
];
const [pizza1, , pizza3, , pizza5] = pizzaArr;

// ---- ARRAY DESTRUCTURING can be used to swap/exchange two variables
let [pizzaOne, pizzaTwo] = pizzaArr;
//Now lets swap/exchange the above 2 variables
[pizzaOne, pizzaTwo] = [pizzaTwo, pizzaOne];

const foodMenu = {
  hotelName: "Rochelle's corner",
  starterMenu: [
    "paneer tikka",
    "mushroom tikka",
    "cheese fries",
    "masala kabab",
  ],
  mainMenu: ["shahi paneer", "butter chicken", "kadhai chicken", "malai kofta"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Receive 2 values from a function
const [starter, main] = foodMenu.order(0, 1);

//Nested Destructuring
const nestedArr = [2, 1, [0, 4]]; //array inside an array
const [i, , [j, k]] = nestedArr;

//Default Values
const [i1 = 0, j1 = 0, k1 = 0] = [1, 9]; // 0 is the default values for our variables

// ----------------------------------- OBJECT DESTRUCTURING ---------------------------------------------- //

//while destructuring objects, we need to access the object properties using the same name they are given in the object
const dominar400 = {
  brand: "bajaj",
  model: "dominar400",
  displacement: "373cc",
  power: "39ps",
  torque: "35nm",
  features: [
    "dual-channel ABS",
    "USD",
    "clip-on handle bars",
    "slipper-clutch",
    "secondary display",
  ],
  price: [185000, 192000, 180000, 201000],
};

const { brand } = dominar400; //directly get the 'brand' property of 'dominar400' object
const { model, displacement, power, torque } = dominar400;

//giving the properties the name we want
const {
  brand: bikeBrand,
  model: bikeModel,
  displacement: bikeDisplacement,
  power: bikePower,
  torque: bikeTorque,
} = dominar400;

//--setting default values
//setting default values helps when we dont get the data we want to fetch from a server
const { bikeFeatures = [], price: bikePrice = [] } = dominar400;

//-- mutating variables while destructuring objects
let a = 21;
let b = 96;
let obj3 = { a: 4, b: 708 };
// {a,b} = obj3; //this will throw an error as {a,b} expects a code block around it

//solution
({ a, b } = obj3); //doing this we overwrite 'a' and 'b' variables

//-- Nested Objects -- //
const resto = {
  schedule: {
    sun: {
      open: "no",
      close: "no",
    },
    mon: {
      open: "10:30 am",
      close: "7:30 pm",
    },
    tue: {
      open: "8:30 am",
      close: "9:00 pm",
    },
  },
};

//first we store the 'schedule' property in a variable
const { schedule } = resto;

//as sunday is the last object we have to access
const {
  sun: { open: oSun, close: cSun },
  mon: { open: oMon, close: cMon },
  tue: { open: oTue, close: cTue },
} = schedule;

// -- Destructuring in the object itself
const swiggy = {
  starterMenu: [
    "paneer tikka",
    "mushroom tikka",
    "cheese fries",
    "masala kabab",
  ],
  mainMenu: ["shahi paneer", "butter chicken", "kadhai chicken", "malai kofta"],
  //now we declare a function which will take object properties as arguments from the user//
  orderDetail: function ({
    starterIndex = 1,
    starterAmount = 1,
    mainIndex = 1,
    mainAmount = 1,
    address = "India",
    time = "10:10 pm",
  }) {
    const orderInfo = `Order Received !! ${starterAmount} ${this.starterMenu[starterIndex]} and ${mainAmount} ${this.mainMenu[mainIndex]} will be delievered to ${address} before ${time}`;
    return orderInfo;
  },
  chooseIngredients: function (ing1, ing2, ing3) {
    const finalDish = `Ingredients added! ${ing1}, ${ing2} and ${ing3} are added to your dish. Happy Eating :)`;
    return finalDish;
  },
};

//and now while calling the function, we'll have to define the whole object
swiggy.orderDetail({
  starterIndex: 0,
  starterAmount: 2,
  mainIndex: 0,
  mainAmount: 1,
  address: `Amrapali Apartments, Patparganj, Delhi`,
  time: "9:00 pm",
});

swiggy.orderDetail({}); //Default Values will be retured as we pass an empty object

// ---------------------------------- SPREAD OPERATOR ---------------------------------------- //
//-- spread operator gives us all the elements of an array individually
const arr2 = [6, 9, 9, 1];
const arr3 = [...arr2, 4, 0, 1, 2];

const newSwiggyMennu = [...swiggy.mainMenu, "Palak Paneer Kofta"];

//create shallow copy of an array
const swiggyMenuCopy = [...swiggy.mainMenu];

//merging 2 arrays
const swiggyWholeMenu = [...swiggy.mainMenu, ...swiggy.starterMenu];

//we can use the Spread operator on all the "Iterables" i.e. - ARRAYS, STRINGS, MAPS, SETS
const myName = "Tushar";
const myNameAllLetters = [...myName];

//insert all the elements of an array as "Function Arguments" using Spread Operator
const ingredients = ["Haldi", "Tomato", "Onion"];
const readyDish = swiggy.chooseIngredients(...ingredients);

// since ES6 2018, Spread Operator also works on Objects, even though objects are not iterables
const fullSwiggy = {
  foundedIn: 2010,
  founder: "Swarnim Shukla",
  ...swiggy, //inserting the swiggy object here
};

const fullSwiggyCopy = { ...fullSwiggy };
fullSwiggyCopy.foundedIn = 1998;
fullSwiggyCopy.founder = "Tushar Ghildiyal";

// --------------------- REST PATTERN & PARAMETERS -------------------- //

// REST is on the left side of "=". REST Pattern stores the values in an Array, exactly the opposite of what SPREAD operator does//
const [item1, item2, ...others] = [...swiggy.mainMenu, ...swiggy.starterMenu]; //first element (item1) and second element (item2) are extracted and rest of the other items are stored in the "others" array//

// 1- REST pattern must always be the last in the destructuring assignment, so that javascript knows until when it needs to collect the rest of the array

// 2- FUNCTIONS
// we'll be using REST pattern in the "Parameters" of the "Function" so that we can enter any number of "Arguments" during the "Function Call"

const addNumbers = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i];
    sum += numbers[i];
  }
  return sum;
};
addNumbers(9, 7, 5, 12, 17, 17); //all the numbers in the arguments will be added
const allValues = [5, 9, 14, 12, 10, 13];
addNumbers(...allValues);

const pizzaPlace = {
  decideIngredients: function (ingredient1, ...others) {
    //atleast one ingredient is compulsary. rest others are optional//
    // console.log(`main: ${ingredient1}`);
    // console.log(`optional: ${others}`);
  },
};
pizzaPlace.decideIngredients("paneer", "capsicum", "onion", "tomato");

// REST - It is used where we will write variable names (LHS of "=")
// SPREAD - It is used where we will write values for the variables (RHS of "=")

// -------------------------- FOR-OF LOOP ----------------------------//
const numberArr = [45, 78, 52, 980, 1034, 5694];

for (let num of numberArr) {
  //loops the entire array and gives us the Values
  // console.log(num);
}

for (let [i, val] of numberArr.entries()) {
  // gives us the Values and their Index Number
  // console.log(`${i+1}: ${val}`);
}

// ------------------ ENHANCED OBJECT LITERALS ---------------------- //
//we can store variables inside objects

const hoursActive = {
  mon: { open: 1030, close: 2100 },
  tue: { open: 1030, close: 2000 },
  wed: { open: 900, close: 1900 },
};

//now we take the "hoursActive" object and place it inside the "restaurant" object
const restaurant = {
  hoursActive,

  //with ES6, we dont need to specify a "Method" using the "Function" keyword
  printActiveHours() {
    const monActiveHrs = `Mon - Open: ${hoursActive.mon.open}`;
    return monActiveHrs;
  },
};

// we can use "Custom Property Names" in Objects
const days = ["mon", "tue", "wed", "thurs"];

const workingHrs = {
  [days[0]]: { open: "9am", close: "6pm" },
  [days[1]]: { open: "10am", close: "7pm" },
  [days[2]]: { open: "11am", close: "9pm" },
};

//------------------------------------- OPTIONAL CHAINING --------------------------------------------------//
// ? - Optional Operator
// ? - if the condition before the "?" operator is true, only then the condition after the "?" is executed

const sampleObj = {
  tvShows: {
    GOT: { start: 2011, end: 2019 },
    HIMYM: { start: 2005, end: 2014 },
    FRIENDS: { start: 1994, end: 2004 },
    BBT: { start: 2007, end: 2020 },
    sacredGames: { start: 2018, end: "-" },
  },
  movies: {
    GOW: { year: 2012 },
    KabirSingh: { year: 2019 },
    Stree: { year: 2017 },
  },
};

sampleObj.tvShows.GOT?.start; //if "sampleObj.tvShows.GOT" exists, only then ".start" is executed. otherwise "Undefined" is returned
sampleObj.movies.KabirSingh?.year; //if "sampleObj.movies.KabirSingh" exists, only then ".year" is executed. otherwise "Undefined" is returned

let timeTable = {
  monday: { open: 9, close: 20 },
  tuesday: { open: 9, close: 20 },
  wednesday: { open: 10, close: 21 },
  thursday: { open: 8, close: 18 },
  friday: { open: 9, close: 20 },
};

const daysOfWeek = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
for (const day of daysOfWeek) {
  const openTime = timeTable[day]?.open; //if "day" property of "timeTable" exists, return "open"
  const closeTime = timeTable[day]?.close; //if "day" property of "timeTable" exists, return "close"
  const openCloseInfo = `On ${day}, we open at ${openTime} and close at ${closeTime}`;
  const closedNotice = `We are closed on ${day}`;
  const dayOpenInfo = openTime ? openCloseInfo : closedNotice;
}

// Optional Chaining for calling "methods"
//optional chaining can be used for calling "methods". if the method exists, only then the method is called, otherwise undefined is returned
const mehtodObject = {
  addNum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
};

mehtodObject.addNum?.(5, 5, 10, 11) ?? "Method does not exist"; //if the "mehtodObject.addNum" method exists, then add the numbers in the arguments, otherwise return 'Method does not exist'//
mehtodObject.addnumber?.(9, 7) ?? "Method does not exist";

// ------------------------------------------ SHORT CIRCUITING ------------------------------------------ //

// Using the OR ("||") operator
// 1- In short circuiting, if "truthy" value comes, result is printed but if "falsy" value comes, the system moves to the next step. and once a "truthy" value is found, the system stops there and prints the value. rest of the conditions dont matter after that

null || undefined || "hello" || 23; //"hello" will be printed as it is the first truthy value here. no values after "hello" will be checked as "hello" has already been printed

sampleObj.tvShows.sacredGames || 10; //if "sampleObj.tvShows.sacredGames" exists (not undefined), then print its value, otherwise print "10"

//Using the AND ("&&") operator
// In the "&&" operator, if any one value is "falsy", the result comes out as "undefined"
undefined & 0;

// --------------------------------- NULLISH COALESCING OPERATOR -------------------------------------//
// 1- NCO passes 0 and empty string ('') as "truthy" values
// 2- only "null" and "undefined" are passed as "falsy" values in NCO

sampleObj.movieDb = 0;
sampleObj.movieDb ?? 10; // 0 will be printed as NCO passes 0 as truthy value
sampleObj.tvShowDb = "";
sampleObj.tvShowDb ?? 10; // '' will be printed as NCO passes empty string too as a truthy value

// ---------------------- Looping OBJECTS -------------------------------------- //

//consider the "timeTable" object.
const daysOpen = Object.keys(timeTable); //this will give us all the keys of the object in an array
let daysStr = `We are open ${daysOpen.length} days of the week: `;

for (const day of Object.keys(timeTable)) {
  //this will loop over the keys of "timeTable" obj
  daysStr += `${day},`;
}
//get the values of an object
const timeSchedule = Object.values(timeTable);

//get all the entries of an object
const entries = Object.entries(timeTable); //entries consist of "keys" and "values" of the object

for (const [key, { open, close }] of entries) {
  const statement = `On ${key}, we open at ${open} and close at ${close}`;
}

// ------------------------------------ WORKING WITH STRINGS ----------------------------------------------- //

const em = "Marshall Mathers"; // string's "index" starts from 0
let strArr = [];
strArr.push(...em);
em[4];
em.length;
em.indexOf("h");
em.lastIndexOf("r");
em.slice(5); // "slice()" - position at which the extraction will start
em.slice(3, 7); //"slice(n,m)" extract the string from n to m-1
em.slice(0, em.indexOf(" ")); //extract the first word of the string
em.slice(em.lastIndexOf(" ")); //extract the last word of the sting
em.slice(-1); //print the last character of string
em.slice(0, -1); //omit the last character

// "Javascript" behind the scenes converts a string into an object, with the characters of the string at each index. while each character is considered a "String"
let newStr = new String("Acer nitro 5s");
typeof newStr; //an object
const incorrectStr = "  gtusharb49@gmail.com \n";
const trimmedString = incorrectStr.trim(); //"trim" gets rid of all the blank spaces and unncecessary characters

//replace
let acerNitro5x = newStr.replace("s", "x"); //"replace" only replaces the first occurence
let announcement = "Everyone please come to the door 23, i repeat door 23";
announcement.replace(/door/g, "gate"); //to replace all occurences of 'door', we used '/door/g'. 'g' means global

const mobileDev = "galaxy m51";
mobileDev.includes("m");
mobileDev.startsWith("galaxy");
mobileDev.endsWith("51");

const customerCheck = function (items) {
  const itemsLowerCase = items.toLowerCase();
  let ourResponse;
  if (itemsLowerCase.includes("knife") || itemsLowerCase.includes("gun"))
    ourResponse = "you are not allowed !";
  else ourResponse = "welcome aboard man";
  return ourResponse;
};

customerCheck("i have a knife and gun");
customerCheck("just some food and water man");

// ------------------------------- SPLIT ----------------------------------- //

// 1- "Split" is a very powerful function of strings

const myNameStr = "My+name+is+Real+Slim+Shady";
const myNameStrSplit = myNameStr.split("+"); //the string will be splitted into an array where "+" sign appears
let myFullName = "Tushar Ghildiyal";
myFullName.split(" "); //this can help to split the fullname into firstname and lastname
const [firstName1, lastName1] = "Tushar Ghildiyal".split(" ");

// -------------------------------- JOIN ----------------------------- //
const fullOfficialName = ["Mr.", firstName1, lastName1.toUpperCase()].join(" "); //"join" function joins together all of the elements of an array into a string

//capitalise a long string function
// -- Method 1
const capitaliseStringMehtod_One = function (name) {
  const nameSplit = name.split(" "); //splits the name string elements and adds them into an array
  let finalCapitalName = "";
  for (const names of nameSplit) {
    const namesFirstLetterUpper = names.slice(0, 1).toUpperCase();
    const namesRestLetters = names.slice(1);
    finalCapitalName += `${namesFirstLetterUpper}${namesRestLetters} `;
  }
  return finalCapitalName;
};
// -- Method 2
const capitaliseStringMehtod_Two = function (name) {
  const nameSplitArr = name.split(" "); //splits the name string elements and adds them into an array
  let finalCapitalNameArr = [];
  let finalCapitalName;

  for (const names of nameSplitArr) {
    finalCapitalNameArr.push(names[0].toUpperCase() + names.slice(1));
    finalCapitalName = finalCapitalNameArr.join(" ");
  }
  return finalCapitalName;
};
capitaliseStringMehtod_Two("marshal bruce mathers");

// -- Method 3
const capitaliseStringMehtod_Three = function (name) {
  const nameSplitArr = name.split(" "); //splits the name string elements and adds them into an array
  let finalCapitalNameArr = [];
  let finalCapitalName;
  for (const word of nameSplitArr) {
    finalCapitalNameArr.push(word.replace(word[0], word[0].toUpperCase()));
    finalCapitalName = finalCapitalNameArr.join(" ");
  }
  return finalCapitalName;
};
capitaliseStringMehtod_Three("vijay dinanath chauhan");

// -- padding --
// 1- string.padStart(length of the string you want, characters you want to add);

myFullName.padStart(20, "-");
myFullName.padEnd(25, "-");
myFullName.padStart(24, "-").padEnd(32, "-");

// TIP - add '' to any data type and it becomes a string
let phonemodelNumber = 12;
phonemodelNumber += ""; // "phonemodelNumber" is now a string

const censorDebitCardNumber = function (cardNum) {
  cardNum = cardNum + "";
  if (cardNum.length !== 16) {
    console.log("please enter a 16 digit card number");
  } else {
    const cardNumFirstTwoDigits = cardNum
      .slice(0, 2)
      .padEnd(cardNum.length - 2, "*");
    const cardNumLastTwoDigits = cardNum.slice(-2);
    cardNum = cardNumFirstTwoDigits + cardNumLastTwoDigits;
    return cardNum;
  }
};
censorDebitCardNumber(4512340967519862);

// -- String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightsArrUnordered = flights.split("+");
let flightsArrOrdered = [];
for (const flight of flightsArrUnordered) {
  const eachFlightElem = flight.split(";");
  flightsArrOrdered.push(eachFlightElem);
}

let allAnnouncements = [];
for (const flight of flightsArrOrdered) {
  const departureInfo = flight[0].replace("_", "").replace("_", " ");
  const departureFrom = flight[1].slice(0, 3).toUpperCase();
  const departureTo = flight[2].slice(0, 3).toUpperCase();
  const timeOfArrOrDep = flight[3].split(":");
  const timeHrs = timeOfArrOrDep[0].padEnd(3, "h");
  const timeInHFormat = timeHrs + timeOfArrOrDep[1];
  const announcement = `"${departureInfo}" From ${departureFrom} To ${departureTo} (${timeInHFormat})`;
  allAnnouncements.push(announcement);
}

// for(const announcement of allAnnouncements){
//     console.log(announcement);
// }

// ----------------------------------- CLOSER LOOK AT "FUNCTIONS" -------------------------------------------- //

// ---------- Default Parameters ------------ //
function flightBooking(
  flightNum = "AJ129",
  numOfPassengers = 1,
  ticketPrice = numOfPassengers * 2000
) {
  const booking = {
    flightNum,
    numOfPassengers,
    ticketPrice,
  };
  return booking;
}

flightBooking("gj751", 4);

// --- First Class Functions --- //
// 1- Functions are just values, just like objects
// 2- Functions are just another type of object

// --- Higher Order Functions --- //
// 1- Functions that receive other functions as "Arguments" or functions that "return" a new function, or "both"

// -- Functions Accepting Callback Functions -- //
// CALLBACK FUNCTIONS - functions that we dont "call" directly but tell javascript to call them

function joinAllWords(str) {
  const joinedString = str.replace(/ /g, "").toLowerCase(); //replace all "spaces" with "no-space"
  return joinedString;
}

function firstWordUpper(str) {
  const [firstWord, ...others] = str.split(" ");
  return [firstWord.toUpperCase(), ...others].join(" ");
}

function transformer(str, fn) {
  const originalString = `ORIGINAL STRING: ${str}`;
  const transformedString = `TRANSFORMED STRING: ${fn(str)}`;

  const transformedBy = `TRANSFORMED BY: ${fn.name}`;

  return [originalString, transformedString, transformedBy];
}

transformer("chandler is funny", joinAllWords); // 'joinAllWords' is the callback function here. we dont call it directly. Instead, "transformer" function calls it. so "transformer" is the "higher order" function here.
transformer('"chandler is funny', firstWordUpper); // 'firstWordUpper' is the callback function here

// --------------------------------- FUNCTIONS RETURNING FUNCTIONS ------------------------------------- //

function greet(greeting) {
  return function greetUser(name) {
    //this "return function" will be the result of "greet" function's call
    const greetMsg = `${greeting} ${name}`;
    // console.log(greetMsg);
  };
}

// Method 1
const greetWelcome = greet("Welcome"); //we have stored the function call in a variable. the result of this function call is the "return function" "greetUser"

greetWelcome("Tushar"); //now we call the "return function" which was the result of "greet" function's call
greetWelcome("Virat");

// Method 2
greet("hi")("vershok"); // "greet('hi')" is a function. so we can immediately call it too, which we did

// Function in Function using "Arrow Function"
const sayHello = (greetUser) => (userName) => {
  //one "arrow function" returning another "arrow function"
  const greetMsg = `${greetUser} ${userName}`;
  // console.log(greetMsg);
};

sayHello("hola")("tushar");

// ---------------------------------------- CALL & APPLY METHODS --------------------------------------------- //

// 1- "Functions" are "objects" . objects have methods. so, functions can have methods too
// 2- "Call" and "Apply" are "functions methods"

// ----------------------- CALL METHOD -----------------------//
const airIndia = {
  companyName: "Air India".toUpperCase(),
  iataCode: "AI",
  bookings: [],
  book(flightNum, passengerName) {
    const bookingInfo = `${passengerName} booked a seat on ${this.companyName}, Flight Number: ${this.iataCode}${flightNum}`;
    // console.log(bookingInfo);

    this.bookings.push({
      PassengerName: `${passengerName}`,
      flightNum: `${this.iataCode}${flightNum}`,
    });
  },
};

// airIndia.book(832, 'TUSHAR GHILDIYAL');
// airIndia.book(951, 'KEN ADAMS');

const vistara = {
  companyName: "Vistara",
  iataCode: "VIS",
  bookings: [],
};

let bookInfo = airIndia.book; // we assign the "book" method of "air india" to a variable here
// "bookInfo" is a "function", not a "method", as it is not inside an object.
// so, the "this" keyword in the "airIndia.book" method will point to undefined as functions return "undefined" on "this" keyword.
// bookInfo(2145, 'William'); //so, this wont work

//  So, to call one object's method into another object, we use "CALL"
bookInfo.call(vistara, 1099, "TUSHAR GHILDIYAL");

// ---------------- BIND ----------------- //
// 1- BIND is somewhat similar to  CALL

const qatar = {
  companyName: "Qatar",
  iataCode: "QAT",
  bookings: [],
};

bookInfo = airIndia.book; // 'bookInfo' is set equal to "airIndia's" method "book"

const bookQatar = bookInfo.bind(qatar); // 'bookInfo' function has been binded to "qatar" and stored in the variable "bookQatar". so, "bookQatar" is now a method of "qatar"

//now we call the 'bookQatar' method of 'qatar'
bookQatar(2901, "Samarth Negi");

// In "BIND", we can also specify default parameters for the method
const bookQAT23 = bookInfo.bind(qatar, 23); //here we have set the default value of "flightNum" to 23
bookQAT23("Rajdeep Bhasin"); // argument for "flightNum" wasnt entered. so default value 23 will be passed

// Event Listeners and BIND

airIndia.numOfPlanes = 300;
airIndia.addPlane = function () {
  this.numOfPlanes++;
  // console.log(this.numOfPlanes);
};

const addPlaneBtn = document.querySelector("#addNewPlane");

// addPlaneBtn.addEventListener('click', airIndia.addPlane); //-- in this case, the this in "addPlane" would point to the "event listener"

//-- we use bind to solve the above problem
addPlaneBtn.addEventListener("click", airIndia.addPlane.bind(airIndia));

//-- Partial Functioning
//- we can use bind to preset a "parameter's value" in a function
const billAfterTaxes = (taxRate, billValue) => {
  return billValue + taxRate * billValue;
};

// in the above function, we can preset the value of the 1st parameter "taxRate"
const billAfterTaxesIndia = billAfterTaxes.bind(null, 0.23); //we used "null" because we are not binding to any object. the "this" keyword wont point to anything as functions return "undefined" for "this".

billAfterTaxesIndia(100); //0.23 taxRate is already defined with bind

// ----------------------------- IMMEDIATELY INVOKED FUNCTION EXPRESSION ------------------------------ //

// (function(){
//     console.log('This is an IIFE. It is only executed once');
// }());

// 1- IIFE have their own local scope like regular functions

// ----- Arrow IIFE ------- //
// (() => console.log('This is an arrow IIFE')) ();

// ------------------------------------------ WORKING WITH ARRAYS ---------------------------------------- //

// --- arrays somehwat work like strings. because strings are destructured to arrays in the javascript engine

// ------------ SLICE ---------------- //
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
letters.slice(2); //extract elements from the 2 index element
// slice(n,m); //extract elements from 'n' to 'm-1'
letters.slice(2, 4); //extract 2nd index and 3rd index element
letters.slice(-1); //extract the last element
letters.slice(-2); //extract last 2 elements
letters.slice(1, -2); //extract element from 1st index and exclude last 2 elements
letters.slice(); //create a shallow copy of an array

// "slice" is generally used when we have to apply multiple methods together

// -------------- SPLICE ------------- //

// "splice" method works like "slice" but it edits our original array
const letters2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const remainingOfletters2 = letters2.splice(2); //elements starting from 2nd index are extracted and removed from the array
remainingOfletters2.splice(-1); //remove the last element
remainingOfletters2.splice(1, 2); // 1st index to 2nd index elements are removed

// ---------- REVERSE ----------- //
const wrongOrder = ["g", "f", "e", "d", "c", "b", "a"];
wrongOrder.reverse(); // 'reverse' mutates the array. means it overwrites our original array

// ---------- JOIN ------------- //
const randomArr = ["t", "u", "s", "h", "a", "r"];
const randomArrJoined = randomArr.join("");

// ------------------------- forEach -------------------------- //
const movements = [
  100, 1200, -500, 2000, 3000, -2500, -1000, 4000, 5000, -4500, 2000, -1000,
];
let totalBalance = 0;
for (const movement of movements) {
  totalBalance += movement;
}
// console.log(totalBalance);

// "forEach" calls a callback function. we arent calling it, "forEach" is //
let amountDeposited = 0;
let amountWithdrawn = 0;
movements.forEach(function (movement) {
  if (movement > 0) {
    // console.log(`+Rs${movement} deposited`);
    amountDeposited += movement;
  } else {
    // console.log(`-Rs${Math.abs(movement)} withdrawn`);
    amountWithdrawn += movement;
  }
});
// "forEach" parameter sequence
// movements.forEach(currentElement, index, array){} //we should always pass the parameters in this exact sequence. 1-"currentElement", 2-"index", 3-"array". name of parameter does not matter. it can be anything

let depositedAmountListArr = [];
let withdrawnAmountListArr = [];
movements.forEach(function (movement, i, movementsArr) {
  if (movement > 0) {
    const depositedAmount = `Rs ${movement}/- credited`;
    depositedAmountListArr.push(depositedAmount);
  } else {
    const withdrawnAmount = `Rs ${Math.abs(movement)}/- withdrawn`;
    withdrawnAmountListArr.push(withdrawnAmount);
  }
});

// console.log(`---------Deposited Amounts-------`);
for (const [i, am] of depositedAmountListArr.entries()) {
  // console.log(`${i+1}: ${am}`);
}

// console.log(`\n---------Withdrawn Amounts-------`);
for (const [i, am] of withdrawnAmountListArr.entries()) {
  // console.log(`${i+1}: ${am}`);
}

// --------------- FOREACH IN MAPS & SETS ----------------- //
const myFavItems = new Map([
  ["bike", "Dominar400"],
  ["laptop", "Acer Triton 300"],
  ["mobile", "Asus ROG Phone 5"],
  ["sport", "Volleyball"],
  ["language", "Javascript"],
]);

myFavItems.forEach(function (value, key, map) {
  const line = `my favorite ${key} is ${value}`;
});

const games = new Set([
  "Total Overdose",
  "Freedom Fighter",
  "FIFA 2007",
  "Smackdown vs Raw",
  "Max Payne 2",
]);
const gamesallValues = games.values();

games.forEach(function (elem, _, set) {
  //as sets dont have "keys", keys argument has '_'
});

// ------------------------------------ MAP, FILTER & REDUCE ----------------------------------------------- //

// ----------------------------- MAP ---------------------------------- //
// 1- "MAP" helps us to perform operation on each array element and then it gives us a new array of operated elements. this is unlike "forEach" which gives us the list of returned elements
// 2- Array returned from "map" is of the same length as the array which is iterated with "map"
// 3- "map" is used when we want a "new array" from an "old array"

const rupees = [2000, 1400, 2500, 3400, 460, 320, 1040, 5200];
const rupeeToDollarRate = 72.83;

const rupeesIntoUSD = rupees.map(function (rupee) {
  //"map" will give us a new array from the "rupees" array
  return rupee / rupeeToDollarRate;
});

// NOTE - A function can have 2 "return" statments. suppose in if-else statements

// in "map" too, we can pass 1- "current element", 2-"index num" and 3-"array" as parameters, just like "forEach"

// practicing "MAP"
const account1 = {
  owner: "Tushar Ghildiyal",
  pin: 2109,
  transactions: [
    8000, 19000, -7000, 3200, -11000, 34000, -14000, 18750, -11990, +2100,
  ],
  days: [55, 54, 51, 48, 41, 30, 18, 12, 8],
  interestRate: 6.5,
};

const account2 = {
  owner: "Piyush Jakhmola",
  pin: 1092,
  transactions: [
    1500, 3500, 7900, -5000, -2000, 14550, -1100, -1190, 24900, -14500,
  ],
  interestRate: 8.6,
};

const account3 = {
  owner: "Taarak Mehta",
  pin: 1181,
  transactions: [
    1200, 4500, 900, -5000, -2000, 18550, -11000, -1190, 30000, -14500,
  ],
  interestRate: 8.6,
};

const accounts = [account1, account2, account3];

//below function adds the 'username' property to the objects in 'accounts' array using 'map' and 'forEach'
const createAndAddUsername = function (accs) {
  accs.forEach(function (acc) {
    // 'forEach' method always returns something
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createAndAddUsername(accounts);

// ------------------------------------------- FILTER ----------------------------------------------------- //

// 1- FILTER loops through an array and gives us a new filtered array according to the condition(s) applied

let bankTransactions = [
  200, 1000, 5600, -1400, -500, 560, -2000, 10000, -5300, 4000, -2500,
];

const deposits = bankTransactions.filter(function (trans, i, transArr) {
  return trans > 0; //this will return us an array of positive transactions (deposits)
});

const withdrawls = bankTransactions.filter(function (trans, i, transArr) {
  return trans < 0; //this will return us an array of negative transactions (withdrawls)
});
const withdrawlsArrow = bankTransactions.filter((trans) => trans < 0); // 'trans<0' is returned.
// NOTE- if the arrow function is of just one line, we dont need to add '{ }' or the 'return' keyword

// advantage of using 'map, filter and reduce' over 'for loop' is that we can chain these methods together i.e, use them one after the other

// ------------------------------------------- REDUCE ------------------------------------------------------ //

// REDUCE method works for getting a single value out of an array.

// syntax of REDUCE - array.reduce(function(accumulator,current,i,arr){
//
// },'initial value of accumulator')

// 1- accumulator - it is the value with which you want to do the operations of the elements of the array
// 2- current - current element

bankTransactions = [
  200, 1000, 5600, -1400, -500, 560, -2000, 10000, -5300, 4000, -2500,
];

const balance = bankTransactions.reduce(function (acc, trans, i, arr) {
  // 'acc' - accumulator
  // console.log(`${i+1}: ${acc}`);
  return acc + trans;
}, 0); // 0 is the initial value of 'acc' (accumulator)

//using arrow function
const balance2 = bankTransactions.reduce((acc, cur) => acc + cur, 0);

//print the BIGGEST number in the array with  "REDUCE"
const biggestTransaction = (transArray) => {
  const biggestNumber = transArray.reduce(function (
    accumulator,
    currentElement
  ) {
    if (accumulator > currentElement) {
      //'accumulator' starts from 'array[0]' iterating the array. as long as 'accumulaor > currentElement' keeps happening during the iteration, 'accumulator' keeps returning
      return accumulator;
    } else {
      //if and when 'accumulator < currentElement' happens during the iteration, 'currentElement' from the 'else' is returned. now, when the iteration continues, returned 'currentElement' from 'else' condition becomes the new 'accumulator' as 'reduce' returns just one value and the 'if' condition starts executing again and this just like this the whole array is iterated
      return currentElement;
    }
  },
  transArray[0]);

  // "biggestNumber" returns a value and it is a function inside the "biggestTransition" function. so, we have to call "biggestNumber" once inside "biggestTransition" to get access to its return value. so we store "biggestNumber" inside "largestTrans" and finally returned "largestTrans".
  const largestTrans = biggestNumber;
  return largestTrans;
};

biggestTransaction(bankTransactions);

const numArr = [25, 250, 15, 450, 135, 600, 800, 1400, 1000, 800, 240];
const numArr2 = [100, 2489, 1200, 1000];

function findLargestNum(theArr) {
  let myValue = theArr[0];
  let biggestValue;
  for (let i = 0; i < theArr.length; i++) {
    if (myValue > theArr[i]) {
      biggestValue = myValue;
    } else {
      myValue = theArr[i];
    }
  }

  return biggestValue;
}
findLargestNum(numArr);
findLargestNum(numArr2);

// ----------------------------- CODING CHALLENGE #2 ------------------------------ //

let dogAges = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogAgeArr) {
  const humanAge = dogAgeArr.map((age, i, ageArr) => {
    //a new array will be returned acc. to the conditions used
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });

  const adultDogs = humanAge.filter((age, i, ageArr) => {
    // returns a new filtered array acc. to coondition used
    return age > 18; // an array of dogs with ages>18 will be returned
  });

  const averageAge = adultDogs.reduce((acc, age) => {
    return acc + age / adultDogs.length;
  }, 0);

  return averageAge;
};

calcAverageHumanAge(dogAges);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

// --------------------------------------- CHAINING METHODS ---------------------------------------------- //
let highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];

const tweakedHighScores = highScores
  .map((score) => score + 200)
  .filter((score) => score > 350)
  .reduce((acc, score, i, scoreArr) => acc + score / scoreArr.length, 0);

// 1- we should not overuse chaining as it can slow down the performance with really large arrays
// 2- we should try and look to make our code as compressed as possible
// 3- methods which mutate (edit) the original array arent adviced to be used. eg - splice, reverse

// --------------------------------------- FIND METHOD ---------------------------------------------------- //

// 1- FIND method loops through an array and retrieves the first element that matches the condition
// 2- FIND is like FILTER, but FIND retrieves just the first element while FILTER retrieves all the values
// 3- FIND retrieves just one element while FILTER retrieves all values and puts them in an array

highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];

const greaterThan200 = highScores.find((score) => score > 200); //retrieves the first score > 200

const findUser = accounts.find((acc) => acc.owner === "Tushar Ghildiyal"); //returns the first object of the search

function findCust(custName) {
  let cust;
  const searchedCustName = custName;
  for (const acc of accounts) {
    if (acc.owner === searchedCustName) {
      cust = acc;
    } else {
      cust = "user not found";
    }
  }
  return cust;
}

// console.log(findCust("Tushar Ghildiya"));

// ------------------------------------------ FINDINDEX ----------------------------------------------------//
// 1- 'findIndex' returns us the index of the element we want to extract
highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];

const indexOf264 = highScores.findIndex((score) => score === 113);

// -------------------------------------------- SOME ----------------------------------------------------- //
// 1- 'SOME' is an array method which accepts a condition and returns 'true' if "ONE OR MORE" elements in our array matches that condition. and if no element matches that condition, 'false' is returned
// 2- in simple terms, it means that true is returned if "any" element matches the condition
highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];

const isAnyHighScoreAbove200 = highScores.some((score) => score >= 200);

// -------------------------------------------- EVERY ----------------------------------------------------- //
// 1- 'EVERY' is an array method which passes a condition and returns true if "ALL" the elements of the array match that condition.

highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];
const areAllScoresAbove200 = highScores.every((score) => score >= 200); //false is returned
const areAllScoresAbove100 = highScores.every((score) => score >= 100); //true is returned

// ----------------------------------------- SORTING ARRAYS -------------------------------------------- //

// 1- the default 'sort()' method works only on strings, and not on numbers
// 2- for numbers, it just checks the first digit of the number and arranges accordingly

// so, to sort numbers' array, we use the below method
highScores = [200, 264, 183, 148, 113, 135, 150, 209, 102, 198, 143];

highScores.sort((a, b) => {
  // 'a' & 'b' represent all the two consecutive elements of the array, where 'a' appears before 'b' in the array

  if (a > b) return 1; // 'return 1' basically means (return>0). 'return 1' signifies that the order  of 'a' & 'b' will be switched because 'a>b'
  if (a < b) return -1; // 'return -1' basically means (return<0). 'return -1' signifies that the order  of 'a' & 'b' will stay the same because 'a<b'
});

//--------------- sorting in descending order
highScores.sort((a, b) => {
  // 'a' & 'b' represent all the two consecutive elements of the array, where 'a' appears before 'b' in the array

  if (a > b) return -1; // 'return -1' basically means (return<0). 'return -1' signifies that the order  of 'a' & 'b' will stay the same because 'a<b'
  if (a < b) return 1; // 'return 1' basically means (return>0). 'return 1' signifies that the order  of 'a' & 'b' will be switched because 'a>b'
});

// -------------- SORTING METHOD #2
let temperature = [98, 12, 20, -1, -273, 123, 45, 70, -19, -981, 450];

// ascending order
// 'a' appears before 'b' in the array
temperature.sort((a, b) => a - b); // 'a-b' is returned from the function. if 'a>b', it means 'a-b' is positive so 'a' is moved ahead of 'b'. if 'a<b', it means 'a-b' is negative so 'a' and 'b' remain at the same position

//descending order
temperature.sort((a, b) => b - a); // 'b-a' is returned from the function. if 'b>a', it means 'b-a' is positive so 'b' interchanges position with 'a'. if 'b<a', it means 'b-a' is negative so 'a' and 'b' remain at the same position

let transactionsAcc = [
  8000, 19000, -7000, 3200, -11000, 34000, -14000, 18750, -11990, 2100,
];

const copyArr = transactionsAcc.slice();
copyArr.sort((a, b) => a - b);

//how to create a toggle in a button
// let toggleSwitch = false;
// btn.addEventListener('click', function(e){
//     e.preventDefault();

//     someFunction(arg, !toggleSwitch); // arg set to true on the first click using '!toggleSwitch'
//     toggleSwitch = !toggleSwitch; // now before the callback function ends, we negate 'toggleSwitch', so now on the next click, 'toggleSwitch' will be set to true. and when the next callback function
// })

// ----------------------------------------- FILL METHOD -----------------------------------------------//
const newArr = new Array(7); //a new empty array containing 7 elements

newArr.fill(7); // 7 is pushed into each position of array
newArr.fill(7, 3); // fill 7 in the array and start filling from position 3
newArr.fill(7, 3, 5); // fill 7 and fill from index 3 to index 5 (excluding 5)

const aArr = Array.from({ length: 7 }, () => 1); //an array with 7 elements and every element being 1
const bArr = Array.from({ length: 5 }, (cur, i) => i + 1); //an array with 5 elements and every element being (i+1)

const allTransactionItems = Array.from(
  document.querySelectorAll(".transaction_item"),
  (trans) => Number(trans.textContent.replace("Rs ", "").replace(" /-", ""))
); // "document.querySelectorAll('.transaction_item')" gives us a node-list array. to make it a normal array, we use "Array.from()". so, 'allTransactionItems' is a proper array. in the second argument, we have used array methods on the array we have got

const sumOfAllTransactionItems = allTransactionItems.reduce(
  (el, con) => con + el,
  0
);

const totalSumElement = document.querySelector(".transaction-sum");
totalSumElement.insertAdjacentHTML(
  "afterbegin",
  `Total: ${sumOfAllTransactionItems}`
);

// ------------------------------- ARRAY METHODS PRACTICE ---------------------------------------------- //

let myTransactions = [
  8000, 19000, -7000, 3200, -11000, 34000, -14000, 18750, -11990, 2100, 12500,
  19600, 31590, -19000,
];

const totalTransactionsAbove10K = myTransactions
  .filter((trans) => trans > 10000)
  .reduce((count, trans) => (trans > 10000 ? count + 1 : count), 0);

// retrieve all deposits and withdrawls
// -------------method 1 (using 'obj.property' method of object destructuring)
const { depositsSum, withdrawlsSum } = myTransactions.reduce(
  (acc, trans) => {
    trans > 0 ? (acc.depositsSum += trans) : (acc.withdrawlsSum += trans);
    return acc;
  },
  { depositsSum: 0, withdrawlsSum: 0 }
); //here 'accumulator (acc)' is an object with properties 'depositsSum' & 'withdrawlsSum'. we can make changes to both properties and then return the final 'accumulator(acc)'

// -------------method 2 (using " obj['property'] " method of object destructuring)
const { sumOfDeposits, sumOfWithdrawls } = myTransactions.reduce(
  (acc, trans) => {
    acc[trans > 0 ? "sumOfDeposits" : "sumOfWithdrawls"] += trans;
    return acc;
  },
  { sumOfDeposits: 0, sumOfWithdrawls: 0 }
);

//we declare a variable outside a function (in the global scope) and then define it inside the function when we need to use the variable again in our code

// ----------------------- CAPITALISE A SENTENCE (using string and array methods) ----------------------- //
const capitaliseSentence = function (title) {
  const exceptions = [
    "am",
    "of",
    "a",
    "the",
    "and",
    "and",
    "or",
    "with",
    "as",
    "but",
    "for",
    "if",
    "nor",
    "or",
    "so",
    "yet",
    "on",
    "is",
  ];
  const capitaliseString = (str) => str[0].toUpperCase() + str.slice(1);

  const capitalisedTitle = title
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => (exceptions.includes(word) ? word : capitaliseString(word)))
    .join(" ");
  return capitaliseString(capitalisedTitle);
};

capitaliseSentence("why i am on top of the world");

// ------------------------------------- CODING CHALLENGE #4 ------------------------------------------ //
const dogsArr = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const addrecommendedFood = (arrDog) => {
  arrDog.forEach((dog) => {
    dog.recommendedFood = dog.weight ** 0.75 * 28;
  });
};
addrecommendedFood(dogsArr); //'recommendedFood' property is added to the objects

const analyseFoodIntake = (arrDog, owner) => {
  const ownersDog = arrDog.find((dog) => dog.owners.includes(owner));
  let foodIntakeVerdict;
  const ownersName =
    ownersDog?.owners.length > 1
      ? ownersDog?.owners.join(" and ")
      : ownersDog?.owners[0];
  if (ownersDog?.curFood > 1.1 * ownersDog?.recommendedFood) {
    foodIntakeVerdict = `${ownersName}'s dog is eating too much`;
  } else if (ownersDog?.curFood < 0.9 * ownersDog?.recommendedFood) {
    foodIntakeVerdict = `${ownersName}'s dog is not eating enough`;
  } else if (!ownersDog) {
    foodIntakeVerdict = `owner name not found`;
  }
  return foodIntakeVerdict;
};

analyseFoodIntake(dogsArr, "Sarah");
// console.log(dogsArr[0]);

const IsAnyExactRecommendedEatingDog = (arrDog) =>
  arrDog.some((dog) => dog.curFood === dog.recommendedFood);

const ownersOfdogsEatingExtra = dogsArr
  .filter((dog) => dog.curFood > 1.1 * dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

const ownersOfdogsEatingLess = dogsArr
  .filter((dog) => dog.curFood < 0.9 * dog.recommendedFood)
  .map((dog) => dog.owners)
  .flat();

const overeatingDogsVerdict = (ownersArr, howMuch) =>
  `${ownersArr.join(" and ")}'s dogs eat too ${howMuch}`;

overeatingDogsVerdict(ownersOfdogsEatingExtra, "much");
overeatingDogsVerdict(ownersOfdogsEatingLess, "less");

const dogArrSortedByRecFood = (dogArr) =>
  dogArr.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
// dogArrSortedByRecFood(dogsArr);

// ------------------------------ CONVERTING & CHECKING NUMBERS ---------------------------------------- //
// 1- a string can be converted to a number using '+'
const aStr = "12";
const aStrToNum = +"12"; //this is just like using "Number('12')"

Number.parseInt("30px"); //the string must start with a number in order to convert it using parseInt
parseInt("px30"); //NaN returned

parseFloat("2.5rem"); // 2.5 returned
parseInt("7.5rem"); // 7 returned
Number.isNaN(20); //false
Number.isNaN("20"); //false
Number.isNaN(+"20x"); //true bcz 20x is Nan

Number.isFinite(20); //true
Number.isFinite("20"); //false bcz '20' is a string, not a number
Number.isFinite(+"20"); //true bcz + converts '20' to a number

// NOTE - 'isFinite' is the go-to method to check for a number
//        'parseFloat' is the go-to method to read a number from a string

// convert a number to a string 
const numberToString = String(12)

// ------------------------------------ DATES -------------------------------------- //
const todaysDate = new Date();

// ---------------------------------------- SET-TIMEOUT ----------------------------------------------- //

const ingredientsArr = ["paneer", "jalapeno", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, _, ing3) => {
    console.log(`here is your pizza with ${ing1} and ${ing3}`);
  },
  3000,
  ...ingredientsArr
);

// -------------------- Cancelling a Timeout ------------------------- //
if (ingredientsArr.includes("spinach")) clearTimeout(pizzaTimer);

// ------------------------------------ SET Interval -------------------------------------- //
// 'setInterval' is a function which keeps running repeatedly in the set time interval

setInterval(() => {
  const dateToday = new Date();
  // console.log(dateToday);
}, 1000);

// ------------------------------------- DOM --------------------------------------------- //

// 1- elementSelector.prepend(elementToBeAdded) - "prepend" is used to add an element as the first child of another element
// 2- a particular element can only be at one place in the DOM at one time

const addNewPlaneBtn = document.querySelector("#addNewPlane");
// navDivision.prepend(shortMsg); ----added as first child of navDivision
// navDivision.append(shortMsg);  ----added as last child of navDivision
// navDivision will be appended as the last child because that was the last operation done on it

// to add an element at multiple places, we use 'cloneNode'
// navDiv.prepend(shortMsg);
// navDiv.append(shortMsg.cloneNode(true))

// ------------ append an element before and after another element
// navDiv.before(shortMsg);
// navDiv.after(shortMsg);

// ---- get access to the style of an element --------
getComputedStyle(addNewPlaneBtn);

//we can edit the style of an element using 'getComputedStyle()'
addNewPlaneBtn.style.height =
  parseFloat(getComputedStyle(addNewPlaneBtn).height) + 20 + "px";

//'document.documentElement' gives access to the root of html file
document.documentElement.style.setProperty("--color-primary", "cyan");

// -- to access custom attributes of elements
addNewPlaneBtn.getAttribute("designer");

// ------ Data Attributes
// html - <img src="" id="logo-img" alt="" data-version-number="3.0"/>

// to access the data attribute of above img
// document.querySelector('#logo-img').dataset.versionNumber;

// ----------------------------------- SMOOTH SCROLLING ------------------------------------------//
const scrollDownButton = document.querySelector("#scroll-to-section1");
const firstSection = document.querySelector("#first-section");

scrollDownButton.addEventListener("click", function (e) {
  e.preventDefault();

  // ------ Old School Way ----------- //
  const firstSectionCoords = firstSection.getBoundingClientRect();
  //'getBoundingClientRect().top' - current remaining height of the element from the 'top of viewport' to the 'bottom of element', or the remaining height of the element in the current viewport
  //'getBoundingClientRect().left' - current remaining width of the element from the 'left-edge of viewport' to the 'right edge of element', or the remaining height of the element in the current viewport

  // 'window.pageYOffset' - total height of the window scrolled from the top so far
  // 'window.pageXOffset' - total width of the window scrolled from the left so far

  // window.scrollTo(
  //     firstSectionCoords.left+ window.pageXOffset,
  //     firstSectionCoords.top + window.pageYOffset
  // )

  // window.scrollTo({
  //     left: firstSectionCoords.left + window.pageXOffset,
  //     top: firstSectionCoords.top + window.pageYOffset,
  //     behavior: 'smooth',
  // })

  // ----------- New Modern Way ------------- //
  firstSection.scrollIntoView({ behavior: "smooth" });
});

// ---- Height of the viewport - (document.documentElement.clientHeight)
// ---- width  of the viewport - (document.documentElement.clientWidth)

// ---------------------------------- Event ------------------------------------ //
// 1- Event Capturing - when the event captures the target element traversing through its parents starting from the document root
// 2- Target Phase - when the event has captured the target element and now the event's callback function is called
// 3 - Event Bubbling - when the event starts traversing back to the document root travelling through the parents element and parents of parent element until it reaches the document root
// 4 - so, if we call the same event listeners on the parents of the target element, we would get the same results for the parent elements as well
// 5 - 'capturing' is event propagating through the parent element from root to target element and 'bubbling' is its reverse

// IMP - If the same event listener and callback function is called on each child, its parent,  then its parent and so on. when that event will occur on the child, it would occur on its parents too on whom the same eventListener was called

// ------------------------------------------------------- //
//  <div class="collapse navbar-collapse" id="navbarNav">
//  <ul class="navbar-nav">
//  <li class="nav-item">
//    <a class="nav-link active" aria-current="page" href="#">Home</a>
//  </li>
//  <li class="nav-item">
//    <a class="nav-link" href="#">Features</a>
//  </li>
//  <li class="nav-item">
//    <a class="nav-link" href="#">Pricing</a>
//  </li>
//  <li class="nav-item">
//    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//  </li>
// </ul>
// </div>

const navbarNav = document.querySelector("#navbarNav"); // navbarNavUl's and navItems' parent
const navbarNavUl = document.querySelector(".navbar-nav"); //navitems's parent
const navItemNum1 = document.querySelector(".nav-item"); //child

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => {
  const rgb = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
    0,
    255
  )})`;
  return rgb;
};

navItemNum1.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(this);
  // this.style.backgroundColor = randomColor();
  // console.log('navitem1', e.target); // e.target - navItemNum1
  // console.log('navitem1 currentTarget', e.currentTarget); e.currentTarget - navItemNum1
});

navbarNavUl.addEventListener("click", function (e) {
  e.preventDefault();
  // this.style.backgroundColor = randomColor();
  // console.log('navbarUl', e.target); // e.target - navItemNum1
  // console.log('navitemUl currentTarget', e.currentTarget); //e.currentTarget - navbarNavUL
});

// 1- 'navItemNum1' is the child and 'navbarNavUl' and 'navbarNav' are its parent and grandparent
// 2- the same eventlistener and callback functn are called in all three of them
// 3- when the event on child 'navItemNum1' occurs, at the same time it also occurs on 'navbarNavUl' and 'navbarNav' due to bubbling
// 4- although the event is called on 'navItemNum1', it also occurs on 'navbarNavUl' and 'navbarNav' due to bubbling

const allNavItems = document.querySelectorAll(".nav-link");

allNavItems.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    // const id = this.getAttribute('href');
    // document.querySelector(id).scrollIntoView({behavior:'smooth'})
  });
});

// ------------------------------------- EVENT DELEGATION ------------------------------------------- //
// 1- the above event listener function can be tedious task if we have to assign in to many elements
// 2- so, we can attach the 'event listener' to the 'common parent' of the elements, so that we assign just one event-listener
// 3- hence, EVENT DELEGATION is more effective and efficient method

const parentNavDiv = document.querySelector(".nav-ul"); //common parent element

parentNavDiv.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link-a")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// -------------------------------- DOM Traversing ------------------------------------- //
const myInfoCard = document.querySelector("#my-info-card");

// ------ Going downwards ------- //
myInfoCard.querySelectorAll(".list-group-item"); //gives us a 'node-list'
myInfoCard.childNodes;
myInfoCard.children;
myInfoCard.firstElementChild.style.color = "green";
myInfoCard.lastElementChild.style.backgroundColor = "white";

// ------- Going upwards ------- //
myInfoCard.parentNode;
myInfoCard.parentElement;
myInfoCard.closest(".list-group-item");
myInfoCard.closest(".blue"); //'closest' selects the closest parent with the matching query
myInfoCard.previousElementSibling;
myInfoCard.nextElementSibling;
myInfoCard.parentElement.children; //access all the siblings

// -------------------------------- Tabbed Component -------------------------------------- //
const tabsContainer = document.querySelector(".tabs-container");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".info-para");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clickedButton = e.target.closest(".tab-btn"); //we are looking for the target whose closest parent has the class 'tab-btn' which is the class of the 'tabButtons' themselves, so we are actually looking for tabButtons only

  //guard clause
  if (!clickedButton) return; //if 'clickedButton' isnt clicked, immediately return the function

  //removing the classes from all elements before adding them
  tabButtons.forEach((tb) => tb.classList.remove("btn_active"));
  tabContent.forEach((cont) => (cont.style.display = "none"));

  clickedButton.classList.add("btn_active");
  const infopara = document.querySelector(
    `.info-para-${clickedButton.dataset.btn}`
  ); //selecting the 'tabcontent' paragraph based on the 'data-btn' attribute of the buttons
  infopara.style.display = "block";
});

// --------------------------------- INTERSECTION OBSERVER ------------------------------------- //
// 1- Intersection Observer is an API which observes the intersection of an element with the viewport of the device based on the given conditions
const navBarTop = document.querySelector("#navBar");
const topSection = document.querySelector("#top-section");
const secondSection = document.querySelector("#second-section");
const navBarHeight = navBarTop.getBoundingClientRect().height;

const navStickyTop = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBarTop.classList.add("sticky-top");
    } else {
      navBarTop.classList.remove("sticky-top");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2], //observation of intersection will occur when 0% and 20% (0.2) of the element will intersect with the viewport. in other words, when the 0% and 20% (0.2) of element will apppear on the viewport, observer will be called
  rootMargin: `-${navBarHeight}px`,
};

const navObserver = new IntersectionObserver(navStickyTop, obsOptions);
//  navObserver.observe(topSection)

// ------------------------------------------- Image Slider ---------------------------------------- //
const images = document.querySelectorAll(".slide-img");
const imagesArray = Array.from(images);

//asynchronously loading images
// document.addEventListener('DOMContentLoaded', function(){
//     imagesArray[0].setAttribute = ("src", "./../img/pexels-baskin-creative-studios-1766838.jpeg");
//     imagesArray[1].setAttribute = ("src", "./../img/pexels-roberto-shumski-1903702.jpg");
//     imagesArray[2].setAttribute = ("src", "./../img/pexels-stein-egil-liland-1933239.jpg");
//     imagesArray[3].setAttribute = ("src", "./../img/pexels-stephan-seeber-1054289.jpg");
// })

imagesArray.forEach((img) => {
  img.addEventListener("load", function () {
    img.classList.add("imageLoaded");
  });
});

const prevButton = document.querySelector(".back-arrow");
const nextButton = document.querySelector(".forward-arrow");
const slide = document.querySelector(".slide");
const backArrowLink = document.querySelector(".back-arrow");
const lastSlide = imagesArray.length;

let currentImage = 0;

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  currentImage++;
  if (currentImage === lastSlide) currentImage = 0;

  imagesArray.forEach((img, i) => {
    const transformNum = -100 * currentImage;
    img.style.transform = `translateX(${transformNum}%)`;
    img.style.transition = `transform 0.5s ease`; //we are resetting the entire style attribute on each click, we arent adding '-100%' to 'translateX'(we arent adding anything to style attribute, we are rewriting it from scratch on every click)
    //1- on first click, 'currentImage' becomes 1. each element moves -100%, so that index-1 element comes into viewport
    //2- on second click, 'currentImage' becomes 2. each element moves -200%, so that index-2 element comes into viewport
    // and so on...
    // console.log(currentImage);
  });
});

prevButton.addEventListener("click", function (e) {
  e.preventDefault();
  currentImage--; //currentImage was declared in the global scope, its value was mutated in the above eventlistener. so, now its mutated value is its current value and is in the global scope. so we can directly access it from the global scope
  if (currentImage < 0) {
    currentImage = 0;
  }

  imagesArray.forEach((img, i) => {
    const transformNum = -100 * currentImage;
    img.style.transform = `translateX(${transformNum}%)`;
    img.style.transition = `transform 0.5s ease`;
  });
});

// ----------------------------------- Object Oriented Programming ---------------------------------------- //
// 1- In JS, all 'objects' are linked to a certain 'prototype'
// 2- PROTOTYPAL INHERITANCE- 'prototype object' contains methods and properties that all the objects linked to that prototype can access and use
// 3- CONSTRUCTOR FUNCTION- Constructor Function is used to build 'objects' using 'functions'
// 4- Constructor functions cannot be declared with arrow functions as it doesnt have its own 'this'
// 5- as per convention, constructor functn's name start with capital letters
// 6- you should never create methods inside constructor function, because that would create multiple copies of the method as much as there are instances created
// 7- Instead, methods of constructor functions should be created using 'prototype' property

// Constructor function Example
const Person = function (firstName, birthYear) {
  // 'this' in constructor functn points to the object created at the function call
  //Instances
  this.firstName = firstName; //its a convention to set the property names same as the parameter names
  this.birthYear = birthYear;
};

//Constructor functions are always called with 'new' keyword
const thisIsMe = new Person("Tushar", 1996); //instance

// with the new keyword :-
// 1- a new empty object is created
// 2- when Constructor function is called, this keyword is set to this 'newly created object'
// 3- function automatically returns the 'newly created object'

const anshul = new Person("Anshul", 1996); //instance
const vikas = "vikas";

anshul instanceof Person; //true
vikas instanceof Person; //false

Person.prototype.calculateAge = function () {
  // console.log(2021-this.birthYear);
};

//all the objects created using the 'Person' constructor will have access to the methods of 'Person' due to 'prototypal inheritance'
thisIsMe.calculateAge();

thisIsMe.__proto__ === Person.prototype; //true
// 'Person.prototype' is not a prototype of 'Person'. Instead, it is the prototype of the objects that are created using the 'Person' constructor

Person.prototype.isPrototypeOf(thisIsMe); //true
Person.prototype.isPrototypeOf(Person); //false

Person.prototype.species = "homo sapiens";

thisIsMe.__proto__.__proto__; //object's prototype, which contains built in porperties of the object

// each array is an object of the 'Array' constructor function and has access to all Array's prototype's methods due to prototypal inheritance
arr1.__proto__ === Array.prototype; //true

//adding a method to the Array's prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

//using the new self defined method in an array
arr2.unique();

// ----------------------------------------- ES6 CLASSES --------------------------------------------- //
// a class is a type of function

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //methods of classes are in the prototype of the objects created with class
  //method declarations
  calcAge() {
    return `age: ${2021 - this.birthYear}`;
  }
}

const tusharGhildiyal = new PersonCl("Tushar Ghildiyal", 1996);
tusharGhildiyal.calcAge();

tusharGhildiyal.__proto__ === PersonCl.prototype; //true

//we can add methods to a class' prototype using '.prototype'
PersonCl.prototype.greetMessage = function () {
  return `Welcome ${this.firstName}`;
};

tusharGhildiyal.greetMessage();

// ------------------------------------- GETTERS & SETTERS ------------------------------------------- //

// ------------------ GET
// 1- 'get' helps us to define a method in an object and then use it as a 'property' later. it basically helps to get some data from the object properties

const duke390 = {
  brand: "KTM",
  model: "Duke 390",
  year: 2018,
  compliance: "BS-4",

  get bikeAge() {
    return 2021 - this.year;
  },
};

//now we can use the 'get bikeAge()' method as a property
duke390.bikeAge;

// ------------------- SET
// 1- 'set' helps us define a method to add something to the properties of a method.

const duke250 = {
  brand: "KTM",
  model: "Duke 250",
  year: 2017,
  compliance: "BS-3",
  perks: [],

  set addPerks(perk) {
    this.perks.push(perk);
  },
};

//now we can use 'set addPerks(perk)' to add something to 'perks' property. but we will add it like we define a property
duke250.addPerks = "Dual Channel ABS";

// ----------------------- GET and SET on CLASSES ----------------------------//
class FriendsSitcom {
  constructor(
    authorFullName,
    genre,
    yearBegin,
    episodeLength,
    favChar1,
    favChar2,
    charNames
  ) {
    this.authorFullName = authorFullName;
    this.genre = genre;
    this.yearBegin = yearBegin;
    this.charNames = charNames = [];
    this.episodeLength = episodeLength;
    this.favChar1 = favChar1;
    this.favChar2 = favChar2;
  }

  get showAge() {
    return 2021 - this.yearBegin;
  }

  set characterNames(charName) {
    this.charNames.push(...charName);
  }

  //setting a constructor property
  set authorFullName(name) {
    if (name.includes(" "))
      this._authorFullName =
        name; // new property '_authorFullName' defined bcz 'authorFullName' already exists in the constructor, so 'set' and 'constructor' will try to set authorFullName together which will give us a max call stack error
    else console.log("author name already full");
  }

  //to get 'authorFullName' back in the object
  get authorFullName() {
    return this._authorFullName;
  }
}

const friendsInfo = new FriendsSitcom(
  "Tushar Ghildiyal",
  "comedy",
  1994,
  21,
  "Chandler",
  "Ross"
);
friendsInfo.showAge;
friendsInfo.characterNames = [
  "Chandler",
  "Monica",
  "Joey",
  "Rachel",
  "Ross",
  "Phoebe",
];
// console.log(friendsInfo);

// ------------------------------------- OBJECT.CREATE ------------------------------------------- //
// First, we create an object and define its properties and methods
// 'Object.create' creates a new object and then attaches the object passed in 'Object.create()' as the 'prototype' to the newly created object

const bikeProto = {
  init(brandName, modelName, engineCapacity) {
    //we can name this method anything. 'init' is conventional
    this.brandName = brandName;
    this.modelName = modelName;
    this.engineCapacity = engineCapacity;
  },

  bikeInfo() {
    return `Brand: ${this.brandName}, Name: ${this.modelName}, engine: ${this.engineCapacity}`;
  },
};

const ns200 = Object.create(bikeProto); //'bikeProto' has been defined as 'prototype' for 'ns200'
ns200.__proto__ === bikeProto; //true

ns200.init("Bajaj", "NS200", 200);
ns200.bikeInfo();

// ------------------------------ CONSTRUCTOR FUNCTION INHERITANCE ---------------------------------------- //

const player = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

player.prototype.calcAge = function () {
  return 2021 - this.birthYear;
};

const volleyballPlayer = function (firstName, birthYear, sport, level) {
  player.call(this, firstName, birthYear); //'this' as an argument sets the this keyword in 'player' function as the 'this' keyword in this functn
  //'volleyballPlayer' now inherits the properties of 'player'
  this.sport = sport;
  this.level = level;
};

volleyballPlayer.prototype = Object.create(player.prototype); //'volleyballPlayer' now inherits the prototype of 'player'

//adding more methods to 'volleyballPlayer' proto
volleyballPlayer.prototype.introduction = function () {
  return `hi, my name is ${this.firstName}. i am ${
    2021 - this.birthYear
  } years old. i am a ${this.level} ${this.sport} player`;
};

const vatansh = new volleyballPlayer("Vatansh", 2002, "volleyball", "amateur");
vatansh.calcAge(); //calling "player's" method on "volleyballPlayer's" object

//inheriting the prototype of a function using 'Object.create()' sets the constructor of the function to the  constructor of the inherited function. so, we should fix that
volleyballPlayer.prototype.constructor = volleyballPlayer;
vatansh instanceof player; //true

// ------------------------------------ ES6 CLASSES INHERITANCE ---------------------------------------- //
class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
}

class StudentOfECE extends Student {}

const eceStudent1 = new StudentOfECE("Sandeep", "Sharma", 1994); // 'StudentOfECE' class is empty but it is a child class of 'Student' class, so it inherits all the properties and methods

class StudentOfCSE extends Student {
  constructor(firstName, lastName, birthYear, specialisation) {
    super(firstName, lastName, birthYear); //'super' line should always be first line of constructor
    this.specialisation = specialisation;
  }
}

// --------------------------------- Object.Create() Inheritance ------------------------------------- //

const humanProto = {
  init(fullName, birthYear, country) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.country = country;
  },

  placeOfWork() {
    if (this.country === "India") {
      return "Delhi";
    }
  },

  countryCode() {
    if (this.country === "India") {
      return "+91";
    }
  },
};

const studentProto = Object.create(humanProto); //"studentProto's" prototype is 'humanProto'

studentProto.init = function (fullName, birthYear, country, graduateYear) {
  humanProto.init.call(this, fullName, birthYear, country);
  this.graduateYear = graduateYear;
};
const atharv = Object.create(studentProto);
atharv.init("Atharv Waghle", 2008, "India", 2026);
atharv.placeOfWork();
atharv.countryCode();

// ----------------------------------- ASYNCHRONOUS JAVASCRIPT -------------------------------------------- //

// 1- javascript runs synchronously i.e., line by line.
// 2- in sync JS, some part of code can take time to execute and hence blocking the entire code from executing
// 3- async JS helps us in such cases.

// ----------------- Load Images Asynchronously
const greatImage = document.createElement("img");
greatImage.src = "./../img/pexels-baskin-creative-studios-1766838.jpeg"; // "img.src" attribute is asynchronous  i.e., image loads in the background while rest of the code keeps running
greatImage.addEventListener("load", function () {
  greatImage.classList.add("fadeIn");
});

// API - a piece of software that can be used by another piece of software, in order to allow applications to talk to each other
// Web API - applications running on a web server, that receieves request for data and sends back data as response.

// --------------------------------------- AJAX ----------------------------------------------- //
// 1- following way of ajax call happens in the background while the rest of the code keeps running

const getCountryData = function (country) {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  ajaxRequest.send();

  // now we need to register a callback function on the 'ajaxRequest' object for the 'load' event
  ajaxRequest.addEventListener("load", function () {
    // the 'this' inside this function points to the element on which the eventlistener is added to, i.e. 'ajaxRequest'
    this.responseText; //response text comes in json format.
    //we need to use 'json.parse()' to convert it to a JS object
    const [data] = JSON.parse(this.responseText); //parse the json object as a javascript object

    const currency =
      data.currencies[0].name === "United States dollar"
        ? "USD"
        : data.currencies[0].name;

    const card = `<div class="col-12 col-md-4 mb-3">
    <div class="card bg-dark mx-auto" style="width: 18rem;">
    <img src="${
      data.flag
    }" class="card-img-top" style="height:10rem; width:100%" />
    <div class="card-body text-white small-text">
      <p class="card-title mb-0">${data.name}</p>
      <p class="text-info">${data.region}</p>
      <p class="card-text">Capital: <span class="fw-bold" style="color:red">${
        data.capital
      }</span></p>
    </div>
    <ul class="list-group list-group-flush bg-dark text-white">
    <li class="list-group-item bg-dark text-white small-text">Language:<span class="fw-bold "> ${
      data.languages[0].name
    }</span></li>
      <li class="list-group-item bg-dark text-white small-text">Currency: <span class="fw-bold">${currency}(${
      data.currencies[0].symbol
    })</span></li>
      <li class="list-group-item bg-dark text-white small-text">Population: <span class="fw-bold">${(
        data.population / 1000000
      ).toFixed()} Million</span></li>
    </ul>
  </div>
  </div>`;

    // cardDiv.insertAdjacentHTML('beforeend', card);
  });
};

// getCountryData('france');
// getCountryData('usa');

// ---------------------------------------- PROMISE & FETCH API ------------------------------------------ //
// 1- we want to run the next ajax call only after the current one has finished running, so that the correct sequence of elements doesnt get disrupted
// 2- PROMISE - a promise is an object that is used as a placeholder for the future result of an asynchronous operation or a container for an asynchronous delieverd value or a container for a future value
// 3- we can chain promises for a sequence of async operations

// PROMISE PENDING - after fetch, when no data from the async task is available, the promise is pending
// ASYNC TASK SETTLED - when the async task has finished running, its called async task settled
// --after async task settled, two  outcomes are possible
// a) PROMISE FULFILLED - the value from async op is now available
// b) PROMISE REJECTED  - some error happened

const fourthSection = document.querySelector("#fourth-section");
const cardDiv = document.querySelector("#fourth-section .row");
const errorMsgDiv = document.querySelector("#errorMsgDiv span");
const loadCountriesBtn = document.querySelector("#load-countries-btn");

const renderCountry = function (nation) {
  const currency =
    nation.currencies[0].name === "United States dollar"
      ? "USD"
      : nation.currencies[0].name;

  const card = `<div class="col-12 col-md-4 mb-3">
    <div class="card bg-dark mx-auto" style="width:18rem;">
    <img src="${nation.flag}" class="card-img-top" style="height: 10rem;" />
    <div class="card-body text-white small-text">
      <p class="card-title mb-0">${nation.name}</p>
      <p class="" style="color:#AAAA9C">${nation.region}</p>
      <p class="card-text">Capital: <span class="text-danger ">${
        nation.capital
      }</span></p>
    </div>
    <ul class="list-group list-group-flush bg-dark text-white">
    <li class="list-group-item bg-dark text-white small-text">Language:<span class="" style="color: #20c997"> ${
      nation.languages[0].name
    }</span></li>
      <li class="list-group-item bg-dark text-white small-text">Currency: <span class="" style="color: #20c997">${currency} (${
    nation.currencies[0].symbol
  })</span></li>
      <li class="list-group-item bg-dark text-white small-text">Population: <span class="" style="color: #20c997">${(
        nation.population / 1000000
      ).toFixed()} Million</span></li>
    </ul>
  </div>
  </div>`;

  cardDiv.insertAdjacentHTML("beforeend", card);
};

const renderError = function (errorMsg) {
  errorMsgDiv.insertAdjacentText("afterbegin", errorMsg);
};
//'then' always returns a promise
const getCountryInfo = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`) // the 'fetch' function returns a promise which is resolved by using 'then' method
    //when the promise is fulfilled, we want to declare the resolve and reject callback functions using the 'then' method
    .then((response) => {
      //this 'then' is for if the promise is rejected
      if (!response.ok)
        //if country not found from the entered string. if '!res.ok' is true, the promise returned from this 'then' will be rejected with the following error

        throw new Error(`No Matching Country found : ${response.status}`); // the 'error' we throw here is caught in the 'catch' block below

      return response.json(); // we need to call the 'json()' method which is also an asynchronous method and returns another promise, which we resolve it in the next 'then'
    })
    .then((data) => {
      // this 'then' is for if the promise is resolved
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour)
        throw new Error(`No Neighbour Country found : ${response.status}`); // the 'error' we throw here is caught in the 'catch' block below

      //below 'fetch' is an example of chaining promises. we are inside the fulfilling of one promise and we are returning another promise with 'fetch'

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`); //returning the fetching of first neighbour country of the country as a promise
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      // we have declared a callback function for the errors (promise rejection). so, there will be no 'uncaught error' displayed in the console as we have caught those errors in this callback functn
      console.error(err);
      cardDiv.style.display = "none";
      renderError(err.message);
    });
};

loadCountriesBtn.addEventListener("click", function (e) {
  // getCountryInfo('serbia');
  // getCountryInfo('usa');
  // getCountryInfo('france');
  //  getCountryInfo('ahjaoknao');
});

// ------------------------------- Building A Simple Promise --------------------------------------- //
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery Drawing is happening");

  setTimeout(function () {
    if (Math.random >= 0.5) {
      resolve("Congrats. You won !");
    } else {
      reject(new Error("Sorry. Better Luck Next Time"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); // the error defined in 'reject' above is caught here

// --- Promisifying setTimeout

// ------------------------------------ THE EVENT LOOP ----------------------------------- //

// CALLBACKS - functions attached with the web API methods. eg - eventlisteners, timers, DOM, fetch. callbacks have their own queue of execution called callbacks queue
// MICROTASKS - callback functions of the promises ie, callback functns in the 'then' method are called microtasks. they are stored in a different queue called microtasks queue. the microtasks queue is given priority over callback queue at time of execution

// -- EVENT PRIORITY LIST --
// 1- Global execution context
// 2- Microtasks queue
// 3- callbacks queue

// microtasks are run before all the other callbacks

// ------------------------------------------- ASYNC/AWAIT --------------------------------------------- //
// 1- 'async/await' function runs in the background while performing the code thats inside of it
// 2- when the 'async/await' function is done, it automatically returns a promise.
// 3- 'await' is used when we want a result of a promise. 'await' stops the background code until the promise is fulfilled
// 4- 'async' functn stoppping the execution is not a problem because 'async' func runs in the background, therefore it doesnt block the main thread of execution
// 5- 'await' waits for the promise to be fulfilled and all of this happens in the background due to 'async'. our main execution thread still keeps running in the foreground
// 6- we use 'await' with the asynchronous functions

const fetchCountryInfo = async function (country) {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);

    if (!res.ok)
      //if country not found from the entered string.
      throw new Error(`No Matching Country found : ${res.status}`);

    const resData = await res.json();

    const countryInfo = renderCountry(resData[0]);

    const neighbour = resData[0].borders[0];

    const neighbourCountryRes = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    ); //returning the fetching of first neighbour country of the country as a promise

    const neighbourCountryData = await neighbourCountryRes.json();

    return resData;
  } catch (err) {
    console.error(err);
    cardDiv.style.display = "none";
    renderError(err.message);

    //returning the rejected promise (error) of the async functn
    throw err;
  }
};

loadCountriesBtn.addEventListener(
  "click",
  function (e) {
    fetchCountryInfo("france");
    //  getCountryInfo('ahjaoknao');
  },
  { once: true }
);

// an async functn always returns a promise
const countrysInfoRes = fetchCountryInfo("france"); //this will be a pending promise as 'fetchCountryInfo' is an async functn

//so we need to resolve the promise
// we'll resolve it using async await and IIFE

(async function () {
  try {
    const countrysInfoRes = await fetchCountryInfo("portugal"); //this will be a pending promise as 'fetchCountryInfo' is an async functn
    // console.log(countrysInfoRes[0]);
  } catch (err) {
    console.error(err.message);
  }
  // console.log('finished loading countries'); //this will always be executed, no matter what
})();

// ---------------------------------- PROMISES IN PARALLEL --------------------------------------- //

const getJSON = async function (url, errorMsg = "Something went wrong") {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${errorMsg} : ${response.status}`);
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error(err.message);
  }
};

// async functn always returns a promise. so we need to fulfill it
const fetchedData = getJSON(`https://restcountries.eu/rest/v2/name/france`); //JS has no way to determine what value to return because we are in the foreground (global scope) while async functions run in the background

fetchedData.then((data) => data[0].population);

const loadCountryPopulation = async function (c1, c2, c3) {
  try {
    const [[data1], [data2], [data3]] = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    //above 3 promises dont depend on each other, so they dont need to 'wait' for each other's exec. //
    //thats why they are executed together
    return [data1.population, data2.population, data3.population];
  } catch (err) {
    console.error(err);
  }
};

loadCountryPopulation("france", "poland", "serbia").then((data) => data);

// NOTE- we should always run those promises together that dont depend on each other

// ------------------------------------- MODERN JS DEVELOPMENT ---------------------------------------- //

// MODULE - Reusable piece of code that encapsulates implementation details
// PUBLIC API -  with 'export' , we can export values out of a module and whenever we export out of a module, its called a 'public API'
// DEPENDENCIES - when we import something from a module, that module is called a 'dependency'

// ----------------------------------- IMPORT EXPORT IN MODULES ------------------------------------------- //

// Importing Module
// import { addToCart,
//     totalPrice as price,
//     totalQuantityOfItems as quantity } from "./exportModule.js";

// import everyting from a file
// import * as ShoppingCart from "./exportModule.js"

//imported file 'modules2.js' will be executed first
// console.log('Importing Module');

//calling the imported function
// addToCart(2, '"iphone 12 pro"');
// ShoppingCart.totalPrice;

// const finalBill = price * quantity;

//we can import the 'default unnamed' export with any name we want
// import priceCalc from './exportModule.js';
// priceCalc(20);

// in practice, we should never import 'named' and 'default unnamed' exports together

// import {cart} from './exportModule.js';
// console.log(cart); //cart array has been imported and all the changes made to cart will be reflected in the import
// thats because imports are not copies of the exports. imports and exports are live connections. they point to the same place in memory

// -- TO INSTALL LODASH - 'npm install lodash-es'

// import cloneDeep from "./../node_modules/lodash-es/cloneDeep.js"; //importing 'cloneDeep' from 'Lodash'
// import cloneDeep from "lodash-es"; //we dont need to specify the path of 'lodash-es' now bcz parcel will automatically do that for us

//cloneDeep helps us to create a 'deep clone' of an object ie a true clone of an object
// whatever changes we'll make to the original obj will not be made to this clone
const myAwesomeLaptop = {
  ram: "8GB",
  storage: "1TB SSD",
  processor: "10th gen intel i5",
  hasBacklitKeyboard: false,
  hasGraphicCard: true,
};

// const cloneOfMyLaptop = cloneDeep(myAwesomeLaptop); //deep clone of 'myAwesomeLaptop' created
//lets make changes to 'myAwesomeLaptop'
myAwesomeLaptop.hasBacklitKeyboard = true;
myAwesomeLaptop.hasGraphicCard = false;
myAwesomeLaptop.processor = "apple M1 processor";

// the above changes are not made to the clone object

// --- NOTE ---
// 1- while moving/copying our files to a new location, we should never move/copy the 'node_modules' folder cause it is too huge
// 2- to install all the dependencies in the new location, copy 'package.json' file there and type 'npm install'. this would automatically install all the dependencies which are in the 'package.json' file at the new location

// DEV DEPENDENCY - A Dev Dependency is like a tool that we need to build our application. its not a dependency that we actually include in our code
// Dev Dependencies are installed using the postfix '--save-dev'

// -- INSTALL PARCEL - 'npm i parcel --save-dev'

// integrate parcel in the project - 'npx parcel index.html'

//add this to the 'package.json' to build and run 'parcel'
// "scripts": {
//     "start" : "parcel index.html",
//     "build" : "parcel build index.html"
//   }

// now in the command line, we first need to type - 'npm run build' to build the package
// then we need to run - 'npm run start' to start our localhost

// HOT MODULE REPLACEMENT - following code prevents the page from reloading every time we save our file
// if(module.hot) {
//     module.hot.accept();
// }

// ----------------------------------- CONFIGURING BABEL --------------------------------------- //
// 'Parcel' already uses 'Babel' to transpile our code

// to enable Babel to make older browsers understand the newer features like 'promises' and 'array methods', we need to polyfill them

//Babel recommends using an external library to enable polyfilling
// 'core-js' is that library
// how to install - 'npm i core-js'

// import 'core-js/stable';

//Polyfilling async functions
// import 'regenerator-runtime/runtime'
