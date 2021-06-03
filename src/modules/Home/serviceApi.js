import HttpClient from 'api/httpClient';

const type = (data) => HttpClient('/getOwnerTypes', { method: "POST", data });

export default {
    type
}