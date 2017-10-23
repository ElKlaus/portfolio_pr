import 'normalize.css';
import './blog.scss';
import './../about/about';



$(document).ready(function()
{
  swipeMenu.init();
});


var swipeMenu = 
{
  init: function()
  {
    this.swipeToggle();
  },
  swipeToggle: function() 
  {
    console.log('test blog');
  },
};

$('.swipe').on('click', function() {
  console.log('test swipe123');
});

var startup = function () {
  var el = document.getElementsByClassName('swipe');
  // el.addEventListener('touchstart', handleStart, false);
  // el.addEventListener('touchend', handleEnd, false);
  // el.addEventListener('touchcancel', handleCancel, false);
  // el.addEventListener('touchmove', handleMove, false);
  console.log(el);
};

startup();