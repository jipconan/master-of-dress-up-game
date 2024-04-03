// Manage the logic for selecting and changing clothes for the player.
// Handle interactions with outfit items (top, bottom, cap, shoes).
// Update the player's outfit based on the selected clothes.

/////////////////////// CREATE VARIABLES ///////////////////////

let playerOutfit = [];
const slotsTotal = 4;

// Import image assets
const topImport = [
  "./assets/tops/tops-red.png",
  "./assets/tops/tops-orange.png",
  "./assets/tops/tops-yellow.png",
  "./assets/tops/tops-green.png",
  "./assets/tops/tops-blue.png",
];

const bottomImport = [
  "./assets/bottoms/bottoms-black.png",
  "./assets/bottoms/bottoms-white.png",
  "./assets/bottoms/bottoms-blue.png",
  "./assets/bottoms/bottoms-beige.png",
  "./assets/bottoms/bottoms-grey.png",
];

const capImport = [
  "./assets/caps/caps-black.png",
  "./assets/caps/caps-white.png",
  "./assets/caps/caps-blue.png",
  "./assets/caps/caps-red.png",
  "./assets/caps/caps-double.png",
]

const shoeImport = [
  "./assets/shoes/shoes-black.png",
  "./assets/shoes/shoes-white.png",
  "./assets/shoes/shoes-blue.png",
  "./assets/shoes/shoes-red.png",
  "./assets/shoes/shoes-brown.png",
]

// Define clothes data
const wardrobeClothes = {
  slot1: topImport[0],
  slot2: bottomImport[0],  
  slot3: capImport[0], 
  slot4: shoeImport[0],
};

const tableClothes = {
  slot1: topImport[1], 
  slot2: bottomImport[1], 
  slot3: capImport[1], 
  slot4: shoeImport[1], 
};

const bedClothes = {
  slot1: topImport[2], 
  slot2: bottomImport[2], 
  slot3: capImport[2],
  slot4: shoeImport[2],
};

const shelfClothes = {
  slot1: topImport[3], 
  slot2: bottomImport[3], 
  slot3: capImport[3], 
  slot4: shoeImport[3],
};

// Define winning outfit with my own determined outfit
const winningOutfits = [
  { // Outfit 1
    top: { category: 'top', imageUrl: topImport[0] },
    bottom: { category: 'bottom', imageUrl: bottomImport[1] },
    cap: { category: 'cap', imageUrl: capImport[2] },
    shoe: { category: 'shoe', imageUrl: shoeImport[3] },
    outfitDisplay: "./assets/outfit/outfit1-ph.png",
  },
  { // Outfit 2
    top: { category: 'top', imageUrl: topImport[1] },
    bottom: { category: 'bottom', imageUrl: bottomImport[2] },
    cap: { category: 'cap', imageUrl: capImport[3] },
    shoe: { category: 'shoe', imageUrl: shoeImport[0] },
    outfitDisplay: "./assets/outfit/outfit2-ph.png",
  },
  { // Outfit 3
    top: { category: 'top', imageUrl: topImport[2] },
    bottom: { category: 'bottom', imageUrl: bottomImport[3] },
    cap: { category: 'cap', imageUrl: capImport[0] },
    shoe: { category: 'shoe', imageUrl: shoeImport[1] },
    outfitDisplay: "./assets/outfit/outfit3-ph.png",
  },
  { // Outfit 4
    top: { category: 'top', imageUrl: topImport[3] },
    bottom: { category: 'bottom', imageUrl: bottomImport[0] },
    cap: { category: 'cap', imageUrl: capImport[1] },
    shoe: { category: 'shoe', imageUrl: shoeImport[2] },
    outfitDisplay: "./assets/outfit/outfit4-ph.png",
  },
  { // Outfit 5
    top: { category: 'top', imageUrl: topImport[0] },
    bottom: { category: 'bottom', imageUrl: bottomImport[2] },
    cap: { category: 'cap', imageUrl: capImport[3] },
    shoe: { category: 'shoe', imageUrl: shoeImport[1] },
    outfitDisplay: "./assets/outfit/outfit5-ph.png",
  }
];


