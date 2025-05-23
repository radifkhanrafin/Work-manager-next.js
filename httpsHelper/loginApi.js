import { httpAxios } from "./httpAxios";

export async function loginUser(loginInfo) {
    const result = await httpAxios.post('api/login', loginInfo)
        .then(res => res.data)
    return result
}