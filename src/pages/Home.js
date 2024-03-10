import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import HWelcome from '../components/H_Welcome';
import HAnswer from '../components/H_Answer';

const Home = () => {
  const [activityData, setActivityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch('http://www.boredapi.com/api/activity/').then(res => res.json());
    setActivityData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack spacing={8} alignItems="center">
      <HWelcome onRefresh={fetchData} isLoading={isLoading} />
      {activityData && <HAnswer data={activityData} />}
    </Stack>
  );
};

export default Home;
