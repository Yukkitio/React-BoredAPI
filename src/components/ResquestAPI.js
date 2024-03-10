import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';

const ResquestAPI = () => {
  // useState pour stocker les données de l'activité
  const [activity, setActivity] = useState(null);
  // useState pour suivre l'état de chargement
  const [loading, setLoading] = useState(false);
  // useState pour stocker les messages d'erreur
  const [error, setError] = useState(null);

  // useEffect pour exécuter le fetch lors du montage du composant
  useEffect(() => {

    const fetchActivity = async () => {

      setLoading(true);

      try {
        const response = await fetch('http://www.boredapi.com/api/activity/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setActivity(data);

      } catch (error) {
        setError(error.message);
      } finally {

        setLoading(false);

      }
    };

    fetchActivity();

  }, []);

  // Afficher un chargement pendant que la requête est en cours
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error">{error}</Alert>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {activity && (
          <Typography>
            Activity: {activity.activity},
            Accessibility: {activity.accessibility},
            Type: {activity.type},
            Participants: {activity.participants},
            Price: {activity.price}
          </Typography>
      )}
    </Box>
  );
};

export default ResquestAPI;
