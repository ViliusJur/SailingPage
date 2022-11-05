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
      where: '/enciklopedia',
      name: 'Enciklopedia',
    },
    {
      where: '/',
      name: 'Events',
    },
    {
      where: '/login',
      name: 'Login',
    },
    {
      where: '/register',
      name: 'Sign Up',
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
