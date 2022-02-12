import { Container, Grid } from "@material-ui/core"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getRestaurant } from "../api/restaurant"
import { HandleStatus, DetailCard } from "../components"
import { RestaurantDetailModel, RestaurantDetailStateModel } from "../models/restaurantDetailModel"
import { Form } from "./Form"

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
      <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '100vh' }}>
        <Container maxWidth="lg" style={{ paddingTop: '5vh' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <DetailCard
                title={name}
                description={description}
                subDescription={address}
                image={image}
                turns={turns}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form turns={turns} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </HandleStatus>
  )
}

export default Detail
