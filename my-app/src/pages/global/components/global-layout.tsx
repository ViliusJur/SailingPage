import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './header/header';
import Footer from './footer/footer';

const GlobalLayout: React.FC = () => (
  <Box>
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  </Box>
);

export default GlobalLayout;
