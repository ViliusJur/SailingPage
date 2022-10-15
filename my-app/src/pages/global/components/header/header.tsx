import React from 'react';
import {
    Box,
    Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  navigation: Navigation[]
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const navigate = useNavigate();
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
              navigation.map((navBtn) => (
                <Button onClick={() => navigate(navBtn.where)} sx={(theme) => ({ pl: 5, color: theme.palette.common.white, fontWeight: 'bold' })} key={navBtn.name} variant="text">{navBtn.name}</Button>))
        }
    </Box>
  );
};

export default Header;
