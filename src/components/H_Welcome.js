import React from 'react';
import { useTheme, Typography, Box, Divider, Chip, Button, CircularProgress } from '@mui/material';

const HWelcome = ({ onRefresh, isLoading }) => {
  const theme = useTheme();

  return (
    <Box textAlign="center" 
      sx={{
        width: "70%", 
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: theme.spacing(2),
      }}>
      
      <Typography fontWeight="fontWeightBold" 
        sx={{ 
          color: theme.palette.secondary.dark, 
          fontSize: 180, 
          textShadow: `3px 2px 4px ${theme.palette.primary.main}`
        }}>
        Bored ?
      </Typography>
      
      <Divider sx={{ width: '100%' }}>
        <Chip label="Welcome" size="small" sx={{ color: theme.palette.primary.main }}/>
      </Divider>

      <Button
        onClick={onRefresh}
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          padding: '4% 8%',
          borderRadius: "82% 18% 32% 68% / 49% 29% 71% 51%",
          marginTop: theme.spacing(8),
          boxShadow: `inset 3px 2px 10px 5px ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          transition: 'all 0.5s ease',
          '&:hover': { 
            backgroundColor: theme.palette.primary.light,
            borderRadius: "26% 74% 49% 51% / 38% 39% 61% 62%",
            color: theme.palette.secondary.light, 
          }
        }}>
        {isLoading ? <CircularProgress size={24} /> : "Try it"}
      </Button>
      
    </Box>
  );
};

export default HWelcome;
