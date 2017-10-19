import 'normalize.css';
import './index.scss';
// import menuMacker from '../../components/menu/menu';
// let menu = menuMacker(['Главная','Обо мне','Блог'], 'menu');
// document.body.appendChild(menu);

// console.log('in index.js');
// console.log($);


$(document).ready(function()
{
  portpro.init();
});


var portpro =  
{
   
  init:function()
  {
    this.flipFunc();
  },
  flipFunc:function() {
    let 
      flipContainer = $('.flip-container'),
      buttons = $('.welcome__button_link, .button__return');


    buttons.on( 'click' , function() {
      flipContainer.toggleClass('hover');
    });
  },
};