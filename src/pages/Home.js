import React from 'react';

import { Grid } from '@mui/material';

import HWelcome from '../components/H_Welcome';
import HAnswer from '../components/H_Answer';

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <HWelcome />
      <HAnswer />
    </Grid>
  );
};

export default Home;
