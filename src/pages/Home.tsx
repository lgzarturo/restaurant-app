import { Container, Grid } from '@material-ui/core'
import React from 'react';
import {SimpleCard} from '../components';

function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <SimpleCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
