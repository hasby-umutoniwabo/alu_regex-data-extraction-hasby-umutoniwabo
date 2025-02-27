**Text Pattern Analyzer**
A simple web application that analyzes text to find and validate common patterns like email addresses, URLs, phone numbers, HTML tags, and hashtags.

Extract multiple pattern types simultaneously
Validate extracted patterns
Remove duplicates automatically
Handle edge cases and malformed inputs
Clean, responsive UI
Real-time pattern matching

**Supported Patterns**

Email Addresses: e.g., user@example.com
Url: e.g., https://intranet.aluswe.com/user_containers/35279/webterm
Phone Numbers: e.g., 123.456.7890
HTML Tags: e.g., <p>
Hashtags: e.g., #example
CreditCard: e.g., 1234 5678 9012 3456

Setup

Clone the repository:

 _git clone https://github.com/hasby-umutoniwabo/alu_regex-data-extraction-hasby-umutoniwabo.git_

Open the project:

 _cd alu_regex-data-extraction-hasby-umutoniwabo_

Open Analyzer.html in your web browser.

**Usage**

Input your text in the textarea
Click "Analyze Text"
View the extracted patterns grouped by type

Example Input:
_user@example.com 123.456.7890 <p> Kmk original 2:30 PM #example @call 400 RWF_

Example Output:

Email Addresses (1)
user@example.com ✓ Valid

URLs (0)
No matches found

Phone Numbers (1)
123.456.7890 ✓ Valid

HTML Tags (1)
<p> ✓ Valid

Hashtags (1)
#example ✓ Valid

Credit Card (0)
No matches found

**Project Structure**

├── Analyzer.html      # Main interface
├── styles.css         # Styling
└── script.js          # Core functionality

Core Components
   Pattern Validator
   Handles pattern matching and validation
   Uses optimized regex patterns
   Includes error handling

**User Interface**
   Clean, responsive design
   Real-time validation
   Clear result presentation

**Testing**
Sample test cases are provided in the interface. For comprehensive testing, try:

Different email formats
URLs
Various phone number patterns
Nested HTML tags
Credit card numbers
Hashtags
Multiple patterns in one text

Future Enhancements: Additional pattern types
