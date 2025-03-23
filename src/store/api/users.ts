import { instance } from "./api.instance";

export const usersAPI = {
    getUsers: (department?: string) => {
        return instance.get(`mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`)
    }
}
