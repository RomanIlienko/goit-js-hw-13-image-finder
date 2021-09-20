export default function fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
    const API_KEY = '23479864-16575353206961163feee44f8'
    let page = 1
    
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
}

