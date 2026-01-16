import axios from "axios";

const API_KEY = "54229536-6dca3b178fde1af9ce529c0e1";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params:{
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    }).then((responce) => {
        return responce.data;
    });
}