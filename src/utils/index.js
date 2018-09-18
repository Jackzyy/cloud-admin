import axios from 'axios'
import router from '../router'
import { Notification } from 'element-ui'

var instance = axios.create({
    baseURL: '/api/admin',
    timeout: 10000
});

const xhr = {
    get (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res => {
                if(res.data.code == 401){
                    Notification.error('登录状态失效，请重新登录')
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }
                resolve(res.data)
            })
        })
    },
    post (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                if(res.data.code == 401){
                    Notification.error('登录状态失效，请重新登录')
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }
                resolve(res.data)
            })
        })
    },
    put (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.put(url, data, config).then(res => {
                if(res.data.code == 401){
                    Notification.error('登录状态失效，请重新登录')
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }
                resolve(res.data)
            })
        })
    },
    delete (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.delete(url, {params:data}, config).then(res => {
                if(res.data.code == 401){
                    Notification.error('登录状态失效，请重新登录')
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }
                resolve(res.data)
            })
        })
    },
}

export default xhr