import axios from "axios"

const api = axios.create({
    baseURL: "https://app-e-commerce-df596-default-rtdb.firebaseio.com"
})

export default api;