import request from "../utils/request"
import { IUserState } from "./types"

const userRegister = (data: any): any => {
    return request.post('api/user/register', data)
}

export { userRegister }