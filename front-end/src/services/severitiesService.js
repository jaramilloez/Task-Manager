import config from '../config.json';
import http from './httpService';

export function getSeverities() {
    return http.get(config.apiUrl + "/severities");
}