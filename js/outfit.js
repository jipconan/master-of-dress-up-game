// Manage the logic for selecting and changing clothes for the player.
// Handle interactions with outfit items (top, bottom, cap, shoes).
// Update the player's outfit based on the selected clothes.

/////////////////////// IMPORT JS FILES ///////////////////////

import { topImport, bottomImport, capImport, shoeImport } from './selection.js';

/////////////////////// CREATE VARIABLES ///////////////////////

// Define winning outfit with my own determined outfit
const winningOutfits = [
  { // Outfit 1
    top: topImport[0],
    bottom: bottomImport[1],
    cap: capImport[2],
    shoe: shoeImport[3],
    outfitDisplay: "./assets/outfit/outfit1-ph.png",
  },

  { // Outfit 2
    top: topImport[1],
    bottom: bottomImport[2],
    cap: capImport[3],
    shoe: shoeImport[0],
    outfitDisplay: "./assets/outfit/outfit2-ph.png",
  },

  { // Outfit 3
    top: topImport[2],
    bottom: bottomImport[3] ,
    cap: capImport[0],
    shoe: shoeImport[1],
    outfitDisplay: "./assets/outfit/outfit3-ph.png",
  },

  { // Outfit 4
    top: topImport[3],
    bottom: bottomImport[0],
    cap: capImport[1],
    shoe: shoeImport[2],
    outfitDisplay: "./assets/outfit/outfit4-ph.png",
  },
  
  { // Outfit 5
    top: topImport[0],
    bottom: bottomImport[2],
    cap: capImport[3],
    shoe: shoeImport[1],
    outfitDisplay: "./assets/outfit/outfit5-ph.png",
  }
];

/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////
/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

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

/////////////////////// EXPORT ///////////////////////

export { selectRandomWinningOutfit, displayWinningOutfit };