import axios from 'axios'
import config from '../utils/config'

export const register = async function (email, password) {
  const data = { email, password }
  const response = await axios.post(`${config.backendServiceURI}/accounts/register/student`, data)
  return response.data
}

export const sendEmail = async function (email) {
  const data = { email }
  const response = await axios.post(`${config.backendServiceURI}/accounts/resend-email`, data)
  return response.data
}

export const forgotPassword = async function (email) {
  const data = { email }
  const response = await axios.post(`${config.backendServiceURI}/accounts/forgot-password`, data)
  return response.data
}

export const changePassword = async function (email, verificationCode, password) {
  const data = { password }
  const response = await axios.post(`${config.backendServiceURI}/accounts/change-password?email=${email}&verification_code=${verificationCode}`, data)
  return response.data
}
