import { topImport, bottomImport, capImport, shoeImport } from './selection.js';

const winningOutfits = [
  { 
    top: topImport[1],
    bottom: bottomImport[1],
    cap: capImport[2],
    shoe: shoeImport[3],
    outfitDisplay: "./assets/outfit/outfit1.png",
  },

  { 
    top: topImport[1],
    bottom: bottomImport[2],
    cap: capImport[3],
    shoe: shoeImport[0],
    outfitDisplay: "./assets/outfit/outfit2.png",
  },

  { 
    top: topImport[2],
    bottom: bottomImport[3] ,
    cap: capImport[0],
    shoe: shoeImport[1],
    outfitDisplay: "./assets/outfit/outfit3.png",
  },

  { 
    top: topImport[3],
    bottom: bottomImport[0],
    cap: capImport[1],
    shoe: shoeImport[2],
    outfitDisplay: "./assets/outfit/outfit4.png",
  },
  
  { 
    top: topImport[0],
    bottom: bottomImport[2],
    cap: capImport[3],
    shoe: shoeImport[1],
    outfitDisplay: "./assets/outfit/outfit5.png",
  }
];

function selectRandomWinningOutfit() {
  const randomIndex = Math.floor(Math.random() * winningOutfits.length);
  return winningOutfits[randomIndex];
}

function displayWinningOutfit(outfitDisplay) {
  const outfitContainer = document.getElementById('outfitImage');
  outfitContainer.innerHTML = `<img src="${outfitDisplay}" alt="Winning Outfit">`;
}

export { selectRandomWinningOutfit, displayWinningOutfit };