// Implement logic for handling furniture selection.
// Update the outfit slots based on the selected furniture.

/////////////////////// IMPORT JS FILES ///////////////////////

import { populateSlots } from './selection.js';

/////////////////////// CREATE VARIABLES //////////////////////
/////////////////////// CACHE DOM ELEMENTS ///////////////////////
// Cache Dom elements
const funitureDom = document.getElementById('funitureSelect');
const wardrobeDom = document.getElementById('wardrobeImage');
const basketDom = document.getElementById('basketImage');
const shelfDom = document.getElementById('shelfImage');
const bedDom = document.getElementById('bedImage');

/////////////////////// CREATE EVENT LISTENERS ///////////////////////
/////////////////////// CREATE CONSTRUCTOR ///////////////////////

class Room {
    constructor() {

    }

    generateRoom () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.querySelector('.room-image').style.display = 'block'; 
        document.querySelector('.room2-image').style.display = 'none'; 
        document.querySelector('.room3-image').style.display = 'none'; 
    }

    generateRoom2 () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.querySelector('.room2-image').style.display = 'block';
        document.querySelector('.room3-image').style.display = 'none'; 
        document.querySelector('.room-image').style.display = 'none';  
    }

    generateRoom3 () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.querySelector('.room3-image').style.display = 'block'; 
        document.querySelector('.room-image').style.display = 'none'; 
        document.querySelector('.room2-image').style.display = 'none'; 
    }

    resetRoom () {
        document.querySelector('.room-image').style.display = 'none'; 
        document.querySelector('.room2-image').style.display = 'none'; 
        document.querySelector('.room3-image').style.display = 'none'; 
    }

    selectFurniture () {
        wardrobeDom.addEventListener('click', function() {
            basketDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            wardrobeDom.classList.add('selected');

            populateSlots('wardrobe');
            funitureDom.textContent = 'WARDROBE';
        });
        
        basketDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            basketDom.classList.add('selected');
            populateSlots('basket');
            funitureDom.textContent = 'BASKET';
        });
        
        bedDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            basketDom.classList.remove('selected');
            shelfDom.classList.remove('selected');
            bedDom.classList.add('selected');
            populateSlots('bed');
            funitureDom.textContent = 'BED';
        });
        
        shelfDom.addEventListener('click', function() {
            wardrobeDom.classList.remove('selected');
            basketDom.classList.remove('selected');
            bedDom.classList.remove('selected');
            shelfDom.classList.add('selected');
            populateSlots('shelf');
            funitureDom.textContent = 'SHELF';
        });
    }

}

/////////////////////// CREATE FUNCTIONS TO INVOKE ELEMENTS ///////////////////////

 // Function to reset furniture selections
 function resetFurnitureSelect () {
    wardrobeDom.classList.remove('selected');
    bedDom.classList.remove('selected');
    basketDom.classList.remove('selected');
    shelfDom.classList.remove('selected');
    funitureDom.textContent = ''
}

/////////////////////// EXPORT ///////////////////////

export { Room, resetFurnitureSelect };