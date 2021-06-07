import request from "../utils/request"
import { IUserState } from "./types"

const userRegister = (data: any): any => {
    return request.post('api/user/register', data)
}
const userLogin = (data: any): any => {
    return request.post('api/user/login', data)
}

export { userRegister, userLogin }