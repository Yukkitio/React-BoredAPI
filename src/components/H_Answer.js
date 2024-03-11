// A factor describing how possible an event is to do with zero being the most accessible [0.0, 1.0]
// Type of the activity ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
// The number of people that this activity could involve [0, n]
// A factor describing the cost of the event with zero being free [0, 1]
// A unique numeric id [1000000, 9999999]

import React from 'react';
import { useTheme, Typography, Box, alpha, Chip, LinearProgress, Divider } from '@mui/material';

const HAnswer = ({ data }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: "97%",
      mt: 2,
      border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
      borderRadius: 1.5,
      backgroundColor: alpha(theme.palette.background.default, 0.5),
      backdropFilter: 'blur(20px)',
      textAlign: 'center'
      }}>

      <Typography variant="h3" component="h1" fontWeight="fontWeightBold" sx={{ color: theme.palette.secondary.dark }}>
        Your activity
      </Typography>

      <Divider variant="middle" />


      <Typography variant="h2" fontWeight="fontWeightRegular" sx={{ color: theme.palette.primary.main }}>
        {data.activity}
      </Typography>


      <Box sx={{ display: 'flex', alignContent:'center', alignItems:'center' }}>
        <Typography variant="body1" sx={{ mr: 2 }}>Participants :</Typography>
        <Chip label={data.participants} 
          sx={{
            backgroundColor: theme.palette.secondary.dark,
            boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
          }}/>
      </Box>

      <Box sx={{ display: 'flex', alignContent:'center', alignItems:'center' }}>
      <Typography variant="body1" sx={{ mr: 2 }}>Type :</Typography>
      <Chip label={data.type}
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
        }}/>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Typography variant="body1" sx={{ mr: 2 }}>Price :</Typography>
        {data.price === 0 ? (
          <Typography variant="body1">Free</Typography>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '20%' }}>
            <LinearProgress variant="determinate" value={data.price * 100} 
              sx={{ 
                flexGrow: 1, 
                mr: 1, 
                height: '10px',
                borderRadius: '5px',
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: theme.palette.secondary.dark
                }
              }}
            />
            <Typography variant="body2">{`${Math.round(data.price * 100)} %`}</Typography>
          </Box>
        )}
      </Box>
      
      <Box sx={{ display: 'flex', alignContent:'center', alignItems:'center' }}>
        <Typography variant="body1" gutterBottom sx={{ mr: 2 }}>Accessibility :</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '20%' }}>
          <LinearProgress 
            variant="determinate" 
            value={(1 - data.accessibility) * 100} 
            sx={{ 
              flexGrow: 1, 
              mr: 1, 
              height: '10px',
              borderRadius: '5px',
              boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`,
              '& .MuiLinearProgress-bar': {
                backgroundColor: theme.palette.secondary.dark,
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
