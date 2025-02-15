// Define patterns to search for in the text using regular expressions

// Each pattern will match different types of text like emails, URLs, etc.
const patterns = {
    // Matches emails like: user@example.com
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    
    // Matches URLs like: http://example.com or https://site.com
    url: /https?:\/\/[^\s/$.?#].[^\s]*/g,
    
    // Matches phone numbers like: (123) 456-7890 or 123-456-7890
    phone: /\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/g,
    
    // Matches HTML tags like: <div> or <p class="text">
    htmlTag: /<[^>]+>/g,
    
    // Matches hashtags like: #example or #code123
    hashtag: /#[a-zA-Z0-9_]+/g
};

// Main function that runs when "Analyze" button is clicked
function analyzeText() {
    // Get the text from the input field and the results div
    const text = document.getElementById('inputText').value;
    const results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results
    
    // Process each pattern type (email, url, etc.)
    Object.entries(patterns).forEach(([type, pattern]) => {
        // Find matches and remove duplicates using Set
        const matches = [...new Set(text.match(pattern) || [])];
        
        // Add results to the page using HTML template
        results.innerHTML += `
            <div class="pattern-group">
                <div class="pattern-header">
                    <div class="pattern-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                    <span class="match-count">${matches.length}</span>
                </div>
                ${matches.length ? matches.map(match => 
                    `<div class="match-item">${match}<span class="validation-status valid">✓ Valid</span></div>`
                ).join('') : '<div class="no-matches">No matches found</div>'}
            </div>
        `;
    });
}
