const API_URL = 'https://greyswisdomapi.onrender.com/get';

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
    // Show loading screen
    document.querySelector('.loading-screen').style.display = 'flex';

    // Hide the container
    document.querySelector('.container').classList.add('hidden');

    const quoteElement = document.getElementById('quote');
    const quote = await fetchRandomQuote();

    // Introduce a delay to make the loading screen more noticeable
    setTimeout(() => {
        // Hide loading screen
        document.querySelector('.loading-screen').style.display = 'none';

        // Show the container
        document.querySelector('.container').classList.remove('hidden');

        // Update the quote
        quoteElement.textContent = quote;
    }, 1000); // Adjust the delay time (in milliseconds) as needed
}

// Event listener for the "Get Quote" button
document.getElementById('get-quote').addEventListener('click', displayQuote);

// Initial quote display
displayQuote();
