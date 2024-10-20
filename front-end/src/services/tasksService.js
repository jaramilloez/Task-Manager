import config from "../config.json";
import http from "./httpService";

const apiEndpoint = config.apiUrl + "/tasks";

function taskUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTasks() {
  return http.get(apiEndpoint);
}

export function getTask(taskId) {
  return http.get(taskUrl(taskId));
}

export function saveTask(task) {
  const body = { ...task };
  delete body._id;

  if (task._id) {
    http.put(taskUrl(task._id), body);
  } else {
    http.post(apiEndpoint, body);
  }
}

export function deleteTask(taskId) {
  return http.delete(taskUrl(taskId));
}
