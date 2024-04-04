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

    // Get clothing category from the slot
    const category = getCategoryFromSlot(slot);

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

    // Set src attribute
    img.setAttribute('src', imageUrl);
    img.alt = slot;

    // Append the image to the corresponding player outfit element
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

/////////////////////// EXPORT ///////////////////////

// Export functions and variables
export {
  topImport, 
  bottomImport, 
  capImport, 
  shoeImport, 
  wardrobeClothes, 
  tableClothes, 
  bedClothes, 
  shelfClothes, 
  playerOutfit, 
  populateSlots, getCategoryFromSlot, clearSlots, updatePlayerAppearance, resetPlayerAppearance };