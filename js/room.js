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
            populateSlots('wardrobe');
            funitureDom.textContent = 'WARDROBE';
        });
        
        tableDom.addEventListener('click', function() {
            populateSlots('table');
            funitureDom.textContent = 'TABLE';
        });
        
        bedDom.addEventListener('click', function() {
            populateSlots('bed');
            funitureDom.textContent = 'BED';
        });
        
        shelfDom.addEventListener('click', function() {
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

export { createRoom };