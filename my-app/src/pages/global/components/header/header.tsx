import React from 'react';
import {
    Box,
    Button,
} from '@mui/material';

const Header: React.FC = () => {
const mainButtons: string[] = ['Home', 'Boats', 'Enciklopedia', 'Events', 'Login'];

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        justifyContent: 'flex-end',
        height: 100,

    })}
    >
      {
            mainButtons.map((buttonName) => (
              <Button sx={(theme) => ({ pl: 5, color: theme.palette.common.white, fontWeight: 'bold' })} key={buttonName} variant="text">{buttonName}</Button>))
      }
    </Box>
  );
};

export default Header;
