import {service} from "./service";
import {config} from "./config"
import {CommonResult, RequestConfig} from "#/config/axios";
import {AxiosResponse} from "axios";

const {baseUrl, defaultHeaders} = config

export const REQUEST_BASE_URL = baseUrl

export const createRequest = <T>(
    option: RequestConfig
) => service<T>({
    ...option,
    method: option.method || 'GET',
    headers: {
        'Content-Type': option.headersType || defaultHeaders
    }
}) as unknown as Promise<AxiosResponse<CommonResult<T>>>

export const request = {
    get: async <T = any>(option: RequestConfig) => {
        const resp = await createRequest<T>({method: 'GET', ...option})
        return resp.data
    },
    post: async <T = any>(option: RequestConfig) => {
        const resp = await createRequest<T>({method: 'POST', ...option})
        return resp.data
    },
    postOriginal: async <T = any>(option: RequestConfig) => {
        return await createRequest<T>({method: 'POST', ...option})
    },
    delete: async <T = any>(option: RequestConfig) => {
        const resp = await createRequest<T>({method: 'DELETE', ...option})
        return resp.data
    },
    put: async <T = any>(option: RequestConfig) => {
        const resp = await createRequest<T>({method: 'PUT', ...option})
        return resp.data
    },
    download: async <T = any>(option: RequestConfig) => {
        return await createRequest<T>({method: 'GET', responseType: "blob", ...option})
    },
    upload: async <T = any>(option: RequestConfig) => {
        return await createRequest<T>({method: 'POST', headersType: 'multipart/form-data', ...option})
    }
}
