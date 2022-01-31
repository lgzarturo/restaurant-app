import { Container, Grid } from '@material-ui/core'
import React from 'react';
import {SimpleCard} from '../components';

function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard title='Restaurant A' description='Description A' image='https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg' handleButton={() => console.log('test')} />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard
            title='Restaurant A'
            description='Description A'
            image='https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg'
            handleButton={() => console.log('test')} />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard
            title='Restaurant A'
            description='Description A'
            image='https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg'
            handleButton={() => console.log('test')} />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard
            title='Restaurant A'
            description='Description A'
            image='https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg'
            handleButton={() => console.log('test')} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
