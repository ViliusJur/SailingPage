import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const GlobalLayout: React.FC = () => (
  <Box>
    <Box sx={(theme) => theme.mixins.toolbar} />
    sjsdj
    <Outlet />
  </Box>
);

export default GlobalLayout;
