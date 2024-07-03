import http from './httpService';

export function getTypes() {
    return http.get('http://localhost:3001/api/types');
}