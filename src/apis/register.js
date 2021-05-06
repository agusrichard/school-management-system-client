import axios from 'axios'
import config from '../utils/config'

export const register = async function (email, password) {
  const data = { email, password }
  const response = await axios.post(`${config.backendServiceURI}/accounts/register/student`, data)
  return response.data
}
