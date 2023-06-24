const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const voiceButton = document.getElementById('voiceButton');
const contentDiv = document.getElementById('content');

searchButton.addEventListener('click', search);
voiceButton.addEventListener('click', voiceSearch);

function search() {
    const query = searchInput.value;
    if (query.trim() !== '') {
        const searchUrl = `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CUSTOM_SEARCH_ENGINE_ID&q=${encodeURIComponent(query)}`;

        // Make an API request to the Google Search API
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => displaySearchResults(data))
            .catch(error => console.log('Error:', error));
    }
}

function displaySearchResults(data) {
    contentDiv.innerHTML = ''; // Clear previous search results

    // Extract and display search results
    const items = data.items;
    if (items.length > 0) {
        items.forEach(item => {
            const title = item.title;
            const link = item.link;

            const resultDiv = document.createElement('div');
            const titleLink = document.createElement('a');
            titleLink.href = link;
            titleLink.textContent = title;

            resultDiv.appendChild(titleLink);
            contentDiv.appendChild(resultDiv);
        });
    } else {
        contentDiv.innerHTML = 'No results found.';
    }
}

function voiceSearch() {
    // Implement voice search functionality
    // Example: Use Web Speech API for speech recognition
}
