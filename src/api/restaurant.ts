import axios from "axios"

const url = 'http://localhost:8080/api/v1'

export const getRestaurants = async () => {
  const response = await axios.get(`${url}/restaurants`)
  return response.data
}
