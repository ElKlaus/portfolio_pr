import 'normalize.css';
import './about.scss';



$(document).ready(function()
{
  totalMenu.init();
});


var totalMenu =  
{
   
  init:function()
  {
    this.menuToggle();
  },
  menuToggle:function() {
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('.total-menu').toggleClass('total-menu-hidden');
      console.log('adfaf');
    });
  },
};