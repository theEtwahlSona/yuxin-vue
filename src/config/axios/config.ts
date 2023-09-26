import {AxiosConfig} from "#/config/axios";

const config: AxiosConfig = {
    baseUrl: import.meta.env.VITE_BASE_URL + import.meta.env.VITE_API_URL,
    requestTimeout: 30000,
    defaultHeaders: 'application/json'
}

export {config}
