import { httpAxios } from "./httpAxios"

export async function addTaskApi(task) {

    const result = await httpAxios
        .post('api/tasks', task)
        .then(res => res.data)
    console.log("from task api", task, result)
    return result
};
export function getTaskApi() {
    const result = httpAxios.get('api/tasks')

}
export async function getUserTask(userId) {
    try {
        // console.log("task user", userId);
        const result = await httpAxios.get(`/api/users/${userId}/userTask`);
        // console.log(result.data)
        return result.data;
    } catch (error) {
        console.error("Error fetching user tasks:", error);
        throw error;
    }
}

export async function deleteTask(params) {
    console.log(params)
    const result = await httpAxios
    .delete(`/api/tasks/${params}`)
    .then(res=>res.data)
    return result
}
export async function updateTaskStatus(params) {

    console.log("params",params)
    const result = await httpAxios
        .patch(`/api/tasks/${params}`)
        .then(res => res.data)
    console.log(result)
    return result
}