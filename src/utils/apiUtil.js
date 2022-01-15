import axios from 'axios'

const BASE_URL = 'http://localhost:8000/'

const instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
})

const apiCall = async (method, url, body) => {
  try {
    const response = await instance({
      method,
      url,
      ...(body && { data: body }),
    })
    return response && response.data
  } catch (err) {
    // eslint-disable-next-line no-mixed-operators
    throw err.response && err.response.data || err.message
  }
}

export default apiCall
