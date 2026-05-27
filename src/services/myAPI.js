import axios from 'axios';
const sourceDomain = window.location.protocol + "//" + window.location.hostname;
const my_api = axios.create({
    baseURL: 'https://delivery.iceiy.com/api', //`${sourceDomain}/api`, //import.meta.env.VITE_LOGIN_API,
    timeout: 50000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})
export default my_api