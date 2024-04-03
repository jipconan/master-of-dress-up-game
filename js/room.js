// Implement logic for handling furniture selection.
// Update the outfit slots based on the selected furniture.

/////////////////////// IMPORT JS FILES ///////////////////////

import { populateSlots } from './selection.js';

/////////////////////// CREATE VARIABLES //////////////////////
/////////////////////// CACHE DOM ELEMENTS ///////////////////////
// Cache Dom elements
const roomDom = document.getElementById('roomImage');
const playerDom = document.getElementById('playerImage');
const funitureDom = document.getElementById('funitureSelect');
const wardrobeDom = document.getElementById('wardrobeImage');
const tableDom = document.getElementById('tableImage');
const shelfDom = document.getElementById('shelfImage');
const bedDom = document.getElementById('bedImage');

/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////

class Room {
    constructor() {

    }

    generateRoom () {
        document.querySelector('.game-screen').style.display = 'block'; 
    }

    selectFurniture () {
        wardrobeDom.addEventListener('click', function() {
            tableDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            wardrobeDom.classList.add('selected');
            populateSlots('wardrobe');
            funitureDom.textContent = 'WARDROBE';
        });
        
        tableDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            tableDom.classList.add('selected');
            populateSlots('table');
            funitureDom.textContent = 'TABLE';
        });
        
        bedDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            tableDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            bedDom.classList.add('selected');
            populateSlots('bed');
            funitureDom.textContent = 'BED';
        });
        
        shelfDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            tableDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.add('selected');
            populateSlots('shelf');
            funitureDom.textContent = 'SHELF';
        });
    }
}

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

// Generate Room function
function createRoom () {
    const newRoom = new Room()
    newRoom.generateRoom()
    newRoom.selectFurniture()
 }

 function resetFurnitureSelect () {
    wardrobeDom.classList.remove('selected');
    bedDom.classList.remove('selected');
    tableDom.classList.remove('selected');
    shelfDom.classList.remove('selected');
    funitureDom.textContent = ''
}

/////////////////////// EXPORT ///////////////////////

export { createRoom, resetFurnitureSelect };