/*
Q1. Write a function, consoleMsg. The function should simply display "Well done you've passed" in the console.  Make sure you declare the function as a function literal. 
*/


/*
Q2. 
a)Look at the following function. Write a line of code that calls this function. Your consoleMsg function should be passed as the first argument, 50 should be passed as the second argument.
b) Write a second line of code to call the hasPassed function. This time pass an anonymous function as the first argument. 
*/

function hasPassed(action,mark)
{
    if(mark>=40)
    {
        action();
    }
}

/*
Q3. Write a function called doItTwice. doItTwice should accept a single argument, this argument should be another function. doItTwice should then call this function twice. Here's some example code that would call doItTwice()

doItTwice(consoleMsg); //outputs "Well done you've passed" twice to the console
*/

/*
Q4. Look at the following function printFilms. Add some code inside printFilms that will output the title of each film in the console. Make sure you use a forEach loop. 
*/

function Film(title, year, director)
{
	this.title=title;
	this.year=year;
	this.director=director;
}
var films=[]
films.push(new Film("No Country for Old Men",2007,"The Coen Brothers"));
films.push(new Film("Jaws",1975,"Steven Spielberg"));
films.push(new Film("Winter's Bone",2010,"Debra Granik"));
films.push(new Film("Back to the Future",1985,"Robert Zemeckis"));
films.push(new Film("Schindler's List",1993,"Steven Spielberg"));

function printFilms(films)
{
	//add your code here
}
printFilms(films);

/*
Q5. Look at the following function, getYears. Get years should accept an array of film objects as an argument and return an array populated with the years (and only the years) each film was made. Make sure you use Array.map().
*/

function getYears(films)
{
	//add your code here
	return years;
}


/*
Q6. Look at the following function filterByYear. filterByYear should accept an array of film objects as an argument and return an array of films that only contains the films made after 1980. Make sure you use Array.filter(). 
*/

function filterByYear(films)
{
	//add your code here
	return recentFilms;
}


/*
Q7. Write a similar function filterByDirector. Again this should use Array.filter and return an array of film objects. The function should accept a second argument, the name of the director to filter by.
*/

/*
Q8. Simply by using the functions you have already written, write some code (no more than three lines) that will output a list of all the films made after 1980 and directed by Steven Spielberg. The title of each film should be displayed in the console. No unit tests for this question, but hopefully you will start to see the benefits of a functional style. 
*/

/*
Q9. Write a function called averageYear. It should accept a single argument, an array of film years (not objects). It should return the average year of release for all the films, rounded to the nearest year.
*/

/*
Q10. This question is about returning functions from other functions. Write a function called getSimpleColourChanger. This function should return another function. When this returned function is called it should change the background colour of the page to blue.
*/

/*
Q11. Write a similar function, this time it's going to use a closure. Call the function getColourChanger. This function should accept a single argument, a string that specifies a colour. The returned function should use this value to change the page colour. 
*/

/*
Q12 Write a function, outputFilms. It should accept an array of film objects as an argument. A new <li> element containing the film title should be created for each film object and inserted into the <ul> element that is already in the HTML page. Make sure you use a forEach loop. Here's some example output

<ul id="film-list">
	<li>No Country for Old Men</li>
	<li>Jaws</li>
	<li>Winter's Bone</li>
	<li>Back to the Future</li>
	<li>Schindler's List</li>
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
