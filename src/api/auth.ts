import { UserModel } from './../models/userModel'
import axios from "axios"

const url = 'http://localhost:8080/api'

export const login = async (user: UserModel) => {
  const response = await axios.post(`${url}/auth/login`, user)
  return response.data
}
