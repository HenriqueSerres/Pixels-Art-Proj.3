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
