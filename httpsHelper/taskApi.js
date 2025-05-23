import { httpAxios } from "./httpAxios"

export async function addTaskApi(task) {
    const result = await httpAxios
        .post('api/tasks', task)
        .then(res => res.data)
    return result
};
export function getTaskApi() {
    const result = httpAxios.get('api/tasks')

}

