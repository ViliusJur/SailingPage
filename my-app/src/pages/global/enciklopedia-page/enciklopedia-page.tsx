import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeSectionHeading from '../components/home-section-heading';
import Specification from './components/specification';
import SpecificationContext from './components/specification-context';

const EnciklopediaPage: React.FC = () => {
  const imageLink: string = 'https://image.shutterstock.com/z/avopix-589924523.jpg';

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
