function generateLottoSet() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function displayLottoNumbers() {
  const lottoResultsDiv = document.getElementById('lotto-results');
  if (!lottoResultsDiv) {
    console.error("Element with ID 'lotto-results' not found.");
    return;
  }

  let html = '<h2>Lotto 6/45 - 7 Sets</h2>';
  for (let i = 0; i < 7; i++) {
    const set = generateLottoSet();
    html += `<p>Set ${i + 1}: ${set.join(', ')}</p>`;
  }
  lottoResultsDiv.innerHTML = html;
}

// Call the display function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayLottoNumbers);