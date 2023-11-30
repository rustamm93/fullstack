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
        }
    },
    state: {
        token: null
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}