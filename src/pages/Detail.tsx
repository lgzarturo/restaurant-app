import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getRestaurant } from "../api/restaurant"
import { HandleStatus } from "../components"
import { RestaurantDetailModel, RestaurantDetailStateModel } from "../models/restaurantDetailModel"

const initDetailObject: RestaurantDetailModel = {
  id: 0,
  name: '',
  address: '',
  description: '',
  image: '',
  turns: []
}

const Detail = () => {
  const [restaurant, setRestaurant] = useState<RestaurantDetailStateModel>({ status: 'loading', data: initDetailObject });
  const {restaurantId} = useParams<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        if (restaurantId === "undefined") {
          throw new Error("No restaurant id provided")
        }
        const id = Number(restaurantId);
        const response = await getRestaurant(id)
        setRestaurant({ ...response })
      } catch (error) {
        setRestaurant({ status: 'error', data: initDetailObject })
        console.log(error)
      }
    }
    getData()
  }, [restaurantId]);

  const { name, address, description, image, turns } = restaurant.data;

  return (
    <HandleStatus status={restaurant.status}>
      <div>
        <h1>Detail</h1>
        <p>
          {name}, {description}, {address}, {image}
        </p>
        <ul>
          {turns.map((turn, index) => (
            <li key={index}>
              {turn.name}
            </li>
          ))}
        </ul>
      </div>
    </HandleStatus>
  )
}

export default Detail
