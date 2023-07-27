console.log("work hard");
// outputs a wish
console.log("Have a good day!");
/* an important
reminder
for you */
console.log("Keep rocking!");

// simple operations
//5+2 will be calculated first
console.log((5 + 2) * 3);
/*Amazing 🚀!

Let's summarize what you've just learned:

💡calculations can be done directly in the console.log() function

💡multiplication and division have higher precedence than addition and subtraction have

💡you can control the precedence using parentheses*/

// VARABLES
// They are container for storing values
let zan;
zan = "james";
console.log(zan);
// Variables can change their value during the program. That's why they are called variables 😀!
var age = 17;
//after 1 year
age = 18;

console.log(age);
var person = "John Doe", carName = "Volvo", price = 200;
console.log(person, carName, price);

let balls = 100;
let boxes = 3;

console.log(balls % boxes);

/* Increment
Sometimes we need to repeatedly add 1 to a variable.

For example, when counting attempts in a game, or the number of clicks on a web page.

This can be done using the increment (++) operator:*/
var count = 0;
count++;
console.log(count);

/*Decrement
Similarly, the decrement (--) operator can be used to subtract 1 from a variable*/

var score = 100;
score--;
score--;
console.log(score);
var x = 5;
console.log(x++);
console.log(x);
// prefix Incre ment
var y = 10;
console.log(++y);
// Assignment operators
// JavaScript lets you write the code score = score + 10 more concisely, using the += operator.


// Check it out:
var score = 100;
score %= 9;
console.log(score);

var c = 8;
c++;
c /= 3;
console.log(c);
console.log("\t hey \t there");

// Template Literals
var Name = "John";
var text = `Welcome, ${Name}`;
console.log(text);

// Sample Output
// Country: Portugal, Capital: Lisbon
// var country = "portugal";
var capital = "paris";
var country = `portugal, ${capital}`;
console.log(country);

var country = "Portugal";
var capital = "Lisbon";
console.log(`country: ${country}, capital:${capital}`)

// // Concatenation
// // Not only can we add numbers, but we can also add strings, using something called
//  concatenation, which can be done on any two or more strings.


// The Boolean data types can only take the values true or false. remember
// Comparison Operators
// JavaScript has a number of comparison operators:

// equal to ==
// not equal to !=
// greater than >
// smaller than <
// greater or equal to >=
// smaller or equal to <=
var nick = "Diego";
nick += "Zan";
console.log(nick);

// Brief work on Function
function wordBlanks(Noun, Adjective, Verb, Adverb) {
  var result = "";
  result += "The " + Adjective + Noun + Verb + Adverb + " to the store ";
  return result;

}
console.log(wordBlanks(" Dog ", " Big ", " Ran ", " Quickly "));

// If statement
var player = 'John';
var points = 144;
var minPoints = 100;

if (points >= minPoints) {
  console.log(`Well done, ${player}!`);
}
var num = 12;
if (num > 5) {
  console.log("num is bigger than 5");
  if (num < 47) {
    console.log("Between 5 and 47");
  }
}

// The code inside the else statement will be executed only if the condition is false.

let stopLight = 'green';

if (stopLight == 'red') {
  console.log('Stop!');
} else if (stopLight == 'yellow') {
  console.log('Slow down.');
} else if (stopLight == 'green') {
  console.log('Go!');
} else {
  console.log('Unknown!');
}

let purchase = 2300;

if (purchase > 3000) {
  console.log('Discount: 20%');
} else if (purchase > 2000) {
  console.log('Discount: 10%');
} else {
  console.log('No discount');
}

var time = 15;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

var height = 30;
if (height >= 30) {
  console.log("Tallest");
} else if (height < 30) {
  console.log("Average");
} else {
  console.log("Short");
}

// // Break statement
// Imagine you have 10 boxes and there is a ball in one of them. 
// If you find it in the 5th box, you don't need to check the other 5 boxes, 
// right? After getting the ball you will just stop searching 
// because you've already gotten what you need.

