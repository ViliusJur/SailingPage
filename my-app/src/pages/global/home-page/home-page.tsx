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
        height: 500,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }}
      >
        <Typography sx={{
                    textAlign: 'center',
                    pt: 25,
                    fontSize: 28,
                    fontStyle: 'italic',
        }}
        >
          This is the text about sailing project
        </Typography>
      </Box>

      <HomeSectionHeading align="center">Recent Boats</HomeSectionHeading>
      <BoatsHomeSection />
      <HomeSectionHeading align="center">Events</HomeSectionHeading>
      <EventsHomeSection />
    </>
  );
};

export default HomePage;