/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////
/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// Function to populate the slots with clothes based on the selected furniture
function populateSlots(selectedFurniture) {
  // Clear existing slots
  clearSlots();

  let clothes;

  // Determine the clothes based on the selected furniture
  switch (selectedFurniture) {
    case "wardrobe":
      clothes = wardrobeClothes;
      break;
    case "table":
      clothes = tableClothes;
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

  // Iterate over the selected furniture's clothes slots
  for (let i = 1; i <= slotsTotal; i++) { 
    const slot = `slot${i}`;
    const imageUrl = clothes[slot];
    const category = getCategoryFromSlot(slot); // Get clothing category from the slot

    // Create image element for the clothing item
    const img = document.createElement('img');

    // Set src attribute
    img.setAttribute('src', imageUrl);
    img.alt = slot;
    img.classList.add('clothing-item');

    // Add event listener to handle selection
    img.addEventListener('click', function() {

      // Check if the clothing item is already in the playerOutfit array
      const index = playerOutfit.findIndex(item => item.slot === slot);
      if (index === -1) {

        // If not, add the new clothing item to the playerOutfit array
        playerOutfit.push({ slot, category, imageUrl });

      } else {

        // If the same slot of clothing is already selected, replace it
        playerOutfit[index] = { slot, category, imageUrl };
      }

      // Update the player's appearance
      updatePlayerAppearance();

      // Console log playerOutfit
      console.log("Updated playerOutfit:", playerOutfit);

    });

    // Append the image to the corresponding slot
    const slotElement = document.getElementById(`slot${i}`);
    if (slotElement) {
      slotElement.appendChild(img);
    }
  }
}

// Function to get the clothing category from the slot name
function getCategoryFromSlot(slot) {
  switch (slot) {
    case 'slot1':
      return 'top';
    case 'slot2':
      return 'bottom';
    case 'slot3':
      return 'cap';
    case 'slot4':
      return 'shoe';
    default:
      return '';
  }
}



// Function to clear the content of all slots
function clearSlots() {

  // Iterate through all slot elements and clear their content
  for (let i = 1; i <= slotsTotal; i++) { 

    let slot = document.getElementById(`slot${i}`);

    // Clear the content
    slot.innerHTML = ''; 
  }
}

// Function to select a random winning outfit
function selectRandomWinningOutfit() {
  const randomIndex = Math.floor(Math.random() * winningOutfits.length);
  return winningOutfits[randomIndex];
}

// Function to display the winning outfit image
function displayWinningOutfit(outfitDisplay) {
  const outfitContainer = document.getElementById('outfitImage');
  outfitContainer.innerHTML = `<img src="${outfitDisplay}" alt="Winning Outfit">`;
}

// Function to update player appearance
function updatePlayerAppearance() {

  // Clear all player outfit elements
  document.getElementById('top').innerHTML = '';
  document.getElementById('bottom').innerHTML = '';
  document.getElementById('cap').innerHTML = '';
  document.getElementById('shoe').innerHTML = '';

  // Iterate over each clothing item in the player's outfit
  playerOutfit.forEach(item => {
    const slot = item.slot;
    const imageUrl = item.imageUrl;

    // Create img element for the clothing item
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl); // Set src attribute
    img.alt = slot;

    // Append the image to the corresponding player outfit element
    switch (slot) {
      case 'slot1':
        document.getElementById('top').appendChild(img);
        break;
      case 'slot2':
        document.getElementById('bottom').appendChild(img);
        break;
      case 'slot3':
        document.getElementById('cap').appendChild(img);
        break;
      case 'slot4':
        document.getElementById('shoe').appendChild(img);
        break;
      default:
        console.log("Invalid slot:", slot);
        break;
    }
  });
}


// Function to reset the player's appearance
function resetPlayerAppearance() {

  // Clear all player outfit elements
  document.getElementById('top').innerHTML = '';
  document.getElementById('bottom').innerHTML = '';
  document.getElementById('cap').innerHTML = '';
  document.getElementById('shoe').innerHTML = '';

  // Clear playerOutfit array
  playerOutfit = [];
}

// Function to match the player's outfit with the provided winning outfit
function matchOutfit(winningOutfit) {
  // Check if playerOutfit is empty
  if (playerOutfit.length === 0) {
    console.log("Player outfit is empty.");
    return false;
  }

  // Check if all categories are present in playerOutfit
  const categories = ['top', 'bottom', 'cap', 'shoe'];
  const playerCategories = playerOutfit.map(item => item.category);
  if (!categories.every(category => playerCategories.includes(category))) {
    console.log("Not all categories are present in player outfit.");
    return false;
  }

  // Iterate over each category and check if it matches the winning outfit
  for (let category of categories) {
    const playerItem = playerOutfit.find(item => item.category === category);
    const winningItem = winningOutfit[category];

    // If the winningItem is not found or its imageUrl doesn't match, return false
    if (!winningItem || playerItem.imageUrl !== winningItem.imageUrl || playerItem.category !== winningItem.category) {
      console.log("Outfits do not match.");
      return false;
    }
  }

  // If all categories match, log success and return true
  console.log("Outfits match");
  return true;
}








/////////////////////// EXPORT ///////////////////////

export { populateSlots, clearSlots, selectRandomWinningOutfit, displayWinningOutfit, resetPlayerAppearance, matchOutfit };
