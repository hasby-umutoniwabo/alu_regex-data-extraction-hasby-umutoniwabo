class TextAnalyzer {
    constructor() {
        this.patterns = {
            email: {
                extract: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?:\.[a-zA-Z]{2,})/g,
                validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?:\.[a-zA-Z]{2,})$/
            },
            phone: {
                extract: /(?:\+?1[-.]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/g,
                validate: /^(?:\+?1[-.]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            },
            htmlTag: {
                extract: /<[^>]+>/g,
                validate: /^<[^>]+>$/
            },
            hashtag: {
                extract: /#[a-zA-Z0-9_]+/g,
                validate: /^#[a-zA-Z0-9_]+$/
            },
        };
    }

    extractAll(text) {
        if (typeof text !== 'string') {
            throw new Error('Input must be a string');
        }

        const results = {};
        
        for (const [key, pattern] of Object.entries(this.patterns)) {
            const matches = [...new Set(text.match(pattern.extract) || [])];
            results[key] = {
                matches,
                count: matches.length
            };
        }

        return results;
    }

    validate(value, type) {
        if (!this.patterns[type]) {
            throw new Error(`Unknown pattern type: ${type}`);
        }

        const pattern = this.patterns[type].validate;
        const isValid = pattern.test(value);

        return {
            isValid,
            type,
            value,
            message: isValid ? 
                `Valid ${type} format` : 
                `Invalid ${type} format`
        };
    }

    validateMatches(extractionResults) {
        const validationResults = {};

        for (const [type, result] of Object.entries(extractionResults)) {
            validationResults[type] = result.matches.map(match => this.validate(match, type));
        }

        return validationResults;
    }
}

const analyzer = new TextAnalyzer();

function displayResults(extractionResults, validationResults) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const patternNames = {
        email: 'Email Addresses',
        phone: 'Phone Numbers',
        htmlTag: 'HTML Tags',
        hashtag: 'Hashtags',
    };

    for (const [type, result] of Object.entries(extractionResults)) {
        const patternGroup = document.createElement('div');
        patternGroup.className = 'pattern-group';

        const header = document.createElement('div');
        header.className = 'pattern-header';

        const title = document.createElement('div');
        title.className = 'pattern-title';
        title.textContent = patternNames[type] || type;

        const count = document.createElement('span');
        count.className = 'match-count';
        count.textContent = result.count;

        header.appendChild(title);
        header.appendChild(count);
        patternGroup.appendChild(header);

        if (result.matches.length > 0) {
            result.matches.forEach((match, index) => {
                const validation = validationResults[type][index];
                const matchItem = document.createElement('div');
                matchItem.className = 'match-item';
                matchItem.textContent = match;

                const validationStatus = document.createElement('span');
                validationStatus.className = `validation-status ${validation.isValid ? 'valid' : 'invalid'}`;
                validationStatus.textContent = validation.isValid ? '✓ Valid' : '✗ Invalid';

                matchItem.appendChild(validationStatus);
                patternGroup.appendChild(matchItem);
            });
        } else {
            const noMatches = document.createElement('div');
            noMatches.className = 'no-matches';
            noMatches.textContent = 'No matches found';
            patternGroup.appendChild(noMatches);
        }

        resultsDiv.appendChild(patternGroup);
    }
}

function analyzeText() {
    const text = document.getElementById('inputText').value;
    const extractionResults = analyzer.extractAll(text);
    const validationResults = analyzer.validateMatches(extractionResults);
    displayResults(extractionResults, validationResults);
}
