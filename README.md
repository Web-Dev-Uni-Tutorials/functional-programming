# Instructions for running CHT2531 JavaScript Exercises

1. Download or clone the repository.
2. Unzip this.
3. Inside this folder there are a number of files. Here are the ones we are interested in:

* *index.html*. This is the HTML file that is used in practical exercises. This HTML file uses a JavaScript file, exercises.js
* *exercises.js*. Open this in a text editor of your choice. This is where you will write your JavaScript. It already contains some code to get you started. It also contains the exercise questions (in comments, leave these questions commented out).
* *tests.html*. This is a 'test runner'. It is a web page that runs a series of tests against *exercises.js* and reports on the results. Click on 'Spec List', you should see that all twelve tests are failing. Your aim is to pass all the tests in tests.html, and turn them all green.
* *notes.md*. View this via GitHub. These are some notes that will help you provide solutions to the exercises.

The tests rely on using some Ajax code. So to complete the exercises this week you will need to run *index.html* and *tests.html* from a web server. 

* Open the Nodejs command prompt. 
* Change directory to the folder containing the *index.html* and *tests.html*.
* Enter:
```
npm install -g http-server
```
* Once it's been installed enter:
 ```
 http-server
 ```
* Open a web browser, open two tabs, in one open *http://localhost:8080/index.html*, in the other enter *http://localhost:8080/tests.html* and you are ready to go. 