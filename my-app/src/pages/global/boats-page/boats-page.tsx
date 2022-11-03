import React from 'react';
// import { useParams } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar/sidebar';
import HomeSectionHeading from '../components/home-section-heading';

const BoatsPage: React.FC = () => {
  const imageLink: string = 'https://st3.depositphotos.com/1053646/16102/i/1600/depositphotos_161024728-stock-photo-beautiful-sailboats-in-the-dock.jpg';
  // const { year } = useParams();
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
