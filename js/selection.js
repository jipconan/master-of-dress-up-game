// Manage the logic for selecting and changing clothes for the player.
// Handle interactions with outfit items (top, bottom, cap, shoes).
// Update the player's outfit based on the selected clothes.

/////////////////////// CREATE VARIABLES ///////////////////////

let playerOutfit = [];
const slotsTotal = 4;

// Import image assets
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
  { category: 'cap', tag: 'cap1', imageUrl: "./assets/caps/caps-white.png" },
  { category: 'cap', tag: 'cap1', imageUrl: "./assets/caps/caps-blue.png" },
  { category: 'cap', tag: 'cap1', imageUrl: "./assets/caps/caps-red.png"},
  { category: 'cap', tag: 'cap1', imageUrl: "./assets/caps/caps-double.png"},
];

const shoeImport = [
  { category: 'shoe', tag: 'shoe1', imageUrl: "./assets/shoes/shoes-black.png" },
  { category: 'shoe', tag: 'shoe2', imageUrl: "./assets/shoes/shoes-white.png" },
  { category: 'shoe', tag: 'shoe3', imageUrl: "./assets/shoes/shoes-blue.png" },
  { category: 'shoe', tag: 'shoe4', imageUrl: "./assets/shoes/shoes-red.png"},
  { category: 'shoe', tag: 'shoe5', imageUrl: "./assets/shoes/shoes-brown.png"},
];

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
// playerOutfit array is unsorted order but will be used for updatePlayerOutfit later
function populateSlots(selectedFurniture) {
  // Clear existing slots
  clearSlots();

  let clothes = {};

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
    const imageUrl = clothes[slot].imageUrl;
    const category = clothes[slot].category;
    const tag = clothes[slot].tag;

    // Create image element for the clothing item
    const img = document.createElement('img');

    // Set src attribute
    Object.assign(img, { 
      src: imageUrl, 
      alt: slot,
      className: 'clothing-item',
    });

    // Add event listener to handle selection
    img.addEventListener('click', function() {

      // Check if the clothing item is already in the playerOutfit array
      const index = playerOutfit.findIndex(item => item.slot === slot);
      
      if (index === -1) {

        // If not, add the new clothing item to the playerOutfit array
        playerOutfit.push({ category, tag, imageUrl });

      } else {

        // If the same slot of clothing is already selected, replace it
        playerOutfit[index] = { category, tag, imageUrl };
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
// Using the playerOutfit array and update to html accordingly to their category
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
      Object.assign(img, { 
        src: imageUrl, 
        alt: slot,
      });

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
  populateSlots, clearSlots, updatePlayerAppearance, resetPlayerAppearance };