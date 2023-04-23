import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "dacaeff9-9a8d-4307-b226-fe5ddd53b058" }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    setPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)

        return instance.put(`profile/photo`, formData, { photo })
    }
}

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    changeProfileInfo(profile) {
        return instance.put(`profile`, profile).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}