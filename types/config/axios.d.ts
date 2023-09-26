import {Method, ResponseType} from "axios";

/**
 * 请求头类型
 */
export type AxiosHeaders =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'

/**
 * axios 配置
 */
export interface AxiosConfig {
    /**
     * api请求基础路径
     */
    baseUrl: string
    /**
     * 接口请求超时时间
     */
    requestTimeout: number
    /**
     * 默认接口请求类型
     */
    defaultHeaders: AxiosHeaders
}

/**
 *
 */
export interface CommonResult<T> {
    code: number
    data: T
    msg: string
}

export interface RequestConfig {
    url: string
    method?: Method | string
    params?: any;
    data?: any;
    responseType?: ResponseType
    headersType?: AxiosHeaders | string
}
