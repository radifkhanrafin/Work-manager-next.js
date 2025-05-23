import { httpAxios } from "./httpAxios";

export async function getAllUser(params) {
    const users = await httpAxios.get('api/users')
        .then(res => res.data)
    return
};
export async function postUser(user) {
    const result = await httpAxios
        .post('api/users',user)
        .then(res => res.data)
    return result
}