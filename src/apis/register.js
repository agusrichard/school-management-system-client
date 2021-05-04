import axios from 'axios'
import config from '../utils/config'

export const register = async function (email, password) {
  try {
    const data = { email, password }
    const response = await axios.post(`${config.backendServiceURI}/accounts/register/student`, data)
    console.log('response.data', response.data)
    return response.data
  } catch (error) {
    return error
  }
}
