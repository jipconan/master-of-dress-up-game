import { populateSlots } from './selection.js';

const funitureDom = document.getElementById('funitureSelect');
const wardrobeDom = document.getElementById('wardrobeImage');
const basketDom = document.getElementById('basketImage');
const shelfDom = document.getElementById('shelfImage');
const bedDom = document.getElementById('bedImage');
const wardrobe2Dom = document.getElementById('wardrobeImage2');
const basket2Dom = document.getElementById('basketImage2');
const shelf2Dom = document.getElementById('shelfImage2');
const bed2Dom = document.getElementById('bedImage2');
const wardrobe3Dom = document.getElementById('wardrobeImage3');
const basket3Dom = document.getElementById('basketImage3');
const shelf3Dom = document.getElementById('shelfImage3');
const bed3Dom = document.getElementById('bedImage3');

class Room {
    constructor() {

    }

    generateRoom () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.getElementById('roomImage').style.display = 'block'; 
        document.getElementById('roomImage2').style.display = 'none'; 
        document.getElementById('roomImage3').style.display = 'none';
        document.querySelector('.furniture-set').style.display = 'block';
        document.querySelector('.furniture2-set').style.display = 'none'; 
        document.querySelector('.furniture3-set').style.display = 'none';  
        document.getElementById('bubbleImage').style.display = 'block'; 
        document.getElementById('bubbleImage2').style.display = 'none'; 
        document.getElementById('bubbleImage3').style.display = 'none';
    }

    generateRoom2 () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.getElementById('roomImage2').style.display = 'block';
        document.getElementById('roomImage3').style.display = 'none'; 
        document.getElementById('roomImage').style.display = 'none';
        document.querySelector('.furniture2-set').style.display = 'block';
        document.querySelector('.furniture3-set').style.display = 'none'; 
        document.querySelector('.furniture-set').style.display = 'none'; 
        document.getElementById('bubbleImage2').style.display = 'block'; 
        document.getElementById('bubbleImage3').style.display = 'none'; 
        document.getElementById('bubbleImage').style.display = 'none';   
    }

    generateRoom3 () {
        document.querySelector('.game-screen').style.display = 'block'; 
        document.getElementById('roomImage3').style.display = 'block'; 
        document.getElementById('roomImage').style.display = 'none'; 
        document.getElementById('roomImage2').style.display = 'none';
        document.querySelector('.furniture3-set').style.display = 'block';
        document.querySelector('.furniture-set').style.display = 'none'; 
        document.querySelector('.furniture2-set').style.display = 'none';
        document.getElementById('bubbleImage3').style.display = 'block'; 
        document.getElementById('bubbleImage').style.display = 'none'; 
        document.getElementById('bubbleImage2').style.display = 'none';
    }

    resetRoom () {
        document.getElementById('roomImage').style.display = 'none'; 
        document.getElementById('roomImage2').style.display = 'none'; 
        document.getElementById('roomImage3').style.display = 'none'; 
        document.querySelector('.furniture-set').style.display = 'block';
        document.querySelector('.furniture2-set').style.display = 'none'; 
        document.querySelector('.furniture3-set').style.display = 'none';  
        document.getElementById('bubbleImage').style.display = 'none'; 
        document.getElementById('bubbleImage2').style.display = 'none'; 
        document.getElementById('bubbleImage3').style.display = 'none'; 
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
        wardrobe2Dom.addEventListener('click', function() {
            basket2Dom.classList.remove('selected');
            bed2Dom.classList.remove('selected');
            shelf2Dom.classList.remove('selected');
            wardrobe2Dom.classList.add('selected');

            populateSlots('wardrobe');
            funitureDom.textContent = 'WARDROBE';
        });
        
        basket2Dom.addEventListener('click', function() {
            wardrobe2Dom.classList.remove('selected');
            bed2Dom.classList.remove('selected');
            shelf2Dom.classList.remove('selected');
            basket2Dom.classList.add('selected');
            populateSlots('basket');
            funitureDom.textContent = 'BASKET';
        });
        
        bed2Dom.addEventListener('click', function() {
            wardrobe2Dom.classList.remove('selected');
            basket2Dom.classList.remove('selected');
            shelf2Dom.classList.remove('selected');
            bed2Dom.classList.add('selected');
            populateSlots('bed');
            funitureDom.textContent = 'BED';
        });
        
        shelf2Dom.addEventListener('click', function() {
            wardrobe2Dom.classList.remove('selected');
            basket2Dom.classList.remove('selected');
            bed2Dom.classList.remove('selected');
            shelf2Dom.classList.add('selected');
            populateSlots('shelf');
            funitureDom.textContent = 'SHELF';
        });

        wardrobe3Dom.addEventListener('click', function() {
            basket3Dom.classList.remove('selected');
            bed3Dom.classList.remove('selected');
            shelf3Dom.classList.remove('selected');
            wardrobe3Dom.classList.add('selected');

            populateSlots('wardrobe');
            funitureDom.textContent = 'WARDROBE';
        });
        
        basket3Dom.addEventListener('click', function() {
            wardrobe3Dom.classList.remove('selected');
            bed3Dom.classList.remove('selected');
            shelf3Dom.classList.remove('selected');
            basket3Dom.classList.add('selected');
            populateSlots('basket');
            funitureDom.textContent = 'BASKET';
        });
        
        bed3Dom.addEventListener('click', function() {
            wardrobe3Dom.classList.remove('selected');
            basket3Dom.classList.remove('selected');
            shelf3Dom.classList.remove('selected');
            bed3Dom.classList.add('selected');
            populateSlots('bed');
            funitureDom.textContent = 'BED';
        });
        
        shelf3Dom.addEventListener('click', function() {
            wardrobe3Dom.classList.remove('selected');
            basket3Dom.classList.remove('selected');
            bed3Dom.classList.remove('selected');
            shelf3Dom.classList.add('selected');
            populateSlots('shelf');
            funitureDom.textContent = 'SHELF';
        });
        
    }

}

 function resetFurnitureSelect () {
    wardrobeDom.classList.remove('selected');
    bedDom.classList.remove('selected');
    basketDom.classList.remove('selected');
    shelfDom.classList.remove('selected');

    wardrobe2Dom.classList.remove('selected');
    basket2Dom.classList.remove('selected');
    bed2Dom.classList.remove('selected');
    shelf2Dom.classList.remove('selected');

    wardrobe3Dom.classList.remove('selected');
    basket3Dom.classList.remove('selected');
    bed3Dom.classList.remove('selected');
    shelf3Dom.classList.remove('selected');

    funitureDom.textContent = ''
}

export { Room, resetFurnitureSelect };