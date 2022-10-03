import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const GlobalLayout: React.FC = () => (
  <Box>
    <Container>
      <Outlet />
    </Container>
  </Box>
);

export default GlobalLayout;
