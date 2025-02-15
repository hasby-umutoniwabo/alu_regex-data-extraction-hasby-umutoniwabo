**Text Pattern Analyzer**
A simple web application that analyzes text to find and validate common patterns like email addresses, URLs, phone numbers, HTML tags, and hashtags.
Project Overview
**This project provides a user-friendly interface to:
**
_Detect email addresses (e.g., user@example.com)
Find URLs (e.g., https://example.com)
Identify phone numbers in various formats (e.g., (123) 456-7890, 123-456-7890)
Locate HTML tags (e.g., <div>, <p class="text">)
Extract hashtags (e.g., #example, #code123)_

**Features**

Real-time pattern detection
Duplicate removal
Pattern validation
Clean and responsive user interface
Count display for each pattern type
Simple copy-paste functionality

**File Structure**

│
├── Analyzer.html   # Main HTML file
├── script.js       # JavaScript logic for pattern analysis
└── styles.css      # CSS styles for the application

**Setup Instructions**

Download the Project (Download all three files):
analyzer.html
script.js
styles.css

Place them in the same directory

**Local Setup**

No build process or dependencies required
No server needed - runs entirely in the browser
Just open analyzer.html in a web browser

**Usage Instructions**

Open analyzer.html in your web browser
Paste or type text into the input area
Click the "Analyze" button
View the results showing:

Number of matches found for each pattern
List of all unique matches
Validation status for each match

**Pattern Details**
The analyzer looks for the following patterns:

**Email Addresses**
Matches standard email formats
Example: username@domain.com

**URLs**
Matches http and https URLs
Example: https://www.example.com

**Phone Numbers**
Matches common US phone number formats
Supports formats:(123) 456-7890 123-456-7890 123.456.7890

**HTML Tags**
Matches any HTML tag
Examples:  <div> <p class="text">  <a href="link">

**Hashtags**
Matches standard hashtag format
Examples: #example #code123 #programming

**Technical Details**

**Technologies Used** _HTML5
                      CSS3 (separate stylesheet)
                      Regular Expressions (RegEx)_

**Browser Compatibility**
Works in all modern browsers: Chrome (recommended)
                              Firefox
                              Safari
                              Edge
**Customization**
_JavaScript Customization_
You can modify the patterns in script.js:
                                         ** const patterns = {
                                              email: /your-custom-email-pattern/g,
                                              url: /your-custom-url-pattern/g,
                                              // Add more patterns as needed
                                          };**
**Style Customization**
Modify styles.css to change the appearance:
                                            **/* Change colors */
                                                .pattern-group {
                                                    background-color: your-color;
                                                }
                                                /* Modify layout */
                                                .container {
                                                    max-width: your-width;
                                                }**
**Troubleshooting**

**No Results Showing**
Check if text was entered in the input area
Verify that the text contains valid patterns
Ensure JavaScript is enabled in your browser

**Pattern Not Detected**
Verify the pattern format matches the expected format
Check for typos or formatting issues
Ensure the pattern is one of the supported types

**Styles Not Loading**
Confirm styles.css is in the same directory as analyzer.html
Check browser console for any CSS loading errors
Verify file permissions

**Page Not Loading**
Confirm all three files are in the same directory
Check browser console for any errors
Try using a different browser                                                
