import { Box, Typography } from '@mui/material';
import React from 'react';
import BoatsHomeSection from './components/boats-home-section';
import HomeSectionHeading from '../components/home-section-heading';
import EventsHomeSection from './components/events-home-section';

const HomePage: React.FC = () => {
  const imageLink: string = 'https://mbsc.ie/wp-content/uploads/2016/08/high-resolution-sailing-wallpaper.jpg';

  return (
    <>
      <Box
        sx={{
        backgroundImage: `url(${imageLink})`,
        height: 400,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }}
      />
      <Typography sx={{
                    textAlign: 'center',
                    pt: 5,
                    fontSize: 20,
                    fontStyle: 'italic',
        }}
      >
        Welcome to ProjectSailig page! Here you can get to know some best rated
        cruizing sailing boats. Learn thing or two about boats, their technical characteristics.
        Find out some basic sailing skills like navigation, sail types, knots and more.
        <br />
        {' '}
        Let your sailing project begin!
      </Typography>

      <HomeSectionHeading align="center">Recent Boats</HomeSectionHeading>
      <BoatsHomeSection />
      <HomeSectionHeading align="center" mb={4}>Events</HomeSectionHeading>
      <EventsHomeSection />
    </>
  );
};

export default HomePage;
