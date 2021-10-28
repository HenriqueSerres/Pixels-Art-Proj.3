const pixelsGrade = document.querySelector('#pixel-board');

function creatPixels(){
  for (let index = 0; index < 5; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';  
    
    pixelsGrade.appendChild(pixel);
    
  }
}
creatPixels();

for (let index = 0; index < 4; index += 1) {  
  let gradePixels = creatPixels();
};
// exercício 6
const whitePixel = document.querySelector(".pixel");
const blackPixel = document.querySelector("#black");
const greenPixel = document.querySelector("#green");
const yellowPixel = document.querySelector("#yellow");
const redPixel = document.querySelector("#red");

let color;
let colorPixelChoice;
function changePixelColor() {
  blackPixel.classList.add('selected');
  colorPixelChoice = document.querySelector('.selected');
  color = colorPixelChoice.id;
}
changePixelColor();

//exercício 7
let colorSelected;
const paletteColor = document.querySelector('#color-palette')

paletteColor.addEventListener('click', function(event){
  let choiceColor = event.target;  
   colorPixelChoice = document.querySelector('.selected');
   colorPixelChoice.classList.remove('selected');   
   colorSelected = choiceColor.classList.add('selected');
   let choiceColorChange = document.querySelector('.selected')  
   color = choiceColorChange.id;
});

const pixelFamily = document.querySelectorAll('.pixel');


for (let index = 0; index < pixelFamily.length; index++) {
  
  pixelFamily[index].addEventListener('click', function(){
    pixelFamily[index].style.backgroundColor = color;
  })
  
}

//ex - 9
const buttonClean = document.querySelector('#clear-board');
function cleanPixels(){
  let pixels = document.querySelectorAll('.pixel');
  for (let key of pixelFamily){
    key.removeAttribute('style');
  }
}
buttonClean.addEventListener('click', cleanPixels);
// fim dos exercicios obrigatórios