const API_URL = 'https://greyswisdomapi.onrender.com/get';

// Function to fetch a random quote for a specific character from the API
async function fetchCharacterQuote(character) {
    try {
        const response = await fetch(`${API_URL}?character=${character}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.quote;
    } catch (error) {
        console.error('Error fetching character quote:', error);
        return 'An error occurred. Please try again later.';
    }
}

// Function to display the fetched character quote
async function displayCharacterQuote() {
    const characterName = getCharacterName();
    const quoteElement = document.getElementById('quote');
    const quote = await fetchCharacterQuote(characterName);
    quoteElement.textContent = quote;
}

// Event listener for the "Get Character's Quote" button
document.getElementById('get-quote').addEventListener('click', displayCharacterQuote);

// Initial quote display
displayCharacterQuote();
