// direction.js
const Direction = {
    Back: 'back',
    Forward: 'forward'
}

// slider.js
function switchSlide(direction) {
    if (direction === Direction.Back) {
      console.log('Show previous slide.');
    } else {
      console.log('Show next slide.');
    }
  }
  
  switchSlide(Direction.Back);
  switchSlide('left');