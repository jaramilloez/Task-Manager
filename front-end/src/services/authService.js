import http from './httpService';
import { jwtDecode } from 'jwt-decode';
import config from '../config.json';

const apiEndpoint = config.apiUrl + "/users/auth";
const tokenKey = "token";

export async function login(email, password){
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);

}

export function logOut() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    } catch (ex) {}
}

export function logInWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}