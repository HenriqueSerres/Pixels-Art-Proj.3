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
 const startBlack = document.querySelectorAll("#pixel-board");
 startBlack.addEventListener('click', function(event) {
  if (event.target === whitePixel) {
    event.target = blackPixel;
  } else {
    event.target = whitePixel;
  }
});
}
changePixelColor();

// exercício 7
//function changePixelColor(event) {
//   let colorPixelChoice = document.querySelector
// }