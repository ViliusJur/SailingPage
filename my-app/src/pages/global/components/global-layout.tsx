import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './header/header';
import Footer from './footer/footer';

const GlobalLayout: React.FC = () => {
  const navigation: Navigation[] = [
    {
      where: '/',
      name: 'Home',
    },
    {
      where: '/boats',
      name: 'Boats',
    },
    {
      where: '/',
      name: 'Enciklopedia',
    },
    {
      where: '/',
      name: 'Events',
    },
    {
      where: '/',
      name: 'Login',
    },
  ];
  return (
    <Box>
      <Container>
        <Header navigation={navigation} />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
};

export default GlobalLayout;
