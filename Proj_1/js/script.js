/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** /
 list of quotes I picked ***/


var disneyQuotes = [ 
  {
    quote:"If you focus on what you left behind, you will never be able to see what lies ahead.", 
    source: "Ratatouille"
  },
  {
    quote:"Even miracles take a little time.", 
    source: "Fairy Godmother" 
  }, 
  {
    quote:"The flower that blooms in adversity is the most beautiful of all.", 
    source: "The Emperor"
  }, 
  {
    quote:"I am your wife! Im the greatest good you're ever gonna get.", 
    source: "The Incredibles"
  },
  {
    quote:"Don't just fly, soar.", 
    source: "Dumbo" 
  },
  {
    quote:"Dont spend your time lookin' around for something you want that can/'t be found.", source: "The Jungle Book",
year: "1967"
},

];
 
console.log(disneyQuotes);

/*** / 
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
   var randomNum = Math.floor(Math.random() * 6);
   var randomNum = Math.floor(Math.random() * 9); 
   document.getElementById('dquote').innerHTML = disneyQuotes[randomNum];
   if (randomNum === storeNum) {
     return getRandomQuote();
   }
   if ( randomNum !== storeNum) {
   }
   return quotes[randomNum];
}






function getRandomColor() {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var yellow = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 var orange = Math.floor(Math.random() * 256);
 var purple = Math.floor(Math.random() * 256);
 var RgdColor = 'rgb(' + red + ',' + green +',' + blue +')';

document.getElementsByTagName('body')[0].style.background = rgbColor;

document.getElementsByTagName('button')[0].style.background = rgbColor;
}

function printQuote() {

  
}








 const quoteBox = document.getElementById('quote-box');
 const paragraph = quoteBox.lastElement;
 const displayYear = paragraph.lastElement;



 printQuote = () => {

  var displaydisneyQuotes = document.write('.quote');
  var displaydisneyQuotes = document.write('.quote');
 
  displayquotes.textcontent = selectdisneyQuotes.quote;
  displaySource.textcontent = selectdisneyQuotes.source;

 }

 

 



  








/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

/*** my button  */
Document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
// list of Disney Quotes I picked //
/*******************************************************************************************************/

console.log(disneyQuotes);
//Display the quotes in random order// 
var randomNumber = Math.floor(Math.random() * (disneyQuotes.length));

function randomQuote(){
 randomNumber();
}
 //document.getElementById('quoteDisplay')


// random background color changes//




function randomRgb(){
  returnMath.floor(Math.random() * 256);

  for (var i=1; i<=10; i+=1){ 

  }
}


document.body.style.backgroundColor = getRandomColor();


// taking a quote from functiom getRandomQuote

// functionprintQuote (){
//     var printQuote = getRandomQuote();
//     var Html = '<p class="quote>' + printQuote.quote + '</p>';
//     Html += "<p class="source"> + printQuote.source + '</p>';
//     Html += '<p class="source"> + printQuote.source + '</p>;

