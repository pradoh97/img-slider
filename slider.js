const gallery = document.querySelector('.gallery');
const slider = gallery.querySelector('.slider');
const controlLeft = gallery.querySelector('.control.left');
const controlRight = gallery.querySelector('.control.right');

let sliderMovementDirection;

controlLeft.addEventListener('mouseenter', () => {
  sliderMovementDirection = 'left';
});
controlLeft.addEventListener('touchstart', () => {
  sliderMovementDirection = 'left';
});
controlLeft.addEventListener('mousedown', () => {
  sliderMovementDirection = 'left';
});
controlLeft.addEventListener('mouseup', () => sliderMovementDirection = '');
controlLeft.addEventListener('touchend', () => sliderMovementDirection = '');
controlLeft.addEventListener('mouseout', () => sliderMovementDirection = '');

controlRight.addEventListener('mouseenter', () => {
  sliderMovementDirection = 'right';
});
controlRight.addEventListener('mousedown', () => {
  sliderMovementDirection = 'right';
});
controlRight.addEventListener('touchstart', () => {
  sliderMovementDirection = 'right';
});
controlRight.addEventListener('mouseup', () => sliderMovementDirection = '');
controlRight.addEventListener('touchend', () => sliderMovementDirection = '');
controlRight.addEventListener('mouseout', () => sliderMovementDirection = '');

function sliderStep(event, multiplier = 1, direction = 0){
  let offset = 0;
  let imgWidth = slider.firstElementChild.clientWidth;

  if(event){
    if(event.target == controlLeft) direction = -1;
    else direction = 1;
  }

  offset = imgWidth * direction * multiplier;

  slider.scrollLeft += offset;
}


function moveSlider(){
  let direction = 0;

  if(sliderMovementDirection == 'left') direction = -1;
  else if(sliderMovementDirection == 'right') direction = 1;

  sliderStep(null, 0.025, direction);

  requestAnimationFrame(moveSlider);
}

requestAnimationFrame(moveSlider);
