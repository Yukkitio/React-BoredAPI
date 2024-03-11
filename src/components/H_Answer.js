import React from "react";
import { useTheme, Typography, Box, Divider, Chip, LinearProgress, Grid, alpha } from "@mui/material";

import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const HAnswer = ({ data }) => {
  const theme = useTheme();

  const centeredStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  };

  return (
    <Box
      sx={{
        width: "97%",
        mt: 2,
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: 1.5,
        backgroundColor: alpha(theme.palette.background.default, 0.5),
        backdropFilter: "blur(20px)",
        p: theme.spacing(2),
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h2" fontWeight="fontWeightBold" sx={{ color: theme.palette.secondary.dark }}>
        Your activity
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "stretch", height: "100%" }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Typography variant="h2" sx={{ color: theme.palette.primary.main, width: "100%", wordWrap: "break-word" }}>
            {data.activity}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        
        {/* Informations Table */}
        <Grid container spacing={1} sx={{ width: "50%" }}>

          <Grid item xs={4} sx={centeredStyle}><Typography variant="body1">Participants :</Typography></Grid>
          <Grid item xs={7} sx={centeredStyle}>
            <Chip label={data.participants}
              sx={{
                backgroundColor: theme.palette.secondary.dark,
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
              }}
            />
            </Grid>
          <Grid item xs={1} sx={centeredStyle}><GroupIcon /></Grid>

          <Grid item xs={4} sx={centeredStyle}><Typography variant="body1">Type :</Typography></Grid>
          <Grid item xs={7} sx={centeredStyle}>
            <Chip label={data.type}
              sx={{
                backgroundColor: theme.palette.secondary.dark,
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
              }}
            />
          </Grid>
          <Grid item xs={1} sx={centeredStyle}><CategoryIcon /></Grid>

          <Grid item xs={4} sx={centeredStyle}><Typography variant="body1">Price :</Typography></Grid>
          <Grid item xs={7} sx={centeredStyle}>
            {data.price === 0 ? (
              <Typography>Free</Typography>
            ) : (
              <LinearProgress variant="determinate" value={data.price * 100}
                sx={{
                  width: "100%",
                  height: '10px',
                  borderRadius: '5px',
                  boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.secondary.dark
                  }
                }} />
            )}
          </Grid>
          <Grid item xs={1} sx={centeredStyle}><AttachMoneyIcon /></Grid>

          <Grid item xs={4} sx={centeredStyle}><Typography variant="body1">Accessibility :</Typography></Grid>
          <Grid item xs={7} sx={centeredStyle}>
            <LinearProgress variant="determinate" value={(1 - data.accessibility) * 100} 
              sx={{
                width: "100%",
                height: '10px',
                borderRadius: '5px',
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: theme.palette.secondary.dark
                }
              }} />
          </Grid>
          <Grid item xs={1} sx={centeredStyle}><AccessibilityNewIcon /></Grid>
        </Grid>
        
      </Box>
    </Box>
  );
};

export default HAnswer;
