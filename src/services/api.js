import axios from 'axios';
const url = window.location.origin;
const splitUrl = url.split(':')
const sourceDomain = splitUrl[0]+":"+splitUrl[1]; //Nimeondoa :5371 kupata http://localhost

const api = axios.create({
    baseURL: 'https://delivery.iceiy.com/api', //`${sourceDomain}/api`, //import.meta.env.VITE_LOGIN_API,
    timeout: 5000,
});
export default api
