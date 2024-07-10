import config from '../config.json';
import http from './httpService';

export function getTypes() {
    return http.get(config.apiUrl + "/types");
}