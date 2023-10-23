const characterList = document.getElementById('character-list');

// Function to fetch and display the list of characters
function displayCharacterList() {
    quotes.forEach(quote => {
        // Create a list item for each character and link to their respective page
        const listItem = document.createElement('li');
        const characterLink = document.createElement('a');
        characterLink.href = `character.html?name=${quote.person}`;
        characterLink.textContent = quote.person;
        listItem.appendChild(characterLink);
        characterList.appendChild(listItem);
    });
}

// Display the list of characters when the page loads
displayCharacterList();
