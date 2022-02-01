import { Container, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getRestaurants } from '../api/restaurant'
import {SimpleCard, HandleStatus} from '../components'
import { RestaurantStateModel } from '../models/restaurantModel'

function Home() {
  const [restaurants, setRestaurants] = useState<RestaurantStateModel>({status: 'loading', data: []});
  const getData = async () => {
    try {
      const response = await getRestaurants()
      setRestaurants({ ...response })
    } catch (error) {
      setRestaurants({status: 'error', data: []})
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <HandleStatus status={restaurants.status}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {restaurants.data.map((restaurant, index) => (
            <Grid item xs={12} sm={4} lg={3} key={index}>
              <SimpleCard
                title={restaurant.name}
                description={restaurant.address}
                image={restaurant.image}
                handleButton={() => console.log('test')} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </HandleStatus>
  );
}

export default Home;
