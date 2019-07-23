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
    quote:"Dont spend your time lookin' around for something you want that can't be found.", 
    source: "The Jungle Book",
    year: "1967"
}

];
 
/////////////////////////////////////////////////////////////////////////////////
/*** / 
  getRandomQuote to get my quotes in random order
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * disneyQuotes.length);
  return disneyQuotes[randomNumber];
  }

/** getRandomColor in my background */
 function getRandomColor() {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 var rgbColor = `rgb(${red}, ${green}, ${blue})`;

 document.getElementsByTagName('body')[0].style.background = rgbColor;
 document.getElementsByTagName('button')[0].style.background = rgbColor;
} 


/** printQuote this is to call my functions */
function printQuote() {
  console.log('clicked');
  var printQuote = getRandomQuote();
  html = '<p class="quote">' + printQuote.quote + '</p>';
  html += '<p class="source">' + printQuote.source + '</p>';
   if (printQuote.year) {
    html += '<p class="year">' + printQuote.year + '</p>'; 
  } else { 
    html += '<p class="year"> unknown </p>'; 
  }
  /** this is calling my backgound colors */
  getRandomColor();

  document.getElementById('quote-box').innerHTML = html;
  // html += '<p class="source">' + printQuote.source + '</p>';
};



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

