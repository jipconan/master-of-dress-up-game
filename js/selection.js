import { timerInstance, winningOutfit } from "./main.js";

let playerOutfit = [];
const slotsTotal = 5;

const topImport = [
  { category: 'top', tag: 'top1', imageUrl: "./assets/tops/tops-red.png" },
  { category: 'top', tag: 'top2', imageUrl: "./assets/tops/tops-orange.png" },
  { category: 'top', tag: 'top3', imageUrl: "./assets/tops/tops-yellow.png" },
  { category: 'top', tag: 'top4', imageUrl: "./assets/tops/tops-green.png"},
  { category: 'top', tag: 'top5', imageUrl: "./assets/tops/tops-blue.png"},
];

const bottomImport = [
  { category: 'bottom', tag: 'bottom1', imageUrl: "./assets/bottoms/bottoms-black.png" },
  { category: 'bottom', tag: 'bottom2', imageUrl: "./assets/bottoms/bottoms-white.png" },
  { category: 'bottom', tag: 'bottom3', imageUrl: "./assets/bottoms/bottoms-blue.png" },
  { category: 'bottom', tag: 'bottom4', imageUrl: "./assets/bottoms/bottoms-beige.png"},
  { category: 'bottom', tag: 'bottom5', imageUrl: "./assets/bottoms/bottoms-grey.png"},
];

const capImport = [
  { category: 'cap', tag: 'cap1', imageUrl: "./assets/caps/caps-black.png" },
  { category: 'cap', tag: 'cap2', imageUrl: "./assets/caps/caps-white.png" },
  { category: 'cap', tag: 'cap3', imageUrl: "./assets/caps/caps-blue.png" },
  { category: 'cap', tag: 'cap4', imageUrl: "./assets/caps/caps-red.png"},
  { category: 'cap', tag: 'cap5', imageUrl: "./assets/caps/caps-double.png"},
];

const shoeImport = [
  { category: 'shoe', tag: 'shoe1', imageUrl: "./assets/shoes/shoes-black.png" },
  { category: 'shoe', tag: 'shoe2', imageUrl: "./assets/shoes/shoes-white.png" },
  { category: 'shoe', tag: 'shoe3', imageUrl: "./assets/shoes/shoes-blue.png" },
  { category: 'shoe', tag: 'shoe4', imageUrl: "./assets/shoes/shoes-red.png"},
  { category: 'shoe', tag: 'shoe5', imageUrl: "./assets/shoes/shoes-brown.png"},
];

const allClothes = [...topImport, ...bottomImport, ...capImport, ...shoeImport];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledClothes = shuffleArray(allClothes);

const wardrobeClothes = {};
const basketClothes = {};
const bedClothes = {};
const shelfClothes = {};

for (let i = 0; i < 5; i++) {
  wardrobeClothes['slot' + (i + 1)] = shuffledClothes[i];
}

for (let i = 0; i < 5; i++) {
  basketClothes['slot' + (i + 1)] = shuffledClothes[i + 5];
}

for (let i = 0; i < 5; i++) {
  bedClothes['slot' + (i + 1)] = shuffledClothes[i + 10];
}

for (let i = 0; i < 5; i++) {
  shelfClothes['slot' + (i + 1)] = shuffledClothes[i + 15];
}

function populateSlots(selectedFurniture) {

  clearSlots();

  let clothes = {};

  switch (selectedFurniture) {
      case "wardrobe":
          clothes = wardrobeClothes;
          break;
      case "basket":
          clothes = basketClothes;
          break;
      case "bed":
          clothes = bedClothes;
          break;
      case "shelf":
          clothes = shelfClothes;
          break;
      default:
          console.log("Invalid furniture selected");
          return;
  }

  for (let i = 1; i <= slotsTotal; i++) {
      const slot = `slot${i}`;
      const imageUrl = clothes[slot].imageUrl;
      const category = clothes[slot].category;
      const tag = clothes[slot].tag;

      const img = document.createElement('img');
      Object.assign(img, {
          src: imageUrl,
          alt: slot,
          className: 'clothing-item',
      });

      img.addEventListener('click', function () {
          const existingIndex = playerOutfit.findIndex(item => item.category === category);
          const matchOutfit = isMatchingOutfit({ category, tag });
          if (matchOutfit) {
              if (existingIndex !== -1) {
                  playerOutfit[existingIndex] = { category, tag, imageUrl };
              } else {
                  playerOutfit.push({ category, tag, imageUrl });
              }
              timerInstance.remainingTime += 2;
              timerInstance.updateTimerDisplay();
          } else {
              if (existingIndex === -1) {
                  playerOutfit.push({ category, tag, imageUrl });
              } else {
                  playerOutfit[existingIndex] = { category, tag, imageUrl };
              }
          }
          updatePlayerAppearance();

          console.log("Updated playerOutfit:", playerOutfit);
      });

      const slotElement = document.getElementById(`slot${i}`);
      if (slotElement) {
          slotElement.appendChild(img);
      }
  }
}

function isMatchingOutfit(selectedClothing) {
  for (const key in winningOutfit) {
      if (winningOutfit.hasOwnProperty(key)) {
          if (winningOutfit[key].tag === selectedClothing.tag) {
              return true;
          }
      }
  }
  return false; 
}

function clearSlots() {

  for (let i = 1; i <= slotsTotal; i++) { 

    let slot = document.getElementById(`slot${i}`);

    slot.innerHTML = ''; 
  }
}

function updatePlayerAppearance() {

  document.getElementById('top').innerHTML = '';
  document.getElementById('bottom').innerHTML = '';
  document.getElementById('cap').innerHTML = '';
  document.getElementById('shoe').innerHTML = '';

  playerOutfit.forEach(item => {
    const slot = item.slot;
    const imageUrl = item.imageUrl;
    const img = document.createElement('img');

      Object.assign(img, { 
        src: imageUrl, 
        alt: slot,
      });

    switch (item.category) {
      case 'top':
        document.getElementById('top').appendChild(img);
        break;
      case 'bottom':
        document.getElementById('bottom').appendChild(img);
        break;
      case 'cap':
        document.getElementById('cap').appendChild(img);
        break;
      case 'shoe':
        document.getElementById('shoe').appendChild(img);
        break;
      default:
        console.log("Invalid category:", item.category);
        break;
    }
  });
}

function resetPlayerAppearance() {

  document.getElementById('top').innerHTML = '';
  document.getElementById('bottom').innerHTML = '';
  document.getElementById('cap').innerHTML = '';
  document.getElementById('shoe').innerHTML = '';

  playerOutfit = [];
}

export {
  topImport, 
  bottomImport, 
  capImport, 
  shoeImport, 
  wardrobeClothes, 
  basketClothes, 
  bedClothes, 
  shelfClothes, 
  playerOutfit, 
  populateSlots, clearSlots, updatePlayerAppearance, resetPlayerAppearance };