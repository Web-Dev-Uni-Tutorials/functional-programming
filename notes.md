# Functional Programming

## Introduction - Functions as values
There are several ways we can write functions in JavaScript. Previously we have created functions using a function *declaration*. Here's an example:

```javascript
function alertMsg(){
    alert("Well done you've passed");
}
alertMsg() //outputs 'Well done you've passed'
```

This isn't the only way we can write a function. This is the same function, this time written as a function *expression*. The function is assigned to a variable. We also call this a function *literal*. Note, we call the function in exactly the same way.

```javascript
var alertMsg=function()
{
    alert("Well done you've passed");
}
alertMsg() //outputs 'Well done you've passed'
```

Being able to use functions as values allows us to do some interesting and useful things with functions. The two main ideas are:
* Passing functions as arguments
* Returning functions

## Passing functions as arguments
Have a look at the following example. *alertMsg* is a function literal. it is passed as an argument to the function *hasPassed*.

```javascript

function hasPassed(action,mark)
{
    if(mark>=40)
    {
        action(); // calls the alertMsg function
    }
}

alertMsg=function()
{
    alert("Well done you've passed")
}


hasPassed(alertMsg,40) //outputs 'Well done you've passed'

```

This can make our code more flexible. For example, if I wanted to perform a different action, I could pass a different function literal. In this example *changeColour*

```javascript

function hasPassed(action,mark)
{
    if(mark>=40)
    {
        action(); //changes the page colour to red
    }
}

changeColour=function(){
    document.body.style.backgroundColor="red";
}


hasPassed(changeColour,40) //changes the background colour of the page to red

```

### Anonymous functions
Often we don't even bother to assign a function literal to a variable, instead we can create an anonymous function. Have a look at this example:

```javascript

function hasPassed(action,mark)
{
    if(mark>=40)
    {
        action();
    }
}

hasPassed(function(){
    alert("Well done you've passed")
},40)

```
The first argument passed to *hasPassed* is still a function. However, it has no name and hasn't been assigned to a variable. Although they can affect the readablity of our code, anonymous functions are commonly used, so you should try to get use to the syntax.

## Passing functions as arguments to array methods
One common use for this functional style of programming in JavaScript is data manipulation. Data is often structured as an array of objects. Often we will want to iterate (loop) over an array and do something with the data e.g. combine it, create DOM elements from it, filter it, search it, sort it etc. Doing this is in a functional way often results in cleaner, neater code that is easier to modify and re-use. 

### The Array.forEach() method
Currently, to loop over an array of objects we would use code like this:

```javascript

var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});

for(var i=0;i < students.length;i++)
{
    console.log(students[i].name);
}
```

Array objects provide a number of methods that allow us to program in a more functional style. We can re-write the above as:

```javascript
var showDetails=function(student)
{
    console.log(student.name);
}

var students=[]
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});

students.forEach(showDetails);

```

The *forEach* method calls a specified function (in this case *showDetails*) once for each element in the array. Writing *students.forEach(showDetails)* is really the equivalent of:

```javascript
showDetails(student[0]);
showDetails(student[1]);
showDetails(student[2]);

```

We can also use the *forEach* method with an anonymous function.

```javascript

var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});

students.forEach(function(student){
    console.log(student.name);
})


```

### The Array.map() method
Arrays also have a *map* method. Like *forEach* it calls a function once for each element in the array. The difference is that it creates a new array built from the results from each of the function calls. Here's an example:

```javascript

var numbers=[3,6,8,9];
var newNumbers=numbers.map(function(num){
    return num*2;
});

console.log(newNumbers); // [6,12,16,19]

```

*map* is often used when we want to create a new data structure from a source data structure. For example, if we were only interested in student marks and we didn't care which student had scored the mark. We could use *map* to generate an array that only features the student scores. 

```javascript

var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});

var marks=students.map(function(student){
    return student.mark;
})
console.log(marks);//67,42,72

```

### The Array.filter() method
The *filter* method also creates a new array. The array is built from elements of another array that pass a test. We write the test as a function that we pass to the *filter* method. 

