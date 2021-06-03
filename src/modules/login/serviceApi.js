import HttpClient from 'api/httpClient';

const login = (data) => HttpClient('/userLogin', { method: "POST", data });

export default {
    login
}