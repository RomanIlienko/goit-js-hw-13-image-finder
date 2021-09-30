
import { alert, error, defaultModules} from '@pnotify/core';
import * as PNotifyCountdown from '@pnotify/countdown';
import "@pnotify/countdown/dist/PNotifyCountdown.css";
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


import ImgApiService from './apiService.js';
import {refs} from './refs';
import loadMoreButton from './loadMoreBtn.js';
import imgTemplates from '../templates/cardTemp.hbs';
import onImgClick from './modal.js';


const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', handlerInput);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.galleryContainer.addEventListener('click', onImgClick);

function renderImgMarkup(data) {
    if (data.length !== 0) {
        refs.galleryContainer.insertAdjacentHTML('beforeend', imgTemplates(data));
        loadMoreButton.show();
        loadMoreButton.enable();
        if (data.length < 12) {
            loadMoreButton.hide();
            noMoreImages();
        }
    }
 
}

function handlerInput(evt) {
    evt.preventDefault();
    refs.galleryContainer.innerHTML = '';
    imgApiService.query = evt.currentTarget.elements.query.value.trim();
//     if (!imgApiService.query) {
//         // noResults();
//        return 
//    }
    
  if (imgApiService.query === '') {
    loadMoreButton.hide();
    return emptyQuery();
  }

    loadMoreButton.show();
    imgApiService.defaultPage();
    fetchImgCards();
    refs.input.value = '';
    // successRes();
    
}

function fetchImgCards() {
  loadMoreButton.disable();
    return imgApiService.fetchContent().then(items => {
        renderImgMarkup(items);
        loadMoreButton.enable();
      
        if (items.length === 0) {
            loadMoreButton.hide();
            noResults();
        }
    })
        .catch(error => {
            console.log(error);
        });
}


function onLoadMore() {
    fetchImgCards();

    setTimeout(() => {
        refs.galleryContainer.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
        }
        )
    }, 500);
}

function noResults() {
    error({
    title: 'No matches found.',
    text: 'Please enter different query!',
    delay: 2000,
    modules: new Map([
        ...defaultModules,
        [PNotifyCountdown, {

        }]
    ])
  });
}

function emptyQuery() {
    alert({
    title: 'Query is empty.',
    text: 'Please enter something!',
    delay: 2000,
    modules: new Map([
        ...defaultModules,
        [PNotifyCountdown, {

        }]
    ])
  });
}

function noMoreImages() {
    error({
    title: 'There are no more images in this category.',
    text: 'Please enter different query!',
    delay: 2000,
    modules: new Map([
        ...defaultModules,
        [PNotifyCountdown, {

        }]
    ])
  });
}