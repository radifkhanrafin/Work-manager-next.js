import { httpAxios } from "./httpAxios"

export async function getCurrentUser(params) {
    const users = await httpAxios
    .get('/api/currentuser')
    .then((res) => res.data)
    // console.log(users)
    return users
};