// The break statement does the same thing in the switch statement.
// It stops the execution of other cases when there is a match and the program
// just goes out from the switch statement.

let choice = 2;

switch (choice) {
  case 1:
    console.log("Sports");
    break;
  case 2://match
    console.log("Business");
    break;//stop
  case 3:
    console.log("Technology");
    break;
}

// The default keyword
// when the is no match we use the default key word to enable the code run
let color = "yellow";

switch (color) {
  case "blue":
    console.log("This is blue.");
    break;
  case "red":
    console.log("This is red.");
    break;
  default:
    console.log("Color not found.");
}


var time = 15;

switch (time) {
  case 10:
    console.log("morning");
    break;
  case 20:
    console.log("Good day");
    break;
  case 18:
    console.log("Evening");
    break;

}

// // Ternary operator
// Conditional, or ternary, operators assign a value to a variable, based on some condition.

// This is what the syntax would look like:variable = (condition) ? value1: value2

var agee = 42;
let isAdult = (agee < 18) ? "Too young" : "Old enough";
console.log(isAdult);

let bill = 1800;
bill = (bill >= 1500) ? bill * 0.85 : bill;
console.log(bill);

// LOOPS
// Allows you run same code multiple times
// for (initializer; condition; final-expression) {
// The initializer is a variable, which increments the number of times the loop has run.
// The condition is used to stop the loop.
// The final expression is run each time after the loop's code has run. 
// It is usually used to increment the variable used in the condition.

for (i = 0; i <= 10; i++) {
  console.log(i);
}

for (i = 0; i < 20; i += 2) {
  console.log(i);
}

for (i = 1; i < 20; i += 2) {
  console.log(i);
}

var x = 0;
for (i = 0; i < 3; i++) {
  x += i;
}
console.log(x);

// For Loop
for (let i = 5; i >= 0; i -= 1) {
  console.log(`Bullets: ${i}`);
}

// The while loop
// The while loop is another way to create loops.

// It has the following syntax:

// while(condition) {
//code to run
// }
var i = 0
while (i <= 10) {
  console.log(i);
  i++;
}

var x = 50
while (x >= 0) {
  console.log(x);
  x -= 2
}

// // The do...while loop............
// This loop will execute the code block once,
// before checking if the condition is true, and
// then it will repeat the loop as long as the condition is true. 
var i = 5;
do {
  console.log(i);
  i++;
}
while (i < 5);

// Break statement
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// Break in while loop

var num = 1;
while (num <= 10) {
  if (num == 4) {
    break;
  }
  console.log(num);
  num++;
}

var num = 50;
while (num > 0) {
  if (num == 25) {
    break;
  }
  console.log(num);
  num--;
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 6; i++) {
  if (i == 2) {
    continue;
  }
  sum += i;
}
console.log(sum);

// Functions
// A function is a block of code designed to perform a particular task.

// For example, our app can have functions like login(), logout(), convert(), etc.

// The purpose of a function is to create it once and call
//  it multiple times when needed to perform particular tasks.

// function name() {
//   //code to be executed
// }

function login(user) {
  console.log("welcome, " + user);
}
login("zan");

function login(user) {
  console.log('Hi, ' + user);
}
var myUser = "Bob";
login(myUser);

function discount(purchase) {
  if (purchase >= 1500) {
    purchase *= 0.85;
  }
  console.log(purchase);
}

discount(1900);//discount
discount(1200);//no discount

function add(x, y) {
  return x + y;
}

var result = add(5, 6);
console.log(result);


// Object
var car = { Name: "spidder", colour: "Red", };
console.log(car.Name, car.colour);

// Object properties

var person = {
  name: "John",
  age: 31,
  favColor: "green",
  height: 183
};
var x = person.age;
console.log(person.favColor.length);

// object Method
// An object method is a property, that contains a function definition
// objectName.methodName()

