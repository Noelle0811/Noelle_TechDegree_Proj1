/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** /
 list of quotes I picked ***/
var html = '';

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
    quote:"Dont spend your time lookin' around for something you want that can't be found.", source: "The Jungle Book",
year: "1967"
},

];
 
/////////////////////////////////////////////////////////////////////////////////
/*** / 
  getRandomQuote to get my quotes in random order
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * disneyQuotes.length);
  return disneyQuotes[randomNumber];
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
  console.log('clicked');
  var printQuote = getRandomQuote();
  html = '<p class="quote">' + printQuote.quote + '</p>';
  html += '<p class="source">' + printQuote.source + '</p>';
   if (printQuote.year == true) {
    html += '<p class="year">' + printQuote.year + '</p>'; 
  } else { 
    html += '<p class="year">' + '' + '</p>'; 
  }


  document.getElementById('quote-box').innerHTML = html;
  // html += '<p class="source">' + printQuote.source + '</p>';
};



document.getElementById('loadQuote').addEventListener("click", printQuote, false);




//  const quoteBox = document.getElementById('quote-box');
//  const paragraph = quoteBox.lastElement;
//  const displayYear = paragraph.lastElement;



//  printQuote = () => {

//   var displaydisneyQuotes = document.write('.quote');
//   var displaydisneyQuotes = document.write('.quote');
 
//   displayquotes.textcontent = selectdisneyQuotes.quote;
//   displaySource.textcontent = selectdisneyQuotes.source;

//  }


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

// console.log(disneyQuotes);
// //Display the quotes in random order// 
// var randomNumber = Math.floor(Math.random() * (disneyQuotes.length));

// function randomQuote(){
//  randomNumber();
// }
//  //document.getElementById('quoteDisplay')


// // random background color changes//




// function randomRgb(){
//   returnMath.floor(Math.random() * 256);

//   for (var i=1; i<=10; i+=1){ 

//   }
// }


// document.body.style.backgroundColor = getRandomColor();


// taking a quote from functiom getRandomQuote


// /******************************************




// document.getElementsByTagName('body')[0].style.background = rgbColor;

// document.getElementsByTagName('button')[0].style.background = rgbColor;
// }

// /*** timer for the quote to change if no one pushes the button */
// var timer = function() {
//       interval = setInterval(function() {
//         $('p').fadeOut(1, function() {document.getElementById("loadQuote").disabled = true;});
//         getRandomColor();
//         printQuote();
//         $('p').fadeIn(20000,function() {document.getElementById("loadQuote").disabled = false;});
//       }, 20000);
//          }

// timer();

// /** to get a random quote without having it repeat */
// // taking a quote from functiom getRandomQuote

// // functionprintQuote (){
// //     var printQuote = getRandomQuote();
// //     var Html = '<p class="quote>' + printQuote.quote + '</p>';
// //     Html += "<p class="source"> + printQuote.source + '</p>';
// //     Html += '<p class="source"> + printQuote.source + '</p>;

// function printQuote() {
//   getRandomColor();
//   var randomQuote = getRandomQuote();
//   var html = "";
//   html += '<p class="quote">' + randomQuote.quote + '</p>';
//   html +='p class="source">' + randomQuote.source;
//    if(!randomQuote.hasOwnProperty('citation')){ 
//           html =+ '</p>'
//    }

// }
//   var output = document.getElementById('quote-box');
//   output.innerHTML = html;

//   $('p').fadeOut(1, function() {documentFragment.getElementById("loadQuote").disabled = true;});
//   $('p').fadeIn(20000,function() {documentFragment.getElementById("loadQuote").disabled = false;});

//   /*** this is to restart the timer */
//   clearInterval(interval);
//   timer();


//   printQuote ();


// //  const quoteBox = document.getElementById('quote-box');
// //  const paragraph = quoteBox.lastElement;
// //  const displayYear = paragraph.lastElement;



//  printQuote = () => {

//   var displaydisneyQuotes = document.write('.quote');
//   var displaydisneyQuotes = document.write('.quote');
 
//   displayquotes.textcontent = selectdisneyQuotes.quote;
//   displaySource.textcontent = selectdisneyQuotes.source;

//  }

 

 
// /***
//   Create the `printQuote` function to: 
//    - Call the `getRandomQuote` function and assign it to a variable.
//    - Create a variable for the HTML string and set it equal to an empty string.
//    - Use the HTML template in the instructions or the markup in the index.html file, AND 
//      the random quote vairable to build your HTML string.
//    - Add the quote and source section to the HTML string.
//    - Use an if statement to check for the citation property before adding it to the HTML string.
//    - Use an if statement to check for the year property before adding it to the HTML string.
//    - Don't forget to close that final `p` tag.
//    - Set the `innerHTML` of the `quote-box` div to the HTML string. 
// ***/

// /*** my button  */
// Document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// /***
//   When the "Show another quote" button is clicked, the event listener 
//   below will be triggered, and it will call, or "invoke", the `printQuote` 
//   function. So do not make any changes to the line of code below this 
//   comment.
// ***/

// //document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// /*******************************************************************************************************/

// console.log(disneyQuotes);
// //Display the quotes in random order// 
// var randomNumber = Math.floor(Math.random() * (disneyQuotes.length));

// function randomQuote(){
//  randomNumber();
// }
//  //document.getElementById('quoteDisplay')

// function randomRgb(){
//   returnMath.floor(Math.random() * 256);

//   for (var i=1; i<=10; i+=1){ 

//   }
// }

// document.body.style.backgroundColor = getRandomColor();




