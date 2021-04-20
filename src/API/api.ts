import axios, { AxiosInstance } from 'axios'

const unsplash: AxiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GUEogNq0Ue8uHunl7tkSMRsgopR3dS5Xf0WvG40Zyts',
    },
})

export default unsplash