// Object type using an object constructor funtion
function people(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}
var p1 = new people("John", 42, "green");
var p2 = new people("Amy", 21, "red");
console.log(p1.age);
console.log(p2.color);

function main() {
  //take flight number and its status
  var flightNumber = readLine();
  var flightStatus = readLine();

  var flight1 = new Flight(flightNumber, flightStatus);

  //assign a flight object to flight1 variable

  //output
  console.log('The flight ' + flight1.number + ' is ' + flight1.status)

};

function Flight(flightNumber, status) {
  //fix the constructor
  this.number = flightNumber;
  this.status = status;
};

// Methods
// Methods are functions that are stored as object properties. 

// Use the following syntax to create an object method:
// methodName = function() { code lines }
// Access an object method using the following syntax:
// objectName.methodName();


function family(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}

var p = new family("David", 21); 
p.changeName("John");
//Now p.name equals "John"
console.log(p.name);



function maiin() {
  var prodID = readLine();
  var price = parseInt(readLine(), 10);
  var discount = parseInt(readLine(), 10);

  var prod1 = new Product(prodID, price);
  console.log(prod1.prodID + " price: " + prod1.price);

  prod1.changePrice(discount);
  console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;

  this.changePrice = function (discount) {  
    //your code goes here
    this.discount = discount;
    this.price = price - ((discount / 100)) * price;

  };
}

function pipo(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2023 - this.age;
}
var p = new pipo("Zan", 21);
console.log(p.yearOfBirth());

function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print= data;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);


function data(){
  return this.name + ": " + this.number;
};
console.log(a.print());
console.log(b.print());

// Arrays
// Arrays store multiple values in a single variable. 
var courses = new Array("HTML", "CSS", "JS");
var course= courses[0];
courses[1] = "C++";
courses[2];
console.log(courses[2]);

// Another way to create an Array
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars[0]);
console.log(cars.length);

// Combining Arrays
var c1 = ["HTML", "CSS"]; 
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);

function game() {
  //take the number of passed levels
  var levels = parseInt(readLine(),10);
  var points = new Array();
  
  var count = 0;
  while(count<levels){
      var elem = parseInt(readLine(),10);
      points[count] = elem;
      count++;
  }
  
  var sum = 0;
  //calculate the sum of points
  for (var i =0; i<points.length; i++){
      sum+=points[i];
  }

  //output
  console.log(sum);
}

// Associative Arrays
// which is treated like an object

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
console.log(person["age"]);

// The Math Object
console.log(Math.PI);

var number = Math.sqrt(36);
console.log(number);

// var num =Math.ceil(Math.random() * 10);
// console.log(num);

// var n = prompt("Enter a number", "");
// var answer = Math.sqrt(n);
// alert("The square root of " + n + " is " + answer);

// setInterval
// The setInterval() method calls a function or evaluates 
// an expression at specified intervals (in milliseconds).

// It will continue calling the function until
// clearInterval() is called or the window is closed. 

// function myAlert() {
//   alert("Hi");
// }
// setInterval(myAlert, 3000);


// The Date Object
// Using new Date(), create a new date object with the current date and time

// var d =new Date();//stores the current date and time
// Others ways to create Date
// new Date(milliseconds)
// new Date(dateString)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

var d = new Date();
var hours = d.getHours();
console.log(hours);

// function printTime() {
//   var d = new Date();
//   var hours = d.getHours();
//   var mins = d.getMinutes();
//   var secs = d.getSeconds();
//   console.log(hours+":"+mins+":"+secs);
// }
// setInterval(printTime,1000);


// ***PROJECT1
// The program you are given takes year, month and day as input.
// Create a function that takes them as arguments and returns the
// corresponding day of the week.

// Sample Input
// 1993
// 7
// 12                  

// Sample Output
// Thursday

// level                     
// Hint: The given code creates a Date object from the parameters. 
// Use the getDay() method of the date object to get the index,
// // then use it in the given names array to return the name of the day.

// // SOLVED PROJECT1
// function main() {
//   var year = parseInt(readLine(), 10);
//   var month = parseInt(readLine(), 10);
//   var day = parseInt(readLine(), 10);

//   console.log(getWeekDay(year, month, day)); 
// }
 

// function getWeekDay(year, month, day) {
//   var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
//   "Thursday", "Friday", "Saturday"];
//   var d = new Date(year, month, day);
//    //complete the function
//   return names[d.getDay()];


// PROJECT TWO
// Store Manager 
// You are working on a Store Manager program, which stores the prices in an array.

// You need to add functionality to increase the prices by the given amount.

// The increase variable is taken from user input. 
// You need to increase all the prices in the given array by that
// amount and output to the console the resulting array.

// HINT
// Use a loop to iterate through the array and increase all items.

// Solved project two
// function main() {
//   var increase = parseInt(readLine(), 10);
//   var prices = [98.99, 15.2, 20, 1026];
//   //your code goes here
//   for(i=0; i<prices.length; i++){
//       prices[i]+=increase;
//       // console.log(i);
//   } console.log(prices);
  
// }

// // Date Format
// // const d = new Date();

// // const d =new Date(year,month,day,hours);
// var d = new Date();
// console.log(d);

// var months = ["January", "February", "March", "April", "May",
// "June", "July", "August", "September", "October", "November", "December"];

// var d = new Date();
// var month = months[d.getMonth()];
// console.log(month);

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
//  "Friday", "Saturday"];

// var d = new Date();
// var day = days[d.getDay()];
// console.log(day);

// var d = new Date();
// var hour= d.getHours();
// console.log(hour);

// // DOM
// The Document Object Model (DOM) is an essential tool
// for creating interactive, dynamic web pages using JavaScript.
// It allows developers to access and manipulate the contents 
// of a webpage in real time.

// The document Object
// document Object is the owner(or root) of all objecf on your Webpage

// So, if you want to access objects in an HTML page,
// you always start with accessing the document object.
// document.body.innerHTML = "Some text";

// Selecting Elements
// All HTML elements are objects. And as we know every object
// has properties and methods.
// The document object has methods that allow you to select the desired HTML element.
// These three methods are the most commonly used for selecting HTML elements:

// //finds element by id
// document.getElementById(id)

// //finds elements by class name
// document.getElementsByClassName(name)

// //finds elements by tag name
// document.getElementsByTagName(name)

// // Illustration
// var elem = document.getElementById("demo");
// elem.innerHTML = "Hello World!";//In here, the getElementById method is
// // used to select the element with id="demo" and change its content

// var arr = document.getElementsByClassName("demo");
// //accessing the second element
// arr[1].innerHTML = "Hi";

// Using getElementsByTagName
{/* <p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script> */}
// The script will result in the following HTML:

{/* <p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p> */}

// function setText() {
//   var a = document.getElementById("demo");
//    var arr = a.childNodes;
//    for(var x=0;x<arr.length;x++) {
//      arr[x].innerHTML = "new text"; 
//    }
//   }
// // calling the function with setTimeout to make sure the HTML is loaded
// // setTimeout(setText, 500);

// if (process.browser) {
// } else {
//     console.log("code is running in a Node.js environment");
// }

 
// if (typeof window !== 'undefined') {
//   // 👉️ can use document here
//   console.log('You are on the browser')

//   console.log(document.title)
//   console.log(document.getElementsById('demo'));
// }

// // CHANGING ATTRIBUTES
// <img id="myimg" src="orange.png" alt="" />
// <script>
// var el = document.getElementById("myimg");
// el.src = "apple.png";
// </script>

{/* <a href="http://www.example.com">Some link</a>
<script>
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";
</script> */}

// CHANGING STYLE
{/* <div id="demo" style="width:200px">some text</div>
<script>
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script> */}

