var dragImage = document.getElementById("image");

dragImage.addEventListener('touchmove', function(e) {
// grab the location of touch
e.preventDefault();
console.log('touch');
var touchLocation = e.targetTouches[0];
// assign box new coordinates based on the touch.
dragImage.style.left = touchLocation.pageX + 'px';
dragImage.style.top = touchLocation.pageY + 'px';
})