import { Container, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getRestaurants } from '../api/restaurant'
import { SimpleCard, HandleStatus } from '../components'
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

  const image = 'https://images.pexels.com/photos/4022099/pexels-photo-4022099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

  return (
    <HandleStatus status={restaurants.status}>
      <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: 'calc(100vh - 4em)' }}>
        <Container maxWidth="lg" style={{ paddingTop: '4vh' }}>
          <Grid container spacing={3}>
            {restaurants.data.map((restaurant, index) => (
              <Grid item xs={12} sm={4} lg={3} key={index}>
                <SimpleCard
                  title={restaurant.name}
                  description={restaurant.address}
                  image={restaurant.image}
                  handleButton={() => console.log('test')}
                  to={`/detail/${restaurant.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </HandleStatus>
  );
}

export default Home;
