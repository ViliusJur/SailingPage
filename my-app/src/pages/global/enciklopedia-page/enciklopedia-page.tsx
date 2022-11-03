import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeSectionHeading from '../components/home-section-heading';
import Specification from './components/specification';
import SpecificationContext from './components/specification-context';

const EnciklopediaPage: React.FC = () => {
  const imageLink: string = 'https://st3.depositphotos.com/1053646/16102/i/1600/depositphotos_161024728-stock-photo-beautiful-sailboats-in-the-dock.jpg';

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
      <HomeSectionHeading align="center">Enciklopedia</HomeSectionHeading>
      <Toolbar />

      <SpecificationContext>
        <Specification />
      </SpecificationContext>
    </div>
  );
};

export default EnciklopediaPage;
