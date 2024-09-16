// Get the search input field
const searchInput = document.querySelector('input[type="search"]');

// Add an event listener to the search input field
searchInput.addEventListener('input', (e) => {
  // Get the search query
  const query = e.target.value;

  // Fetch data from a database or API
  fetch(`https://example.com/search?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // Display the search results
      const searchResults = document.querySelector('#search-results');
      searchResults.innerHTML = '';
      data.forEach(item => {
        const result = document.createElement('div');
        result.textContent = item.name;
        searchResults.appendChild(result);
      });
    });
});