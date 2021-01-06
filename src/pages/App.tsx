import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function Hello(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', height: '80vh' }}>
      <Box sx={{ margin: 'auto' }}>
        <Typography variant="h3">Raven Menssenger!</Typography>
      </Box>
    </Box>
  );
}
