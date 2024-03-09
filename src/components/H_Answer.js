import React from 'react';
import { useTheme, Typography, Box } from '@mui/material';

const HAnswer = () => {
  const theme = useTheme();

  return (
    <Box textAlign="center" sx={{ m: 1, p: 2, border: '2px solid grey', borderRadius: 1.5 }}>

      <Typography variant="h4" component="h1" gutterBottom fontWeight="fontWeightBold" sx={{ color: theme.palette.secondary.main }}>
        RANDOM BULLSHIT
      </Typography>
      
    </Box>
  );
};

export default HAnswer;
