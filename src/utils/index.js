import axios from 'axios'

var instance = axios.create({
    baseURL: '/api/admin',
    timeout: 10000
});

const xhr = {
    get (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res => {
                resolve(res.data)
            })
        })
    },
    post (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                resolve(res.data)
            })
        })
    },
}

export default xhr