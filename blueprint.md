# Blueprint for Lotto 6/45 Number Generator

## Overview
This project creates a sophisticated, fancy, and responsive web page that generates 5 sets of high-probability lotto numbers (6 numbers per set, from 1 to 45). The numbers are generated based on the frequency of the last 100 winning numbers and are displayed when the user clicks a "Generate Numbers" button.

## Detailed Outline

### `index.html`
- Sets up a basic HTML5 structure.
- Includes a `<title>` tag set to "Lotto Number Generator - High Probability".
- Includes a `viewport` meta tag for responsive design.
- Links to `style.css` for styling.
- Contains a container div with a header and a main section.
- The header includes a title "Lotto Number Generator" and a subtitle "Based on the last 100 winning numbers".
- The main section contains a "Generate Numbers" button with a glowing effect and a container `div` with `id="numbers-container"` for displaying the generated lotto numbers.
- Links to `main.js` with `type="text/javascript"` attribute.

### `main.js`
- **`pastWinningNumbers` constant:**
    - A mock array of the last 20 winning numbers. This is a placeholder and should be replaced with the actual last 100 winning numbers.
- **`getFrequency(numbers)` function:**
    - Takes an array of number sets and returns a `Map` where keys are the numbers and values are their frequencies.
- **`generateHighProbabilitySet(frequencyMap)` function:**
    - Generates a set of 6 unique numbers based on a weighted random selection from the frequency map. Numbers with higher frequency have a higher chance of being picked.
- **`generateAndDisplayNumbers()` function:**
    - Called when the "Generate Numbers" button is clicked.
    - Calls `getFrequency()` to get the frequency of past winning numbers.
    - Generates 5 sets of high-probability numbers by calling `generateHighProbabilitySet()` 5 times.
    - Calls `displayLottoNumbers()` to display the generated sets.
- **`displayLottoNumbers(sets)` function:**
    - Clears the `numbers-container`.
    - Creates and appends a `div` for each lotto set, containing the set number and the generated numbers in styled spans.
- **Event Listener:**
    - An event listener is added to the `DOMContentLoaded` event to attach a click event listener to the "Generate Numbers" button.

### `style.css`
- Imports the "Roboto" font from Google Fonts.
- Defines a dark theme with a glowing primary color using CSS variables.
- Styles the main container, header, and button for a "sophisticated and fancy" look.
- **Glowing Button:**
    - A custom-styled button with a glowing effect on the text and border.
    - Includes animations for a flickering effect.
- **Numbers Display:**
    - Styles the container for the generated numbers.
    - Each lotto set is displayed in a card-like `div`.
    - Each number is displayed in a circular `span` with a background color and shadow that matches the primary color.
- **Responsive Design:**
    - Includes a media query for screens with a max-width of 768px.
    - Adjusts font sizes, button size, and the layout of the lotto sets for better readability on mobile devices.
    - The lotto sets are displayed in a column layout on smaller screens.

## Current Requested Change:
The user requested to make the web page responsive for mobile devices.

## Steps for Current Change:
1. Modify `style.css` to add media queries for mobile devices. (Completed)
2. Adjust the styles for better readability on smaller screens. (Completed)
