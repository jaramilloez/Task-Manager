import http from './httpService';

const apiEndpoint = 'http://localhost:3001/api/severities';

export function getTasks() {
    return http.get(apiEndpoint);
};

export function deleteTask(taskId) {
    return http.delete(apiEndpoint + "/" + apiEndpoint);
}