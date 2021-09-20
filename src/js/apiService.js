export default function fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`;
    const API_KEY = '23479864-16575353206961163feee44f8'
    let page = 1
    
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
}

https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