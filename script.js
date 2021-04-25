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
    authorText.textContent = author ?? "Unknown";
    text.length > 120 ? quoteEl.classList.add("long-quote") : quoteEl.classList.remove("long-quote");
    quoteEl.textContent = text;
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// On Load
getQuotes();

twitterBtn.addEventListener("click",tweetQuote);
newQuoteBtn.addEventListener("click",newQuote);

