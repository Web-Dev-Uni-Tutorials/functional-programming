var code="";
describe("Functional programming exercises",function(){
  beforeEach(function(done) 
    {  
       $.ajax("js/functional-exercises.js",
          {
            method:"GET",
            complete:function( data ) {
              code=data.responseText.replace(/ /g,'');
              code=code.replace(/\r?\n|\r/g,"");
              done();
            }
          });
    });
  describe("Q1. The function consoleMsg",function(){
    it("should display an console message containing the text 'Well done you've passed'", function() {
        spyOn(console, 'log');
        consoleMsg()
        expect(console.log).toHaveBeenCalledWith("Well done you've passed");
    });
    it("should be declared as a function literal", function() {
        var pattern=/consoleMsg=function/;
        console.log(code);
        expect(pattern.test(code)).toEqual(true);
    });
  });

  describe("Q2.(a) The function hasPassed",function()
  {
      it("should be called with two arguments, consoleMsg and 50", function() {
          var pattern=/hasPassed\(consoleMsg,50\)/
          expect(pattern.test(code)).toEqual(true);
      });
  })

  describe("Q2.(b) The function hasPassed",function()
  {
      it("should be called with two arguments, an anonymous function and 50", function() {
          var pattern=/hasPassed\(function\(\)[\s\S]*\{[\s\S]*console.log[\s\S]*\},50\)/
          expect(pattern.test(code)).toEqual(true);
      });
  })

  describe("Q3. The function doItTwice",function(){
      it("should accept a function as an argument and call this function twice", function() {
          var myObj={myFnc:function(){return true}};
          spyOn(myObj,'myFnc');
          doItTwice(myObj.myFnc)
          expect(myObj.myFnc.calls.count()).toEqual(2);
      });
  })

  describe("Q4. The printFilms function",function(){
      it("should print the title of each film in the console", function() {
          spyOn(console, 'log');
          var films=[{title:"test",year:2000},{title:"another test",year:1990}]
          printFilms(films);
          expect(console.log.calls.count()).toEqual(2);
          expect(console.log).toHaveBeenCalledWith("test");
          expect(console.log).toHaveBeenCalledWith("another test");
      });
      it("should use a forEach loop not a for loop", function() {
          var pattern=/Q4[\s\S]*films.forEach\([\s\S]*Q5/;
          expect(pattern.test(code)).toEqual(true);
          var pattern=/printFilms\(films\)[\s\S]*\{[\s\S]*for\([\s\S]*Q5/;
          expect(pattern.test(code)).toEqual(false);
      });
     
  });

  describe("Q5. The getYears function",function(){
      it("should return an array of film years", function() {
          var films=[{title:"test",year:2000},{title:"another test",year:1990}]
          var years=getYears(films);
          expect(years).toEqual([2000,1990]);
      });
      it("should use map not a for loop ", function() {
          var pattern=/Q5[\s\S]*films.map\([\s\S]*Q6/;
          expect(pattern.test(code)).toEqual(true);
          var pattern=/getYears\(films\)[\s\S]*\{[\s\S]*for\([\s\S]*Q6/;
          expect(pattern.test(code)).toEqual(false);
      });
      
  });

  describe("Q6. The filterByYear function",function(){
      it("should return an array of films made after 1980", function() {
          var films=[{title:"test",year:2000},{title:"another test",year:1980}, {title:"another test",year:2004}]
          var result=filterByYear(films);
          expect(result).toEqual([{title:"test",year:2000},{title:"another test",year:2004}]);
      });
      it("should use filter not a for loop", function() {
          var pattern=/Q6[\s\S]*films.filter\([\s\S]*Q7/;
          expect(pattern.test(code)).toEqual(true);
          var pattern=/filterByYear\(films\)[\s\S]*\{[\s\S]*for\([\s\S]*Q7/;
          expect(pattern.test(code)).toEqual(false);
      });
  });

  describe("Q7. The filterByDirector function",function(){
      it("should return an array of films filtered by director name", function() {
          var films=[{title:"test",year:2000, director:"qwerty"},{title:"another test",year:1980,director:"xcv"}, {title:"another test",year:2004,director:"qwert"}]
          var result=filterByDirector(films,"qwerty");
          expect(result).toEqual([{title:"test",year:2000, director:"qwerty"}]);
      });
      it("should use filter not a for loop", function() {
          var pattern=/Q7[\s\S]*films.filter\([\s\S]*Q8/;
          expect(pattern.test(code)).toEqual(true);
          var pattern=/filterByDirector\(films\)[\s\S]*\{[\s\S]*for\([\s\S]*Q7/;
          expect(pattern.test(code)).toEqual(false);
      });
  });

  describe("Q9. The averageYear function",function(){
      it("should return the average year of release for an array of film objects", function() {
          var years=[1990,2000,2010]
          var result=averageYear(years);
          expect(result).toEqual(2000);
      });
      it("should use reduce not a for loop", function() {
          var pattern=/Q9[\s\S]*.reduce\([\s\S]*Q10/;
          expect(pattern.test(code)).toEqual(true);
          var pattern=/averageYear\(films\)[\s\S]*\{[\s\S]*for\([\s\S]*Q10/;
          expect(pattern.test(code)).toEqual(false);
      });
  });

  describe("Q10. The getSimpleColourChanger function",function(){
      it("should return another function", function() {
          var fnc=getSimpleColourChanger();
          expect(typeof fnc).toEqual("function");
      });
      it("should return a function that changes the background color of the page to blue", function() {
          var fnc=getSimpleColourChanger();
          fnc();
          expect(document.body.style.backgroundColor).toEqual("blue");
      });
      
  });

  describe("Q11. The getColourChanger function",function(){
      it("should return another function", function() {
          var fnc=getColourChanger("green");
          expect(typeof fnc).toEqual("function");
      });
      it("should return a function that changes the background color of the page to the value of the argument", function() {
          var fnc=getColourChanger("peachpuff");
          fnc();
          expect(document.body.style.backgroundColor).toEqual("peachpuff");
      });
      
  });

  describe("Q12. The outputFilms function",function(){
      it("should accept an array of film objects and output an <li> element for each film", function() {
          var myFilms=[{title:"test",year:2000, director:"qwerty"},{title:"second",year:1980,director:"xcv"}, {title:"another",year:2004,director:"qwert"}]
           $( "#film-list" ).empty();
          outputFilms(myFilms);
          expect($('#film-list').html()).toEqual("<li>test</li><li>second</li><li>another</li>");
      });
      
  });

  describe("Q13. When clicked each <li> element",function(){
      it("should call the function displayMsg", function() {
          spyOn(console, 'log');
          $( "#film-list" ).empty();
          var films=[{title:"test",year:2000, director:"qwerty"},{title:"second",year:1980,director:"xcv"}, {title:"another",year:2004,director:"qwert"}]
          outputFilms(films);
          $( "li" ).first().trigger("click");
          expect(console.log).toHaveBeenCalled();
      });
      
  });

  describe("Q14. When an <li> element is clicked",function(){
      it("should display the film director in the console", function() {
          spyOn(console, 'log');
          var films=[{title:"test",year:2000, director:"qwerty"},{title:"second",year:1980,director:"xcv"}, {title:"another",year:2004,director:"qwert"}]
          outputFilms(films);
          $( "li" ).first().trigger("click");
          expect(console.log).toHaveBeenCalledWith("qwerty");
      });
      
  });


})

