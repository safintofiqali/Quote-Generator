const quoteContainer = document.querySelector("#quote-container");
const quoteEl = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

let apiQuotes = [];
// Get Quotes From API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch (apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
    }
}

// Show Quote
function newQuote() {
    let random = Math.floor(Math.random() * apiQuotes.length);
    const {author,text} = apiQuotes[random];
    authorText.textContent = author;
    quoteEl.textContent = text;
}

// On Load
getQuotes();

