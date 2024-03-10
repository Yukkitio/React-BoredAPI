// A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]
// Type of the activity ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
// The number of people that this activity could involve [0, n]
// A factor describing the cost of the event with zero being free [0, 1]
// A unique numeric id [1000000, 9999999]

import React from 'react';
import { useTheme, Typography, Box, alpha, Chip, LinearProgress } from '@mui/material';

const HAnswer = ({ data }) => {
  const theme = useTheme();

  const getColor = (value) => {
    if (value <= 33) {
      return theme.palette.secondary.light;
    } else if (value > 33 && value <= 66) {
      return theme.palette.secondary.main;
    } else {
      return theme.palette.secondary.dark;
    }
  };

  return (
    <Box sx={{
      width: "98%", 
      height: "50vh",
      mt: 2,
      border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
      borderRadius: 1.5,
      backgroundColor: alpha(theme.palette.background.default, 0.5),
      backdropFilter: 'blur(20px)'
      }}>

      <Typography variant="h4" component="h1" gutterBottom fontWeight="fontWeightBold" sx={{ color: theme.palette.secondary.main }}>
        Your activity
      </Typography>

      <Typography variant="h3" gutterBottom sx={{ color: theme.palette.primary.main }}>
        {data.activity}
      </Typography>

      <Chip label={data.type} color="secondary"/>

      <Typography variant="body1" gutterBottom>
        Participants: {data.participants}
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="body1" gutterBottom sx={{ mr: 2 }}>Price:</Typography>
        {data.price === 0 ? (
          <Typography variant="body1" gutterBottom>Free</Typography>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '20%' }}>
            <LinearProgress variant="determinate" value={data.price * 100} 
              sx={{ 
                flexGrow: 1, 
                mr: 1, 
                height: '10px',
                borderRadius: '5px',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getColor(data.price * 100)
                }
              }}
            />
            <Typography variant="body2">{`${Math.round(data.price * 100)} %`}</Typography>
          </Box>
        )}
      </Box>
      
      <Box sx={{ display: 'flex' }}>
        <Typography variant="body1" gutterBottom sx={{ mr: 2 }}>Accessibility:</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '20%' }}>
          <LinearProgress variant="determinate" value={(1 - data.accessibility) * 100} 
                sx={{ 
                  flexGrow: 1, 
                  mr: 1, 
                  height: '10px',
                  borderRadius: '5px',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: getColor((1 - data.accessibility) * 100)
                  }
                }}
              />
          <Typography variant="body2">{`${Math.round((1 - data.accessibility) * 100)} %`}</Typography>
        </Box>
      </Box>
      
    </Box>
  );
};

export default HAnswer;
