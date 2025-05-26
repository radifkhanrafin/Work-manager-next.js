import { httpAxios } from "./httpAxios";

export async function loginUser(loginInfo) {
    const result = await httpAxios.post('api/login', loginInfo)
        .then(res => res.data)
    // console.log(result)
    return result
};
export async function logOutUser() {

    try {
        const result = await httpAxios.post('api/logout')
            .then(res => res.data)
        return result

    } catch (error) {
        return error
    }
    // console.log(result)
}