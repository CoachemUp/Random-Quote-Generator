/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `color array`
***/
let color = ['blue', 'yellow', 'red', 'orange', 'indigo', 'green', 'violet', 'maroon', 'lime', 'olive', 'navy', 'teal', 'aqua', 'cornflower blue', 'crimson'];
/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote: "Today, you have 100% of your life left",
    source: "Tom Landry",
    tag: "Coach",
  },
  {
    quote: "Becoming a champion is not an easy process... It is done by focusing on what it takes to get there and not on getting there.",
    source: "Nick Saban",
    year: "2022",
  },
  {
    quote: "It's not wanting to win that makes you a winner; it's refusing to fail.",
    source: "Payton Manning",
    citation: "Motivational Peyton Manning Quotes",
    year: "2022",
    tag: "QB",
  },

  {
    quote: "When you’re good at something, you’ll tell everyone. When you’re great at something, they’ll tell you.",
    source: "Walter Payton",
  },

  {
    quote: "Success isn’t owned, it’s leased. And rent is due every day.",
    source: "J.J. Watt",

  },

  {
    quote: "When you don’t give up, you cannot fail.",
    source: "Adrian Peterson",
    tag: "RB",
  },

  {
    quote: "Do you know my favorite part about the game is? The opportunity to play.",
    source: "Mike Singletary",
    tag: "Player",
  },
];

/***
 * `getRandomQuote` function
 * takes the length of the quotes and pulls a random quote
 ***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


/***
 * `printQuote` function
 * assign the getRandomQuote function to a variable
 * assign each part of array to variable codeblock
 * checks to see if all parts of quote are present then places in quote-box Id
 ***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let codeBlock = ``
  codeBlock += `<p class="quote">${randomQuote.quote} </p>
    <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    codeBlock += `<span class="citation"> ${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    codeBlock += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    codeBlock += `<span class="tag">${randomQuote.tag}</span>`;
  }
  `</p>`;

  document.getElementById('quote-box').innerHTML = codeBlock;

};

/***
 * interval to rotate between quotes set for 5secs
 */
setInterval(printQuote, 5000);


/***
 * user can also click on btn to see a new quote
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

/***
 * function to change color of background
 * assign random color to randomColor
 * changeColor function changes the quote-box background to random color
 ***/
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * color.length);
  return color[randomColor];
};

function changeColor() {
  let backGroundColor = getRandomColor();
  document.getElementById('container').style.background = backGroundColor;
};
/***
 * on button click quote box changes color
 ***/
document
  .getElementById('load-quote')
  .addEventListener('click', changeColor);

/***
 * interval to rotate between colors set for 5secs
 */
setInterval(changeColor, 5000)




