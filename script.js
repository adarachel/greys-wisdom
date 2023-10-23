const API_URL = 'https://greyswisdomapi.onrender.com/greys-wisdom-api';

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.quote;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'An error occurred. Please try again later.';
    }
}

// Function to display the fetched quote
async function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const quote = await fetchRandomQuote();
    quoteElement.textContent = quote;
}

// Event listener for the "Get Quote" button
document.getElementById('get-quote').addEventListener('click', displayQuote);

// Initial quote display
displayQuote();