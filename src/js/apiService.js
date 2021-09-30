// export default function fetchImages(searchQuery) {
//     const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
//     const API_KEY = ''
//     let page = 1
    
//     return fetch(url)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
// }
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23479864-16575353206961163feee44f8';

export default class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchContent() {
    const response = await fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    const images = await response.json();
    this.page += 1;

    return images.hits;
  }

  defaultPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}