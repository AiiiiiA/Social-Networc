import axios from 'axios';
import { GetItemsType } from './api';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}