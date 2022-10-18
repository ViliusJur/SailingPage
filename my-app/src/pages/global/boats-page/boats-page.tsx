import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar/sidebar';
import HomeSectionHeading from '../components/home-section-heading';

const BoatsPage: React.FC = () => {
  const imageLink: string = 'https://mbsc.ie/wp-content/uploads/2016/08/high-resolution-sailing-wallpaper.jpg';
  return (
    <div>
      <Box
        sx={{
        backgroundImage: `url(${imageLink})`,
        height: 300,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }}
      />
      <HomeSectionHeading align="center">Boats page</HomeSectionHeading>
      <Toolbar />
      <Sidebar />
    </div>
  );
};
export default BoatsPage;
