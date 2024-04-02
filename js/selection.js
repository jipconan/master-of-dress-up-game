// Manage the logic for selecting and changing clothes for the player.
// Handle interactions with outfit items (top, bottom, cap, shoes).
// Update the player's outfit based on the selected clothes.

/////////////////////// CREATE VARIABLES ///////////////////////

// Define clothes data
const wardrobeClothes = {
  top: "./assets/tops/tops-red.png",
  bottom: "./assets/bottoms/bottoms-black.png",
  cap: "./assets/caps/caps-black.png",
  shoe: "./assets/shoes/shoes-black.png",
  other: "./assets/tops/tops-blue.png"
};

const tableClothes = {
  top: "./assets/tops/tops-orange.png",
  bottom: "./assets/bottoms/bottoms-white.png",
  cap: "./assets/caps/caps-white.png",
  shoe: "./assets/shoes/shoes-white.png",
  other: "./assets/bottoms/bottoms-grey.png",
};

const bedClothes = {
  top: "./assets/tops/tops-yellow.png",
  bottom: "./assets/bottoms/bottoms-blue.png",
  cap: "./assets/caps/caps-blue.png",
  shoe: "./assets/shoes/shoes-blue.png",
  other: "./assets/caps/caps-double.png",
};

const shelfClothes = {
  top: "./assets/tops/tops-green.png",
  bottom: "./assets/bottoms/bottoms-beige.png",
  cap: "./assets/caps/caps-red.png",
  shoe: "./assets/shoes/shoes-red.png",
  other: "./assets/shoes/shoes-brown.png",
};

// Define winning outfit with my own determined outfit
const winningOutfits = [
  { // Outfit 1
    top: wardrobeClothes.top,
    bottom: tableClothes.bottom,
    cap: bedClothes.cap,
    shoe: shelfClothes.shoe,
    imageUrl: "./assets/outfit/outfit1-ph.png",
  },
  { // Outfit 2
    top: tableClothes.top,
    bottom: bedClothes.bottom,
    cap: shelfClothes.cap,
    shoe: wardrobeClothes.shoe,
    imageUrl: "./assets/outfit/outfit2-ph.png",
  },
  { // Outfit 3
    top: bedClothes.top,
    bottom: shelfClothes.bottom,
    cap: wardrobeClothes.cap,
    shoe: tableClothes.shoe,
    imageUrl: "./assets/outfit/outfit3-ph.png",
  },
  { // Outfit 4
    top: shelfClothes.top,
    bottom: wardrobeClothes.bottom,
    cap: tableClothes.cap,
    shoe: bedClothes.shoe,
    imageUrl: "./assets/outfit/outfit4-ph.png",
  },
  { // Outfit 5
    top: wardrobeClothes.top,
    bottom: bedClothes.bottom,
    cap: shelfClothes.cap,
    shoe: tableClothes.shoe,
    imageUrl: "./assets/outfit/outfit5-ph.png",
  }
];

/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////
/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// Function to populate the slots with clothes
function populateSlots(category) {
  // Clear existing slots
  clearSlots();

  // Define clothes object based on the category
  let clothes = {};
  if (category === 'wardrobe') {
    clothes = wardrobeClothes;
  } else if (category === 'table') {
    clothes = tableClothes;
  } else if (category === 'bed') {
    clothes = bedClothes;
  } else if (category === 'shelf') {
    clothes = shelfClothes;
  }

  // Populate the slots with clothes
  let index = 1;
  for (const type in clothes) {
    if (clothes.hasOwnProperty(type)) {
      const imageUrl = clothes[type];
      const slot = document.getElementById(`slot${index}`);
      if (slot && imageUrl) {
        slot.innerHTML = createClothingImage(imageUrl, type);
        index++;
      }
    }
  }
}

function createClothingImage(imageUrl, type) {
  return `<img src="${imageUrl}" alt="${type}" onclick="selectClothing('${type}', '${imageUrl}')">`;
}

// Function to clear the content of all slots
function clearSlots() {
  // Iterate through all slot elements and clear their content
  for (let i = 1; i <= 5; i++) {
    let slot = document.getElementById(`slot${i}`);
    // Clear the content
    slot.innerHTML = ''; 
  }
}

// Function to display the winning outfit image
function displayWinningOutfit() {
  const outfitContainer = document.getElementById('outfitImage');
  outfitContainer.innerHTML = `<img src="./assets/outfit/outfit1-ph.png">`;
}

// Function to select a random winning outfit
function selectRandomWinningOutfit() {
}

// Function to get the player's outfit
function getPlayerOutfit() {

}

// Function to match the player's outfit with the randomly selected winning outfit
function matchOutfit(playerOutfit) {

}

export { populateSlots, clearSlots, selectRandomWinningOutfit, displayWinningOutfit, getPlayerOutfit, matchOutfit };
