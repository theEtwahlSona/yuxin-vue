import axios, {AxiosInstance} from 'axios'
import {config} from "./config"

const {baseUrl, requestTimeout} = config

const service: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: requestTimeout,
    // 禁用 Cookie 等信息
    withCredentials: false
})

export {service}
