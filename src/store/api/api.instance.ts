import axios from "axios";

export const instance = axios.create({
    baseURL: "https://stoplight.io/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
})
