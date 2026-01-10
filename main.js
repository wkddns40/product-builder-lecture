// Mock data for the last 20 winning numbers
const pastWinningNumbers = [
  [1, 4, 16, 23, 31, 41],
  [8, 16, 28, 30, 31, 44],
  [3, 6, 18, 29, 35, 39],
  [10, 12, 15, 25, 33, 43],
  [5, 11, 20, 22, 34, 40],
  [2, 7, 9, 19, 26, 38],
  [13, 14, 17, 21, 24, 32],
  [1, 6, 11, 22, 36, 45],
  [4, 8, 10, 20, 27, 37],
  [9, 13, 19, 24, 30, 42],
  [7, 14, 21, 28, 35, 42],
  [3, 12, 18, 26, 33, 44],
  [5, 10, 15, 20, 25, 30],
  [2, 9, 11, 23, 34, 41],
  [1, 16, 17, 29, 38, 45],
  [6, 8, 14, 22, 27, 36],
  [4, 7, 13, 19, 32, 40],
  [18, 21, 24, 31, 37, 43],
  [5, 12, 26, 33, 39, 42],
  [2, 11, 15, 28, 35, 44]
];

function getFrequency(numbers) {
  const frequencyMap = new Map();
  for (const set of numbers) {
    for (const num of set) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  }
  return frequencyMap;
}

function generateHighProbabilitySet(frequencyMap) {
  const weightedNumbers = [];
  for (const [num, freq] of frequencyMap.entries()) {
    for (let i = 0; i < freq; i++) {
      weightedNumbers.push(num);
    }
  }

  const selectedNumbers = new Set();
  while (selectedNumbers.size < 6) {
    const randomIndex = Math.floor(Math.random() * weightedNumbers.length);
    selectedNumbers.add(weightedNumbers[randomIndex]);
  }
  return Array.from(selectedNumbers).sort((a, b) => a - b);
}

function generateAndDisplayNumbers() {
  const frequencyMap = getFrequency(pastWinningNumbers);
  const lottoSets = [];
  for (let i = 0; i < 5; i++) {
    lottoSets.push(generateHighProbabilitySet(frequencyMap));
  }
  displayLottoNumbers(lottoSets);
}

function displayLottoNumbers(sets) {
  const container = document.getElementById('numbers-container');
  if (!container) {
    console.error("Element with ID 'numbers-container' not found.");
    return;
  }
  container.innerHTML = '';
  for (let i = 0; i < sets.length; i++) {
    const set = sets[i];
    const setDiv = document.createElement('div');
    setDiv.classList.add('lotto-set');
    setDiv.innerHTML = `<strong>Set ${i + 1}:</strong>`;
    
    const numbersDiv = document.createElement('div');
    numbersDiv.classList.add('numbers');
    set.forEach(num => {
      const numberSpan = document.createElement('span');
      numberSpan.classList.add('number');
      numberSpan.textContent = num;
      numbersDiv.appendChild(numberSpan);
    });
    setDiv.appendChild(numbersDiv);
    container.appendChild(setDiv);
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    if(generateBtn) {
        generateBtn.addEventListener('click', generateAndDisplayNumbers);
    }
});