// window.onload = function() {
//   //creating a new paragraph
//   var p = document.createElement("p");
//   var node = document.createTextNode("Some new text");
//   //adding the text to the paragraph
//   p.appendChild(node);

//   var div = document.getElementById("demo");
//   //adding the paragraph to the div
//   div.appendChild(p);
// };

// // Animations
// function show() {
//   alert("Hi there");
// }

// var images = [
//   "http://www.sololearn.com/uploads/slider/1.jpg", 
//   "http://www.sololearn.com/uploads/slider/2.jpg", 
//   "http://www.sololearn.com/uploads/slider/3.jpg"
//   ];
//   var num = 0;

// function next() {
//   var slider = document.getElementById("slider");
//   num++;
//   if(num >= images.length) {
//     num = 0;
//   }
//   slider.src = images[num];
//   }

// function prev() {
//   var slider = document.getElementById("slider");
//   num--;
//   if(num < 0) {
//     num = images.length-1;s
//   }
//   slider.src = images[num];
// }

// Form Validation
// function validate() {
//   var n1 = document.getElementById("num1");
//   var n2 = document.getElementById("num2");
//   if(n1.value != "" && n2.value != "") {
//     if(n1.value == n2.value) {
//       return true;
//     }
//   }
//   alert("The values should be equal and not blank");
//   return false;
// }



// ES6 Variable
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

varTest();
letTest();

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Template Literals in ES6
var Name = 'David';
var msg = 'Welcome ' + Name + '!';
console.log(msg);
// same code below could be written as:
var name = 'David';
var msg = `Welcome ${Name}!`;
console.log(msg);

var a = 8;
var b = 34;
var msg = `The sum is ${a+b}`;
console.log(msg);

// Loops in ECMAScript 6 
// For Loops...................used in List
var arr =[1,2,3];
for (let k=0; k<arr.length; k++){
  console.log(arr[k]);
}

// For in loop....................used in keys object
var obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
  console.log(v);
}

// For of loops................used in iterable object, also on strings
let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}

for (let ch of "Hello") {
  console.log(ch);
}

// Student who scored above 70
let scores = [68,95,54,84,77,75,63,74,69,80,71,63]

//your code goes here
var count = 0;
for (let pass of scores) {
    if (pass>=70){
       count++
    
    }
}
console.log(count);

// more on fuctions
function add(x, y) {
  var sum = x+y;  
  console.log(sum);
}
// The above function can be written as
const addd = (x, y) =>{
  var sum = x+y;
  console.log(sum);
}
addd(-3,5);
add(6,-7);

// Other ways of writing Function
// const greet = x => "Welcome " + x;//having one agument
// const x = () => alert("Hi"); //having no aguement

// Using for each method to write a function
var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});

const arrr = [2, 3, 7, 8];

arrr.forEach(v => {
  console.log(v * 2);
});

function test(a , b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5)); 

// using the arrow function to write the above
const teest = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(teest(5));

// ES6 on object
let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); 

// could also write an object as
var height = 5;
var health = 100;

var athlete = {
  height,
  health
}
console.log(athlete.health);

// Computed Property Names
// example 1
let prop = 'name';
var id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
console.log(user.name);
console.log(user.user_1234); 

// example 2
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a.foo1);
console.log(a.foo2); 
console.log(a.foo3); 

var param = 'size';
console.log(param.charAt(0).toUpperCase()+param.slice(1))
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + 
param.slice(1)]: 4
};
console.log(config.mobileSize);

// Joining two object using the assign()func
var person = {
  name: 'Jack',
  sex: 'male',
  age: '18'
};
var student = {
  age: 20,
  name:'Bob',
  xp: '2'
};
let newStudent = Object.assign({}, person, student);
console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

/* using assign() to create a duplicate object 
without creating a reference (mutating) to the base object.*/
var person = {
  name: 'Jack',
  age: 18
};

