const pixelsGrade = document.querySelector('#pixel-board');

function creatPixels(){
  for (let index = 0; index < 5; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel color';  
    
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

function changePixelColor() {
  blackPixel.classList.add('selected');

//   let startBlack = document.querySelectorAll("#color-palette");
//   startBlack.addEventListener('click', function(event) {
//  if (event.target === whitePixel) {
//    startBlack = blackPixel;
//   } else {
//     startBlack = whitePixel;
//   }
// });
}
changePixelColor();

//exercício 7
const paletteColor = document.querySelector('#color-palette')
paletteColor.addEventListener('click', function(event){
  let colorPixelChoice = document.querySelector('.selected');
  colorPixelChoice.classList.remove('selected');
  event.target.classList.add('selected');
});