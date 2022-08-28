import axios from 'axios'


const req = axios.create({
  baseURL: 'http://localhost:8080'
})


export const getAppData = () => req.post('/api/list').then(res => res.data)