import React from "react";
import { useTheme, Typography, Box, Divider, Chip, LinearProgress, Grid, alpha, Tooltip } from "@mui/material";

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
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 1.5,
        backgroundColor: alpha(theme.palette.background.default, 0.5),
        backdropFilter: "blur(10px)",
        p: theme.spacing(2),
        textAlign: "center",
        boxShadow: `2px 1px 8px 2px ${theme.palette.primary.main}`
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="fontWeightBold"
        sx={{
          color: theme.palette.secondary.dark,
          textShadow: `1px 1px 1px ${theme.palette.primary.main}`
        }}>
       - Your activity -
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
          }}>
          <Typography variant="h2" 
            sx={{
              color: theme.palette.primary.dark,
              width: "100%",
              wordWrap: "break-word",
              textShadow: `0px 0px 2px ${theme.palette.secondary.dark}`
              }}>
            {data.activity}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        
        {/* Informations Table */}
        <Grid container spacing={1} sx={{ width: "50%" }}>

          <Grid item xs={4} sx={centeredStyle}>
            <Tooltip title="Participants" placement="left">
              <GroupIcon sx={{ color: theme.palette.primary.dark, fontSize: 28 }}/>
            </Tooltip>
          </Grid>
          <Grid item xs={7} sx={centeredStyle}>
            <Chip label={data.participants}
              sx={{
                backgroundColor: theme.palette.secondary.dark,
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
              }}/>
            </Grid>
          <Grid item xs={1} sx={centeredStyle}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.dark }}>-</Typography>
          </Grid>

          
          <Grid item xs={4} sx={centeredStyle}>
            <Tooltip title="Type" placement="left">
              <CategoryIcon sx={{ color: theme.palette.primary.dark, fontSize: 28 }}/>
            </Tooltip>
          </Grid>
          <Grid item xs={7} sx={centeredStyle}>
            <Chip label={data.type}
              sx={{
                backgroundColor: theme.palette.secondary.light,
                boxShadow: `0px 2px 4px ${theme.palette.primary.dark}`
              }}/>
          </Grid>
          <Grid item xs={1} sx={centeredStyle}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.dark }}>-</Typography>
          </Grid>

          
          <Grid item xs={4} sx={centeredStyle}>
            <Tooltip title="Price" placement="left">
              <AttachMoneyIcon sx={{ color: theme.palette.primary.dark, fontSize: 28 }}/>
            </Tooltip>
          </Grid>
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
                }}/>
            )}
          </Grid>
          <Grid item xs={1} sx={centeredStyle}>
          {data.price === 0 ? (
            <Typography variant="body1" sx={{ color: theme.palette.primary.dark }}>-</Typography>
          ) : (
            <Typography variant="body1" sx={{ color: theme.palette.primary.dark }}>{`${Math.round(data.price * 100)} %`}</Typography>
          )}
          </Grid>

          <Grid item xs={4} sx={centeredStyle}>
            <Tooltip title="Accessibility" placement="left">
              <AccessibilityNewIcon sx={{ color: theme.palette.primary.dark, fontSize: 28 }}/>
            </Tooltip>
          </Grid>
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
              }}/>
          </Grid>
          <Grid item xs={1} sx={centeredStyle}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.dark }}>{`${Math.round((1 - data.accessibility) * 100)} %`}</Typography>
          </Grid>
        </Grid>
        
      </Box>
    </Box>
  );
};

export default HAnswer;
