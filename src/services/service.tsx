
import axios from 'axios'
import { baseUrl } from './api-endpoints'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  timeoutErrorMessage: 'Timout errro',
})

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

instance.interceptors.request.use(
  (resp) => {
    console.log('resp', resp)
    return resp
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('error----', error)
    return Promise.reject(error.response)
  }
)

export default instance;
