import {refs} from './refs';

const loadMoreBtnLabelRef = document.querySelector('.label');

 const loadMoreButton = {
    enable(){
        refs.loadMoreBtn.disabled = false;
        loadMoreBtnLabelRef.textContent = 'Load More';
    },

    disable(){
        refs.loadMoreBtn.disabled = true;
        loadMoreBtnLabelRef.textContent = 'Load...';
    },

    show() {
        refs.loadMoreBtn.classList.remove('is-hidden');
    },

    hide(){
       refs.loadMoreBtn.classList.add('is-hidden');
    }
};
export default loadMoreButton;