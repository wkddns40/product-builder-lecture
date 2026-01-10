# Blueprint for Powerball Pro - A High-Quality Powerball Number Generator

## Overview
This project is a high-quality, multi-page website that provides a "Powerball" number generator. The site is designed to meet Google AdSense quality guidelines by providing unique content, a clear purpose, a great user experience, and trustworthy information pages. It generates 5 sets of high-probability Powerball numbers based on past winning data. The website is fully responsive and mobile-friendly.

## Detailed Outline

### Site Structure
The website is structured as a multi-page application to provide a better user experience and more content for users and search engines.
- `index.html`: The main landing page.
- `pages/generator.html`: The page with the Powerball number generator tool.
- `pages/about.html`: A page that describes the project's mission and purpose.
- `pages/contact.html`: A page with contact information.
- `pages/privacy.html`: A page detailing the website's privacy policy.

### `index.html` (Home Page)
- Provides a welcoming introduction to Powerball Pro.
- Features a clear call-to-action that directs users to the Powerball number generator.
- Includes a "Why Powerball Pro?" section with feature cards explaining the value proposition of the site.
- Contains a consistent navigation bar and footer.

### `pages/generator.html`
- Contains the main feature of the website: the Powerball number generator.
- Users can click a "Generate Numbers" button to get 5 sets of high-probability numbers.
- The generated numbers are displayed in a clean, easy-to-read format, with the Powerball highlighted.
- Includes the same navigation bar and footer for consistency.

### `pages/about.html`, `pages/contact.html`, `pages/privacy.html`
- These pages provide essential information to build trust with users and search engines.
- They contain placeholder content that can be easily updated.
- They share the same consistent design, including the navigation bar and footer.

### `main.js`
- The JavaScript logic is for the Powerball number generator on `pages/generator.html`.
- **`pastWinningNumbers` constant:** A mock array for the last 20 Powerball winning numbers (placeholder).
- **`getFrequency(numbers, isPowerball)` function:** Analyzes the frequency of past winning numbers for both white balls and the Powerball.
- **`generateHighProbabilitySet(whiteBallFreq, powerballFreq)` function:** Generates a set of 5 white balls and 1 Powerball based on weighted probability.
- **`generateAndDisplayNumbers()` function:** Orchestrates the generation and display of the numbers.
- **`displayPowerballNumbers(sets)` function:** Renders the generated Powerball numbers on the page, with a special style for the Powerball.
- **Event Listener:** Attaches the number generation logic to the "Generate Numbers" button.

### `style.css`
- A comprehensive stylesheet that provides a consistent and "sophisticated and fancy" design across all pages.
- **Dark Theme:** Uses a dark background with a glowing blue primary color.
- **Navbar:** A fixed navigation bar at the top for easy navigation.
- **Footer:** A consistent footer with copyright information.
- **Glowing Button:** A custom-animated button for a premium feel.
- **Cards and Layouts:** Uses modern CSS (flexbox) for layout and card-based design.
- **Numbers Display:** The white balls have a neutral style, while the Powerball has a distinct red color to make it stand out.
- **Responsive Design:** A media query for screens with a max-width of 768px ensures the website looks great on mobile devices by adjusting font sizes, layouts, and navigation.

## Current Requested Change:
The user requested to change the lottery type from "Lotto 6/45" to "Powerball".

## Steps for Current Change:
1. Update `main.js` with Powerball logic and a mock dataset of past Powerball winning numbers. (Completed)
2. Update all HTML files with content and titles related to Powerball. (Completed)
3. Update `style.css` to add a special style for the Powerball number and clean up the stylesheet. (Completed)
