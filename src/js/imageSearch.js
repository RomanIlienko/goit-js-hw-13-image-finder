import { refs } from './js/refs';
import cardsMarkup from '../templates/cardsTemp.hbs'
import cardMarkup from '../templates/cardTemp.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import { alert, success, error } from '@pnotify/core';



const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});


// success({
//                     title: 'Cool!',
//                     text: "Congratulations! You found the country.",
//                     delay: 2000,
//                     mouseReset: true,
//                 });