import React from 'react';
import { Box, Typography, Container, Link, alpha, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
  <Box component="footer"
    sx={{
      mt:6,
      backgroundColor: alpha(theme.palette.background.default, 0.4),
      backdropFilter: 'blur(2px)',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTop: `2px solid ${theme.palette.primary.main}`,
      width: "97%",
      mx: "auto",
    }}>
    <Container maxWidth="lg">
      <Typography variant="body2" align="center" gutterBottom sx={{ color: theme.palette.primary.dark }}>
        © {new Date().getFullYear()} BoredWeb - Tous droits réservés.
      </Typography>
      <Typography variant="body2" align="center" sx={{ color: theme.palette.primary.dark }}>
        Le code sur
        <Link href="https://github.com/Yukkitio/React-BoredAPI" target="_blank" rel="noopener"
          sx={{
            ml:0.5,
            color: theme.palette.secondary.dark,
            textShadow: `1px 0px 1px ${theme.palette.primary.dark}`
            }}>
          GitHub
        </Link>
      </Typography>
    </Container>
  </Box>
  );
};

export default Footer;