```javascript
var words=["Hello","world","JavaScript","HTML","CSS","Huddersfield"];

var longWords=words.filter(function(word){
    if(word.length<7){
        return false;
    }
    return true;
});
console.log(longWords); //["JavaScript", "Huddersfield"]
```

Using the students example I could get a list of all the students that have passed.

```javascript
var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});
students.push({name:"Bill",course:"BAIM", mark:39});

var hasPassed=
var passingStudents=students.filter(function(student){
    if(student.mark<40){
        return false;
    }
    return true;
})
console.log(passingStudents); //Array of Jane, Imran and Zofia (no Bill)

```
### The Array.reduce() method
The *reduce* method performs aggregation, it produces a single value from an array. The following example is pointless (there is a join method that does this for us) but it is an easy example to understand.

```javascript
var words=["Hello","world","JavaScript","HTML","CSS","Huddersfield"];

var msg=words.reduce(function(previous,current){
    return previous+","+current;
})

console.log(msg); //Hello,world,JavaScript,HTML,CSS,Huddersfield
```

The return value from the function becomes the previous value for the next function call. 
* So in the first call, *previous* has a value of 'Hello' and *current* a value of 'world'. A value of 'Hello,world' is returned. 
* In the second function call, *previous* has a value of 'Hello,world' and *current* a value of 'JavaScript'. The returned value is 'Hello,world,JavaScript'. 
* We continue like this for all array elements and return a final single value, 'Hello,world,JavaScript,HTML,CSS,Huddersfield'.

Here's another example of *reduce*. This example finds the highest scoring student.

```javascript

var topStudent=students.reduce(function(a,b){
    if(b.mark>a.mark){
        return b;
    }
    return a;
})
console.log(topStudent.name+" has the highest mark."); // Zofia has the highest mark.

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

Here's some react code (react is a popular js view library). See how the *map* method is used to convert array data.

```javascript
var filmNodes = this.props.data.map(function (film) {
      return (
        <Film author={comment.author}>
          {film.desc}
        </ Film>
      );
    });
```

### It makes your code more maintainable
Look at the following example. It loops over an array of students objects and tells us which BAIM student got the highest mark. It is written in the familiar, *imperative* style. 
```javascript
var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:82});
students.push({name:"Zofia",course:"BAIM", mark:72});
students.push({name:"Bill",course:"BAIM", mark:39});

var topBAIMStudent;
for(var i=0;i < students.length;i++)
{
    if(students[i].course==="BAIM")
    {
        if(topBAIMStudent) 
        {
            if(students[i].mark>topBAIMStudent.mark)
            {
                topBAIMStudent=students[i];
            }
        }
        else
        {
            topBAIMStudent=students[i];
        }

    }
}
console.log(topBAIMStudent.name+" has the highest mark."); 
```

Now here's the same example but using a more functional style

```javascript

var highestMark=function(a,b){
    if(b.mark>a.mark)
    {
        return b;
    }
    return a;
}

var baim = function(student){
    if(student.course=="BAIM")
    {
        return true;
    }
    return false;
}

baimStudents=students.filter(baim)
topBAIMStudent=students.reduce(highestMark);
console.log(topBAIMStudent.name+" has the highest mark."); 

```
The more functional style has a number of advantages
* The code is easy to re-use. Each function performs a single task, we can combine these in many different ways. For example, if we wanted a list of all the BAIM students that had passed we could use the *hasPassed* function dmeonstrated previously.  
* Once you get used to it, functional programming code is often easier to read, no nested if statements inside for loops. 
* Functional code is easier to test. Each function is independent.

## Returning Functions
Alongside passing functions as arguments, the other key functional programmign technique is returning functions. Here's an example.

```javascript

function getShoutyFnc()
{
    return function()
    {
        console.log("HELLO!")
    }
}

var shouty=getShoutyFnc();
shouty(); //HELLO!

