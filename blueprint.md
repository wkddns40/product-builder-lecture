# Blueprint for Lotto 6/45 Number Generator

## Overview
This project creates a simple web page that generates 7 sets of unique lotto numbers (6 numbers per set, from 1 to 45). The numbers are displayed on the page when it loads.

## Detailed Outline

### `index.html`
- Sets up a basic HTML5 structure.
- Includes a `<title>` tag set to "Lotto Number Generator".
- Links to `style.css` for styling.
- Contains a `div` element with the `id="lotto-results"`, which serves as the container for displaying the generated lotto numbers.
- Links to `main.js` with `defer` and `type="text/javascript"` attributes to ensure the script runs after the HTML is parsed.

### `main.js`
- **`generateLottoSet()` function:**
    - Generates a set of 6 unique random numbers between 1 and 45 (inclusive).
    - Uses a `Set` to ensure uniqueness.
    - Sorts the generated numbers in ascending order before returning them.
- **`displayLottoNumbers()` function:**
    - Retrieves the `lotto-results` div element.
    - If the element is not found, it logs an error to the console.
    - Constructs an HTML string containing a heading "Lotto 6/45 - 7 Sets".
    - Loops 7 times, calling `generateLottoSet()` in each iteration to get a new set of numbers.
    - Appends each generated set to the HTML string within a `<p>` tag, formatted as "Set X: num1, num2, num3, num4, num5, num6".
    - Sets the `innerHTML` of the `lotto-results` div to the constructed HTML string.
- **Event Listener:**
    - An event listener is added to the `DOMContentLoaded` event to ensure `displayLottoNumbers()` is called once the entire HTML document has been loaded and parsed.

### `style.css`
- Provides basic styling for the `body` element (font, margin, background color, text color).
- Styles the `#lotto-results` container for better visual presentation (background, padding, border-radius, box-shadow, max-width, center alignment).
- Styles the `h2` within `#lotto-results` (color, text-align, margin).
- Styles the `p` elements within `#lotto-results` to display each lotto set clearly (font-size, padding, border-bottom, flex display for spacing).
- Removes the bottom border from the last `p` element for a cleaner look.

## Current Requested Change:
The user requested to create code for generating 7 sets of 6/45 lotto numbers.

## Steps for Current Change:
1. Create a function to generate a single set of 6 unique numbers between 1 and 45 in `main.js`. (Completed)
2. Call the number generation function 7 times to get 7 sets of numbers in `main.js`. (Completed)
3. Display the generated numbers on the `index.html` page. (Completed)
4. Add basic styling to `style.css` for better readability. (Completed)
