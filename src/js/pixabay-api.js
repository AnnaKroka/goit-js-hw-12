import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchedQuery, page = 1) => {
        // const urlParams = new URLSearchParams({
        //     key: '46295007-756af9891ee3ef29b100a63be',
        //     q: searchedQuery,
        //     image_type: 'photo',
        //     orientation: 'horizontal',
        //     safesearch: true,
        // });
    
        const axiosOptions = {
            params: {
            key: '46295007-756af9891ee3ef29b100a63be',
            q: searchedQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
            },
        };
     return axios.get(``, axiosOptions); /*axios.defaults.baseURL - automatically write to ``*/
     
        //     if (!response.ok) {
        //         throw new Error(response.status);
        //     }

        //  return response.json();

        
};
