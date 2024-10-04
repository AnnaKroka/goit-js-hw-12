const base_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
    const urlParams = new URLSearchParams({
        key: '46295007-756af9891ee3ef29b100a63be',
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

   return fetch(`${base_URL}?${urlParams}`).then(response => {
   
        if (!response.ok) {
            // const rejectedPromise = new Promise ((resolve, reject) => {
            //     reject(response.status);
            // });
            // return rejectedPromise;
    
            //Замість вищезазначеного коду використовуємо оператор throw (генерування помилки)
            throw new Error(response.status);
        }
        return response.json();
    });
};