import http from './httpService';

export function getSeverities() {
    return http.get('http://localhost:3001/api/severities');
}