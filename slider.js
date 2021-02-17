const gallery = document.querySelector('.gallery');
const slider = gallery.querySelector('.slider');
const controlLeft = gallery.querySelector('.control.left');
const controlRight = gallery.querySelector('.control.right');

let direction = 0;

controlLeft.addEventListener('mouseenter', () => direction = -1);
controlLeft.addEventListener('touchstart', () => direction = -1);
controlLeft.addEventListener('mousedown', () => direction = -1);
controlLeft.addEventListener('mouseout', () => direction = 0);
controlLeft.addEventListener('touchend', () => direction = 0);
controlLeft.addEventListener('mouseup', () => direction = 0);

controlRight.addEventListener('mouseenter', () => direction = 1);
controlRight.addEventListener('touchstart', () => direction = 1);
controlRight.addEventListener('mousedown', () => direction = 1);
controlRight.addEventListener('mouseout', () => direction = 0);
controlRight.addEventListener('touchend', () => direction = 0);
controlRight.addEventListener('mouseup', () => direction = 0);


function sliderStep(multiplier = 1, direction){
  let offset = 0;
  let imgWidth = slider.firstElementChild.clientWidth;

  offset = imgWidth * multiplier * direction;

  slider.scrollLeft += offset;
}

function moveSlider(){
  sliderStep(0.025, direction);

  requestAnimationFrame(moveSlider);
}
requestAnimationFrame(moveSlider);
