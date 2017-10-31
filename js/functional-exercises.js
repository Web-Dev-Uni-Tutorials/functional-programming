var consoleMsg=function(){
	console.log("Well done you've passed")
}

function hasPassed(action,mark)
{
    if(mark>=40)
    {
        action();
    }
}


/*
Q1. Look at the two functions above. Write a line of code that will call hasPassed() passing consoleMsg as the first argument. If you've done it right you should get a console.log message saying "Well done you've passed"
*/

/*
Q2. Write a second line of code to call the hasPassed() function. This time pass an anonymous function as the first argument. 
*/


/*
Q3. Write a function called doItTwice. doItTwice should accept a single argument, this argument should be another function. doItTwice should then call this function twice. Here's some example code that would call doItTwice()
doItTwice(consoleMsg); //outputs "Well done you've passed" twice to the console
*/



function Film(title, year)
{
	var newFilm={
		title:title,
		year:year
	}
	return newFilm;
}
var films=[]
films.push(new Film("No Country for Old Men","2007"));
films.push(new Film("Jaws","1975"));
films.push(new Film("Winter's Bone","2010"));
films.push(new Film("Back to the Future","1985"));

/*
Q4. Look at the above code that creates an array of Film objects. Add some additional code that will print the title of each film in the console. 
Make sure you use a Array.forEach(). 
*/

/*
Q5. Add some additional code that generates an array containing all the years (and only the years) each film was made. Make sure you use Array.map().
*/

/*
Q6. Add some additional code that will create an array of film objects that represent films made after 1980. Make sure you use Array.filter(). 
*/

/*
Q7. Write some additional code that will filter by the name of the director. Again this should use Array.filter and return an array of film objects.
*/

function getSimpleColourChanger(colour){
	return function(){
		document.body.style.backgroundColor=colour
	}
}

/*
Q10. This question is about returning functions from other functions. Look at the function called getSimpleColourChanger. 
This function  returns another function. When this returned function is called it should change the background colour of the page.
Write two lines of code. One line to call getSimpleColourChanger, and a second line of code to call the returned function
*/

/*
Q12 Write a function, outputFilms. It should accept an array of film objects as an argument. A new <li> element containing the film title should be created for each film object and inserted into the <ul> element that is already in the HTML page. Make sure you use Array.forEach(). Here's some example output

<ul id="film-list">
	<li>No Country for Old Men</li>
	<li>Jaws</li>
	<li>Winter's Bone</li>
	<li>Back to the Future</li>
</ul>

*/

/*
Q13. Modify outputFilms by adding event listeners to the <li> elements so that when each <li> is clicked the following function, displayMsg, is called.
*/

function displayMsg()
{
	console.log("You clicked on a film");
}

/*
Q14. Modify displayMsg so that when a film is clicked on, the name of the director is displayed in the console. You will need to use a closure. 
*/