```
This probably seems fairly pointless. The really great thing about returning functions is when we use closures.

## Closures
A closure takes place when a function is able to access a specific instance of a local variable. In this example that variable is *msg*.

```javascript
function getShoutyFnc(msg)
{
    return function()
    {
        console.log(msg.toUpperCase()+"!")
    }
}

var shouty=getShoutyFnc("hello");
var anotherShouty=getShoutyFnc("Ay up");
anotherShouty() //AY UP!
shouty(); //HELLO!
```

Each time *getShoutyFnc* is called, the variable *msg* is assigned a different value, first 'hello' and then 'Ay up'. Importantly, each time we call *getShoutyFnc* a new instance of the variable *msg* is created i.e. we don't replace an existing value. The returned function has access to the specific instance of the variable *msg*. This is'hello' for *shouty* and 'Ay up' for *anotherShouty*. Here's a really common use case for closures.

### Closures - Associating data with dynamically generated elements
In a front-end web applications, there is often a requirement to dynamically generate HTML elements from an array of data. Here's an example.

```javascript

var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});
students.push({name:"Bill",course:"BAIM", mark:39});

function showMsg(){
    console.log("You clicked on a student")
}

var stuList=document.querySelector("#stuList"); //get hold of a <ul> element
for(var i=0;i < students.length;i++)
{
    var newLi=document.createElement("li"); //create a new <li>
    newLi.innerHTML=students[i].name; //add the student's name
    newLi.addEventListener("click",showMsg,false); // add an event listener
    stuList.appendChild(newLi); //insert into the <ul> element
}

```

A new list item is added for each of the students. When a list element is clicked the console displays 'You clicked on a student'.

How would you go about associating data with a list element i.e. the console shouldn't just display a generic message, it should tell us which student was clicked and their mark.

We might try something like this.

```javascript
var students=[];
students.push({name:"Jane",course:"ICT", mark:67});
students.push({name:"Imran",course:"BACB", mark:42});
students.push({name:"Zofia",course:"BAIM", mark:72});

function showMsg(){
    console.log(students[i].name+" has a mark of "+students[i].mark);
}

var stuList=document.querySelector("#stuList"); //get hold of a <ul> element
for(var i=0;i < students.length;i++)
{
    var newLi=document.createElement("li"); //create a new <li>
    newLi.innerHTML=students[i].name; //add the student's name
    newLi.addEventListener("click",showMsg,false); // add an event listener
    stuList.appendChild(newLi); //insert into the <ul> element
}


```
It doesn't work. The problem is by the time the user clicks on a student and the *showMsg* function is run, the variable *i* has a value of 3 and *students[i]* is undefined. The solution is a closure.

```javascript

function getShowMsgFnc(student){
    return function(){
        console.log(student.name+" has a mark of "+student.mark); //this works
    }
    
}

var stuList=document.querySelector("#stuList"); //get hold of a <ul> element
for(var i=0;i < students.length;i++)
{
    var newLi=document.createElement("li"); //create a new <li>
    newLi.innerHTML=students[i].name; //add the student's name
    newLi.addEventListener("click",getShowMsgFnc(students[i]),false); // add an event listener
    stuList.appendChild(newLi); //insert into the <ul> element
}

```

Now instead of attaching an event listener function directly we call *getShowMsg* and pass the current student as an argument to this function. The returned function closes around this value so it can access the specific student when the list element is clicked. Finally, so the code is in a more functional style, I've used a *forEach* loop instead. 

```javascript
function getShowMsgFnc(student){
    return function(){
        console.log(student.name+" has a mark of "+student.mark);
    }
    
}

var stuList=document.querySelector("#stuList"); //get hold of a <ul> element
students.forEach(function(student){
    var newLi=document.createElement("li"); //create a new <li>
    newLi.innerHTML=student.name; //add the student's name
    newLi.addEventListener("click",getShowMsgFnc(student),false); // add an event listener
    stuList.appendChild(newLi); //insert into the <ul> element
});
```

## Further Reading / References
* Eloquent JavaScript - Higher Order Functions http://eloquentjavascript.net/05_higher_order.html
* Smashing Magazine - http://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/
* MDN is a good reference for array functions e.g. map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

