import axios from "axios";

export default {
    actions: {
        fetchUserToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/users/auth', data)
                    .then((response) => {
                        console.log('ok then ishladi')
                        console.log(response.data)
                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('error catch ishladi')
                        reject()
                    })
                    .finally(() => {
                        console.log('final ishladi')
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        }
    },
    state: {
        token: localStorage.getItem('token')
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}