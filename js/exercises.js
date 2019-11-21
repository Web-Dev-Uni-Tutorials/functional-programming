function hasPassed(mark,successCallback)
{
  if(mark>=40){
    successCallback()
  }
}

const alertMsg = function ()
{
  alert("Well done, you passed!");
}

hasPassed(50,alertMsg);


/*
1. This question is about passing functions as arguments. Run the above code, make sure you understand what is happening.
a) Write another function, call it consoleMsg. When called, consoleMsg() should simply display the message "Well done you've passed!" in the JavaScript console.
b) Pass consoleMsg as a callback to the function hasPassed.
c) Re-write the code so that the function is passed as an anonymous function.
d) Write another function domMsg. When called domMsg() should display the message "Well done you've passed!" in the div with an id of 'msg'. Test this works by passing domMsg as a callback to the function hasPassed.
d) Modify hasPassed so that it accepts three parameters a mark, a success callback function and a fail callback function. The success callback function should be called if the mark is 40 or above. The fail callback function should be called if the mark is less than 40. See the code below for an example that calls this new hasPassed function.
*/

// hasPassed(30,consoleMsg, failMsg); //failMsg will be called
// hasPassed(40,consoleMsg, failMsg); //consoleMsg will be called



/*
2. This question is about passing functions as arguments. Write a function called doItTwice. doItTwice should accept a single argument, another function. doItTwice should then call this function twice. Here's some example code that would call doItTwice()
*/

// doItTwice(consoleMsg); //outputs "Well done, you passed!" to the console twice



const films=[
  {title:"Jaws", year:1975, duration:124},
  {title:"Get Out", year:2017, duration:117},
  {title:"Winter's Bone", year:2010, duration:100},
  {title:"The Incredibles", year:2004, duration:115},
]

/*
3. This question is about passing functions as arguments.
a) Write a function called printInConsole. printInConsole should be declared as a function expression. printInConsole should accept a single argument (an array of films objects). printInConsole should display the title of each film in the console. You can uncomment the following line to test this works
*/

// printInConsole(films); // outputs Jaws, Get Out, Winter's Bone, The Incredibles in the console

/*
b) Write another function called printInDOM. printInDOM should be also declared as a function expression. printInDOM should accept a single argument (an array of films objects). printInDOM should display the title of each film in the HTML document (use the div element with the id of films). You can uncomment the following line to test this works.
*/

// printInDOM(films); // displays each film title in the HTML page


/*
c) Look at the following higher-order function. Write a line of code that will call this function. Pass your printInConsole function as an argument.
*/

function filterFilms(printFnc)
{
  const modernFilms = films.filter(function(film){
    if(film.year>=2000){
      return true;
    }
    return false;
  })
  printFnc(modernFilms);
}

/*
d) Call the function again but this time pass printInDOM as an argument
*/


/*
4. This question is about returning functions and closures. Look at the following code
*/

/*
const doubleIt=getMultiplyFunction(2);
const tripleIt=getMultiplyFunction(3);
doubleIt(10); // Outputs 2 x 10 = 20
tripleIt(10); // Outputs 3 x 10 = 30
doubleIt(2); // Outputs 2 x 2 = 4
*/

/*
4. Write the getMultiplyFunction. getMultiplyFunction will accept a single argument, a number (the multiplier), it should return a function. This returned function should also accept a single argument (also a number) and then multiply the two numbers and display the result in the console.
*/

/*
5. This question is about returning functions and closures. You should have an example from a previous question where you have looped over the array of film objects and displayed them in the HTML page.
a) Modify this example so that each film title in the page is clickable, i.e. listen for a click event on each film title. Create an event handler function (this should simply display the message "you clicked on a film" in the console) that will be called when any one of the film titles is clicked.
b) Modify this so that instead of displaying the simple message, details for the film are shown instead e.g. if the user clicks on Jaws, the console message should be 'Jaws was released in 1975'. To do this you will have to use a closure. Have a look on the notes for a similar example.
c) If this works, modify the code so that instead of displaying the film details in the console, the film details are displayed in the HTML page (use the div element film-info).
*/
