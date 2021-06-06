import axios from "axios"
import { Toast } from "vant"

const service = axios.create({
    baseURL: "/",
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        Toast({message: "请求失败", duration: 2500 });
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        if (response.data.success) 
            return Promise.resolve(response.data.data)
        const errorMsg = response.data.msg;
        Toast({message: errorMsg, duration: 2500 });
        return Promise.reject(new Error(errorMsg))
    },
    (error) => {
        return Promise.reject(error)
    }
 )    
export default service
