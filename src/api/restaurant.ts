import { ReservationModel } from './../models/reservationModel'
import axios from "axios"

const url = 'http://localhost:8080/api/v1'
const authorization = {headers: {'Authorization': `${localStorage.getItem('accessToken')}`}}

export const getRestaurants = async () => {
  const response = await axios.get(`${url}/restaurants`, authorization)
  return response.data
}


export const getRestaurant = async (id: number) => {
  const response = await axios.get(`${url}/restaurants/${id}`, authorization)
  return response.data
}


export const createReservation = async (reservation: ReservationModel) => {
  const response = await axios.post(`${url}/reservations`, reservation, authorization)
  return response.data
}


export const cancelReservation = async (locator: string) => {
  const response = await axios.delete(`${url}/reservations`, {params: {locator}, ...authorization})
  return response.data
}
