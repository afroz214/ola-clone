import axios from 'axios';
import { stringify } from 'querystring';
import SecureLS from 'secure-ls';

const defaultOptions = {
    headers: {},
    queryParams: null
};

export const restClient = axios.create();

restClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const err = error.response;
    const ls = new SecureLS();
    if (err.status === 401) {
        ls.remove('token');
        window.history.go('/login');
    }
    return Promise.reject(error);
});

const httpClient = async (url = '', options = defaultOptions, noBaseUrl) => {
    const ls = new SecureLS();
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    let fullPath = noBaseUrl ? (`${url}`):(`${baseUrl}${url}`);


    if (options.queryParams) {
        const queryString = stringify(options.queryParams);
        fullPath = `${fullPath}?${queryString}`;
    }

    const token = ls.get('token');

    if (token) {
        restClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return await restClient({
        url: fullPath,
        method: options.method || 'GET',
        data: options.data
    })
        .then(response => (
            {
                data: response?.data || {},
                errors: response?.data.errors,
                error: response?.data.error,
                message: response?.message,
                // message: response?.data.message,
                success: (response?.status === 200
                    || response?.status === 201)
                    && response?.data?.status
            }
        ))
        .catch(err => ({
            data: err,
            success: false,
            // message: err?.response?.data?.message,
            message: err?.response?.message
        })
        );
};

export default httpClient;
