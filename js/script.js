/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote: "It's not wanting to win that makes you a winner; it's refusing to fail.",
    source: "Payton Manning",
    citation: "Motivational Peyton Manning Quotes",
    year: '"2022"',
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
  },

  {
    quote: "Do you know my favorite part about the game is? The opportunity to play.",
    source: "Mike Singletary",
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


/***
 * `printQuote` function
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
  `</p>`;

  document.getElementById('quote-box').innerHTML = codeBlock;

};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
