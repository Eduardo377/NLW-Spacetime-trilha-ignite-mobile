import axios from 'axios'

export const api = axios.create({
  baseURL: 'exp://127.0.0.102:19000',
})
