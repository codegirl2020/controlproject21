import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://musclefitness-3bde3-default-rtdb.firebaseio.com'
})

export default instance;