import axios from 'axios'

const API = axios.create({
  baseURL: `http://localhost:8080/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default API
