import axios from 'axios';
import env from '../../env';

const { omdbApiUrl } = env;
const instance = axios.create({
  baseURL: omdbApiUrl,
  headers: { 'content-type': 'application/json' }
});

export default instance;
