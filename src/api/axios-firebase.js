import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://saltafitnfood-default-rtdb.firebaseio.com'
})

export default instance;