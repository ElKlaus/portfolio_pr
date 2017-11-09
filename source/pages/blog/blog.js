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
    console.log('blog start');
  },
};

// $('.swipe').on('click', function() {
//   console.log('test swipe123');
// });
