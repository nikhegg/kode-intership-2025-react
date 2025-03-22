import { instance } from "./api.instance";

export const usersAPI = {
    getUsers: () => {
        return instance.get("mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true")
    },
    getUsersByDepartment: (department: string) => {
        return instance.get(`mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`)
    }
}
