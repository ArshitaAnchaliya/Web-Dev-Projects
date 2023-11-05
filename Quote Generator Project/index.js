const quotetext = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('newQuote');

quoteBtn.addEventListener('click', randomQuote);

function randomQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(result => {
            quotetext.textContent = result.content; 
            author.textContent = `- ${result.author}`; 
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}
