# Functional Programming

## Introduction - Functions as values
There are several ways we can write functions in JavaScript. Previously we have created functions using a function *declaration*. Here's an example:

```javascript
function alertMsg(msg)
{
  alert(msg)
}
alertMsg("Hello"); //Outputs 'Hello' in an alert box
```

This isn't the only way we can write a function. This is the same function, this time written as a function *expression*. The function is assigned to a variable. We also call this a function *literal*. Note, we call the function in exactly the same way.

```javascript
const alertMsg=function(msg)
{
  alert(msg)
}
alertMsg("Hello"); //Outputs 'Hello' in an alert box
```

Being able to use functions stored in variables allows us to do some interesting and useful things with functions. The two main ideas are:
* Passing functions as arguments
* Returning functions

## Passing functions as arguments (callbacks)
Have a look at the following example. *alertMsg* is a function literal. It is passed as an argument to the function *shoutMsg*.

```javascript

function shoutMsg(msg,callback)
{
  const upperCaseMsg = msg.toUpperCase();
  callback(upperCaseMsg);
}

const alertMsg=function(msg)
{
  alert(msg)
}

shoutMsg("Hello",alertMsg); //outputs 'HELLO' in an alert box
shoutMsg("Welcome",alertMsg); //outputs 'WELCOME' in an alert box

```

This can make our code more flexible. For example, if I wanted to perform a different action, I could pass a different function literal. In this example *consoleMsg*.

```javascript

function shoutMsg(msg,callback)
{
  const upperCaseMsg = msg.toUpperCase();
  callback(upperCaseMsg);
}

const alertMsg=function(msg)
{
  alert(msg)
}
const consoleMsg=function(msg)
{
  console.log(msg)
}

shoutMsg("Hello",alertMsg); //outputs 'HELLO' in an alert box
shoutMsg("Welcome",alertMsg); //outputs 'WELCOME' in an alert box
shoutMsg("Hello",consoleMsg); //outputs 'HELLO' in the console

```

A function that accepts another function as an argument (in this case shoutMsg) is known as a **higher order function**.

### Anonymous functions
Often we don't even bother to assign a function literal to a variable, instead we can create an anonymous function. Have a look at this example:

```javascript

function shoutMsg(msg,callback)
{
  const upperCaseMsg = msg.toUpperCase();
  callback(upperCaseMsg);
}

shoutMsg("Welcome",function(msg){
 alert(msg)
}); //outputs 'WELCOME' in an alert box

shoutMsg("Hello",function(msg){
 console.log(msg)
}); //outputs 'HELLO' in the console

```
The second argument passed to *shoutMsg* is still a function. However, it has no name and hasn't been assigned to a variable. Although they can affect the readablity of our code, anonymous functions are commonly used, so you should try to get use to the syntax.

## We have seen this previously
You probably weren't aware but we have been passing functions as arguments in quite a few of the examples we have looked at so far.

### Passing functions as arguments to array methods
One common use for this functional style of programming in JavaScript is data manipulation. Data is often structured as an array of objects. Often we will want to iterate (loop) over an array and do something with the data e.g. combine it, create DOM elements from it, filter it, search it, sort it etc. Doing this is in a functional way often results in cleaner, neater code that is easier to modify and re-use.

### The Array.forEach() method

We have used *forEach* to iterate over an array of objects. Here's an example:

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];
countries.forEach(function(country){
 console.log(`${country.name}`);
})
```
The function:

```javascript
function(country){
 console.log(`${country.name}`);
}
```
Is applied to each element of the array in turn. We could use a named function literal instead e.g.

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const displayName = function(country){
  console.log(`${country.name}`);
}

countries.forEach(displayName)
```


### The Array.map() method
Arrays also have a *map* method. Like *forEach* it calls a function once for each element in the array. The difference is that it creates a new array built from the results from each of the function calls. *map* is often used when we want to create a new data structure from a source data structure. For example, if we were only interested in conitnents and not countries we could build a new array of continents. Here's an example:

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const continents = countries.map(function(country){
	return country.continent
})
console.log(continents); //(3) ["Europe", "Europe", "N. America"]
```

### The Array.reduce() method
The *reduce* method performs aggregation, it produces a single value from an array. The following example is pointless (there is a join method that does this for us) but it is an easy example to understand.

```javascript
const words=["Hello","world","JavaScript","HTML","CSS","Huddersfield"];

const msg=words.reduce(function(previous,current){
    return previous+","+current;
})