var newPerson = person; //  newPerson references person
newPerson.name = 'Bob'; 

console.log(person.name); // Bob
console.log(newPerson.name); // Bob
// the above code could also be written as to avoid mutation using Object.assign()

var person = {
  name: 'Jack',
  age: 18
};

var newPerson = Object.assign({}, person); 
newPerson.name = 'Bob'; 

console.log(person.name); // jack
console.log(newPerson.name); // Bob

// you can assign a value to an object property in the Object.assign() statement.
var person = {
  name: 'Jack',
  age: 18
};

var newPerson = Object.assign({}, person, {name: 'Bob'});

// Project on App Exercise
var basic = {
  ex1: 'PushUps: 20 times',
  ex2: 'Jumps: 20 times'
};
var advanced = {
  ex3: 'Squats: 30 times',
  ex4: 'Run: 2km'
};

//your code goes here
var total = Object.assign({}, basic, advanced);

for(let ex in total) {
  console.log(total[ex])
};

//  Array Destructuring in ES6 
// how to unpack the elements of an array into distinct variables: 
var arr = ['1', '2', '3'];
var [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

/*We can use also destructure an array returned by a function.
For example:*/
var a = () => {
  return [1, 3, 2];
};

var [one, , two] = a();
console.log(one);
console.log(two);

// more on destruction
var a, b, c = 4, d = 8;

[a, b = 6] = [2]; // a = 2, b = 6
console.log(a); 
console.log(b);

[c, d] = [d, c]; // c = 8, d = 4
console.log(c); // 8
console.log(d); // 4

let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John);

// Object Destructuring in ES6 
var obj = {h:100, s: true};
var {h, s} = obj;

console.log(h); // 100
console.log(s); // true

// Assigning without decleration
var a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});

console.log(a + b); // Hello Jack
// could rewrite the above as
var {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);

// You can also assign object to new variables name:
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); // Error
console.log(foo); // 42

// You can also assign defualt values to variables
var obj = {id: 42, name: "Jack"};

var {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20

// ES6 Rest Parameters 
function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) {//(arguments is an array-like 
    // object that contains all the arguments passed to a function).
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
var x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

// another way to write the above
function containsAll(arr, ...nums) {//...nums, which uses the rest parameter syntax 
  // to represent a variable number of arguments as an array.The three dot are called
  // the spread operator
  for (let num of nums) {
      if (arr.indexOf(num) === -1) {
          return false;
      }
  }
  return true;
}

var x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

// Project******** On Summary Calculator
function Add(a,b, ...rest){
  let total = a+b;
  for (let num of rest){
      total+=num;
  }
  return total;
}
// function Add(...input){.....could be solves as this
// let sum = 0;
// for (let i of input){
//   sum+=i;
// }
// return sum;
// }

console.log(Add(1,2,3));
console.log(Add(4,14,5,9,14));
console.log(Add(2,36));


function magic(...nums) {
  let sum = 0;
  nums.filter(n => n % 2 == 0).map(el => sum+= el);
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));

// The Spread Operator 
// This operator is similar to the Rest Parameter,
// but it has another purpose when used in objects or arrays or function calls (arguments).

// Spread in function calls
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

// The above code could be rewritten as:
const myfFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};
var args = [1, 2, 3];
myfFunction(...args, 4);


var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date)

// Spread in array literals 
var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);

// spread operator help us do the above easily
var newArr = ['Three', 'Four']; 
var arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);

// Spread in object literals 
const objj1 = { foo: 'bar', x: 42 };
const objj2 = { foo: 'baz', y: 5 };

const clonedObj = {...objj1}; // { foo: "bar", x: 42 }
const mergedObjj = {...objj1, ...objj2}; // { foo: "baz", x: 42, y: 5 }

// However, if you try to merge them you will not get the result you expected:
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({...objects});

let mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }

