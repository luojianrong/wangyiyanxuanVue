import axios from "axios";

const loginAxios = axios.create({
  timeout:10000
})

loginAxios.interceptors.request.use((config)=>{
  return config
},(err)=>{
  return Promise.reject(err)
})

loginAxios.interceptors.response.use((res)=>{
  return res.data
},(err)=>{
  return Promise.reject(err)
})

export default loginAxios