console.log(msg); //Hello,world,JavaScript,HTML,CSS,Huddersfield
```

The return value from the function becomes the previous value for the next function call.
* So in the first call, *previous* has a value of 'Hello' and *current* a value of 'world'. A value of 'Hello,world' is returned.
* In the second function call, *previous* has a value of 'Hello,world' and *current* a value of 'JavaScript'. The returned value is 'Hello,world,JavaScript'.
* We continue like this for all array elements and return a final single value, 'Hello,world,JavaScript,HTML,CSS,Huddersfield'.

Here's another example of *reduce*. This example finds the country with the highest population.

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

const highestPopCountry = countries.reduce(function(prev,next){
	if(next.population>prev.population){
			return next;
	}
	return prev;
})
console.log(highestPopCountry);
```
## Why bother?
There are a number reasons for learning functional programming and getting your head around the idea of passing functions as arguments.

### Functional programming techniques are widely used
Many libraries and frameworks make extensive use of function literals and passing functions as arguments. In this example an anonymous function is passed to the jQuery click() method.
```javascript
$(".btn").click(function( event ) {
      //do stuff when button is clicked
});
```

Here's some react code (react is a popular js view library). See how the *map* method is used to convert array data and how an anonymous function is used.

```javascript
let filmNodes = this.props.data.map(function (film) {
      return (
        <Film author={comment.author}>
          {film.desc}
        </ Film>
      );
    });
```

## Returning Functions
Alongside passing functions as arguments, the other key functional programming technique is returning functions. Here's an example.

```javascript

function getWelcomeFnc()
{
  return function()
  {
    console.log("Hello")
  }
}

const welcomeFnc=getWelcomeFnc();
welcomeFnc(); //Hello

```
This probably seems fairly pointless. The really great thing about returning functions is when we use closures.

## Closures
A closure takes place when a function is able to access a specific instance of a local variable. In this example that variable is *name*.

```javascript
function getWelcomeFnc(name)
{
  return function()
  {
    console.log("Hello "+name);
  }
}

const welcomeMatthew = getWelcomeFnc("Matthew");
const welcomeFred = getWelcomeFnc("Fred");
welcomeMatthew(); //Hello Matthew
welcomeFred(); //Hello Fred
```

Each time the *getWelcomeFnc* is called the variable *name* is assigned a different value, first 'Matthew' and then 'fred'. Importantly, each time we call *getWelcomeFnc* a new instance of the variable *name* is created i.e. we don't replace an existing value. The returned function has access to a specific instance of the variable *name*. This is 'Matthew' for *welcome Matthew* and 'Fred' for *welcome Fred*. Here's a really common use case for closures.

### Closures - Associating data with dynamically generated elements
In front-end web applications there is often a requirement to dynamically generate HTML elements from an array of data. Here's an example.

```javascript
const students=[
  {name:"Jane",course:"ICT", mark:67},
  {name:"Imran",course:"BACB", mark:42},
  {name:"Zofia",course:"BAIM", mark:72},
  {name:"Bill",course:"BAIM", mark:39}
]

function showMsg()
{
  console.log("You clicked on a student")
}

const studentsFragment = document.createDocumentFragment(); //create a fragment
students.forEach(function(student){
  const newLi=document.createElement("li"); //create a new <li>
  newLi.textContent=student.name; //add the student's name
  newLi.addEventListener("click",showMsg,false); // add an event listener
  studentsFragment.appendChild(newLi); //insert into the <ul> element
})

const stuList=document.querySelector("#stu-list"); //get hold of a <ul> element
stuList.appendChild(studentsFragment);

```

A new list item is added for each of the students. When a list element is clicked the console displays 'You clicked on a student'.

How would you go about associating data with a list item? i.e. the console shouldn't just display a generic message, it should tell us which student was clicked and their mark.

The answer is to use a closure:

```javascript
const students=[
  {name:"Jane",course:"ICT", mark:67},
  {name:"Imran",course:"BACB", mark:42},
  {name:"Zofia",course:"BAIM", mark:72},
  {name:"Bill",course:"BAIM", mark:39}
]

function getShowMsgFnc(student){
  return function(){
		console.log(student.name+" has a mark of "+student.mark); 
	}
}

const studentsFragment = document.createDocumentFragment(); //create a fragment
students.forEach(function(student){
  const newLi=document.createElement("li"); //create a new <li>
  newLi.textContent=student.name; //add the student's name
  newLi.addEventListener("click",getShowMsgFnc(student),false); // add an event listener
  studentsFragment.appendChild(newLi); //insert into the <ul> element
})

const stuList=document.querySelector("#stu-list"); //get hold of a <ul> element
stuList.appendChild(studentsFragment);
```

Now instead of attaching an event listener function directly we call *getShowMsgFnc* and pass the current student as an argument to this function. The returned function closes around this value so it can access the specific student when the list element is clicked.

## Further Reading / References
* Eloquent JavaScript - Higher Order Functions http://eloquentjavascript.net/05_higher_order.html
* Smashing Magazine - http://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/
* MDN is a good reference for array functions e.g. map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
