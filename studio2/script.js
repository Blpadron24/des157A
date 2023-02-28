(function(){
'use strict';

console.log('Reading JS')


const cat= document.querySelector('#cat');
const picture= document.querySelector('#picture');
const vinyl= document.querySelector('#vinyl');
const map= document.querySelector('#map');
const boardgame= document.querySelector('#boardgame');

const one= document.querySelector('#one');
const two= document.querySelector('#two');
const three= document.querySelector('#three');
const four= document.querySelector('#four');
const five= document.querySelector('#five');

const woody= document.querySelector('#one #overlay');
const b2= document.querySelector('#two #overlay');
const paramore= document.querySelector('#three #overlay');
const pmap= document.querySelector('#four #overlay')
const bgames= document.querySelector('#five #overlay');

const des1= document.querySelector('#one #des');
const des2= document.querySelector('#two #des');
const des3= document.querySelector('#three #des');
const des4= document.querySelector('#four #des');
const des5= document.querySelector('#five #des');

// fill cat with color/ show woody
one.addEventListener('mouseover', function(event){
    event.preventDefault();
    cat.className = 'display';
    woody.className= 'display';
    des1.className= 'display';
    console.log('test display cat');

});

// hide woody
one.addEventListener('mouseout', function(event){
    event.preventDefault();
    woody.className= 'hidden';
    console.log('hide woody');

});
// fill picture with color/ show picture of brenda and I
two.addEventListener('mouseover', function(event){
    event.preventDefault();
    picture.className = 'display';
    b2.className='display';
    des2.className='display';
    console.log('test display picture');

});
// hide picture of brenda and I
two.addEventListener('mouseout', function(event){
    event.preventDefault();
    b2.className= 'hidden';
    console.log('hide b2');

});

// fill vinyl with color/show paramore
three.addEventListener('mouseover', function(event){
    event.preventDefault();
    vinyl.className = 'display';
    paramore.className= 'display';
    des3.className= 'display';
    console.log('test display vinyl');

});

// hide paramore
three.addEventListener('mouseout', function(event){
    event.preventDefault();
    paramore.className= 'hidden';
    console.log('hide b2');

});
// fill map with color/show map
four.addEventListener('mouseover', function(event){
    event.preventDefault();
    map.className = 'display';
    pmap.className = 'display';
    des4.className = 'display';
    console.log('test display map');

});

// hide map
four.addEventListener('mouseout', function(event){
    event.preventDefault();
    pmap.className= 'hidden';
    console.log('hide map');

});

// fill boardgames with color/show bgames
five.addEventListener('mouseover', function(event){
    event.preventDefault();
    boardgame.className = 'display';
    bgames.className ='display';
    des5.className = 'display';
    console.log('test display boardgames');

});

// hide bgames
five.addEventListener('mouseout', function(event){
    event.preventDefault();
    bgames.className= 'hidden';
    console.log('hide bgames');

});


})();