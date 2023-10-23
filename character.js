const characterNameElement = document.getElementById('character-name');
const characterQuotes = document.getElementById('quote');

// Function to parse the query parameter
function getCharacterName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name');
}

// Function to filter and display quotes for the selected character
function displayCharacterQuotes() {
    const characterName = getCharacterName();
    characterNameElement.textContent = `${characterName}'s Quotes`;

    const filteredQuotes = quotes.filter(quote => quote.person === characterName);

    if (filteredQuotes.length === 0) {
        characterQuotes.textContent = 'No quotes found for this character.';
    } else {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        characterQuotes.textContent = filteredQuotes[randomIndex].quote;
    }
}

// Event listener for the "Get Quote" button
document.getElementById('get-quote').addEventListener('click', displayCharacterQuotes);

// Display the character's name and a random quote by the selected character
displayCharacterQuotes();