let nums = [3, 4, 5];
let all = [1, 2, ...nums, 6];
console.log(all[3]);
console.log(all);

// Classes in ES6 : A class uses the keyword class and contains a constructor method for initializing.

// For example:
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// A declared class can then be used to create multiple objects using the keyword new.
// For example:

var square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 

console.log(poster.height);

/*You can also define a class with a class expression, where the class can be 
named or unnamed.

A named class looks like:*/
var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// The unamed claass expression:
var Square = class  {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Class Methods in ES6:
// *Type 1= prototype method which is available to obj of the class
// For example:

class Recktangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
// console.log(calcArea);
// console.log(area);
var square = new Recktangle(5, 5);
console.log(square.area); // 25

/* Another type of method is the static method which cannot be called through a class
instance. Static methods are often used to create utility functions for an application.*/
// For example:
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
var p1 = new Point(7, 2);
var p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));

// Average score project
// function main() {
//   var exam1 = parseInt(readLine(), 10);
//   var exam2 = parseInt(readLine(), 10);
//   var exam3 = parseInt(readLine(), 10);
  
//   console.log(Exams.average(exam1,exam2,exam3));
  
// }
// class Exams{
//   //your code goes here
//   static average(exam1,exam2,exam3){
//       let scores=exam1+exam2+exam3;
//       let average = scores/3
//       return Math.round(average); 
// }
// }

// Inheritance in ES6
// using the extend keyword to form a child class, that inherit the methods and properties of a class 
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var dog = new Dog('Rex');
dog.speak();
dog.speak();

// Using super() to call the parent method
// Example below:
class Annimal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Doog extends Annimal {
  speak() {
    super.speak(); // Super
    console.log(this.name + ' barks.');
  }
}

var dog = new Doog('Rex');
dog.speak();
// Rex makes a noise.
// Rex barks.

// ES6 MAP
/*An Object is similar to Map but there are important differences 
that make using a Map preferable in certain cases:

1) The keys can be any type including functions, objects, and any primitive.

2) You can get the size of a Map.

3) You can directly iterate over Map.

4) Performance of the Map is better in scenarios involving frequent 
addition and removal of key/value pairs.*/

/*The size property returns the number of key/value pairs in a map.

For example:*/

var map = new Map([['k3', 'v1'], ['k4', 'v5'], ['k4', 'v6']]);

console.log(map.size); // 2

// More on maps
var map = new Map();

map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1

console.log(map.has('k2')); // true

for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);
 

// //Project on Employee map
// function main() {
//   var name = readLine();
//   var position = readLine();
//   let employees = new Map([
//   ["Richard", "Developer"],
//   ["Maria", "SEO Specialist"],
//   ["Tom", "Product Manager"],
//   ["David", "Accountant"],
//   ["Sophia", "HR Manager"]
//   ]);

//   //add the new pair to the map
//   employees.set(name, position);
//   for (var i of employees.entries()){
//       //your code for the output
//       console.log(i[0] + " : " + i[1]);
//   } 
// }

/* SET
A Set object can be used to hold unique values (no repetitions are allowed).

A value in a set can be anything (objects and primitive values). 

The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values.

The size property returns the number of distinct values in a set.

For example:*/
var set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size);

/*Methods

add(value) Adds a new element with the given value to the Set.

delete(value) Deletes a specified value from the set.

has(value) Returns true if a specified value exists in the set and false otherwise.

clear() Clears the set.

values() Returns an Iterator of values in the set.*/
// For example:
var set = new Set();

set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
  console.log(v);


/*ES6 Promises 
 

A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.

Consider this example:*/
setTimeout(function() {
  console.log("Work 1");
  setTimeout(function() {
      console.log("Work 2");
  }, 1000);
}, 1000);
console.log("End");

function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End");

// // ITERATORS AND GENARATORS
// Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.

// In the example below, we will see how we should implement it and how generator functions are used.

// Example:
let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
} 
console.log([...myIterableObj]);