// Mock data for the last 20 Powerball winning numbers
// Each array represents [white_ball_1, wb_2, wb_3, wb_4, wb_5, powerball]
const pastWinningNumbers = [
  [10, 33, 41, 47, 56, 10],
  [22, 24, 40, 52, 64, 10],
  [5, 25, 38, 52, 67, 4],
  [17, 22, 36, 37, 52, 24],
  [4, 8, 19, 28, 30, 11],
  [16, 23, 30, 44, 58, 2],
  [9, 11, 27, 59, 66, 19],
  [2, 22, 29, 39, 42, 23],
  [1, 4, 12, 36, 49, 13],
  [7, 10, 11, 13, 24, 24],
  [19, 29, 35, 36, 46, 15],
  [20, 23, 33, 34, 59, 21],
  [12, 18, 20, 39, 61, 10],
  [2, 13, 23, 34, 65, 25],
  [14, 21, 22, 39, 43, 26],
  [28, 35, 41, 46, 54, 4],
  [1, 2, 25, 48, 53, 1],
  [21, 24, 33, 55, 69, 18],
  [30, 31, 38, 48, 62, 12],
  [1, 12, 20, 33, 66, 17]
];

function getFrequency(numbers, isPowerball) {
  const frequencyMap = new Map();
  for (const set of numbers) {
    if (isPowerball) {
      const powerball = set[5];
      frequencyMap.set(powerball, (frequencyMap.get(powerball) || 0) + 1);
    } else {
      for (let i = 0; i < 5; i++) {
        const num = set[i];
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      }
    }
  }
  return frequencyMap;
}

function generateHighProbabilitySet(whiteBallFreq, powerballFreq) {
  const weightedWhiteBalls = [];
  for (const [num, freq] of whiteBallFreq.entries()) {
    for (let i = 0; i < freq; i++) {
      weightedWhiteBalls.push(num);
    }
  }

  const weightedPowerballs = [];
  for (const [num, freq] of powerballFreq.entries()) {
    for (let i = 0; i < freq; i++) {
      weightedPowerballs.push(num);
    }
  }
  
  const selectedWhiteBalls = new Set();
  while (selectedWhiteBalls.size < 5) {
    const randomIndex = Math.floor(Math.random() * weightedWhiteBalls.length);
    selectedWhiteBalls.add(weightedWhiteBalls[randomIndex]);
  }
  
  const powerballRandomIndex = Math.floor(Math.random() * weightedPowerballs.length);
  const selectedPowerball = weightedPowerballs[powerballRandomIndex];

  return {
    whiteBalls: Array.from(selectedWhiteBalls).sort((a, b) => a - b),
    powerball: selectedPowerball
  };
}

function generateAndDisplayNumbers() {
  const whiteBallFreq = getFrequency(pastWinningNumbers, false);
  const powerballFreq = getFrequency(pastWinningNumbers, true);
  
  const powerballSets = [];
  for (let i = 0; i < 5; i++) {
    powerballSets.push(generateHighProbabilitySet(whiteBallFreq, powerballFreq));
  }
  displayPowerballNumbers(powerballSets);
}

function displayPowerballNumbers(sets) {
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
    
    set.whiteBalls.forEach(num => {
      const numberSpan = document.createElement('span');
      numberSpan.classList.add('number');
      numberSpan.textContent = num;
      numbersDiv.appendChild(numberSpan);
    });
    
    const powerballSpan = document.createElement('span');
    powerballSpan.classList.add('number', 'powerball');
    powerballSpan.textContent = set.powerball;
    numbersDiv.appendChild(powerballSpan);
    
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

/* SNS Sharing Logic */
function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
            break;
        case 'threads':
            shareUrl = `https://www.threads.net/intent/post?text=${text}%20${url}`;
            break;
        case 'instagram':
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied! Instagram does not support direct web sharing. Open Instagram to paste and share?');
                window.open('https://www.instagram.com/', '_blank');
            });
            return;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}