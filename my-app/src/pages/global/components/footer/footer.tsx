import React from 'react';
import {
    Box,
    Button,
    TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type FooterProps = {
  navigation: Navigation[]
};

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={(theme) => ({
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    height: 240,
    mt: 5,
    justifyContent: 'space-between',
})}
    >
      <Box
        sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
    }}
      >
        {
              navigation.map((navBtn) => (
                <Button onClick={() => navigate(navBtn.where)} sx={(theme) => ({ pl: 5, color: theme.palette.common.white, fontWeight: 'bold' })} key={navBtn.name} variant="text">{navBtn.name}</Button>))
        }
      </Box>

      <Box
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        pr: 5,
        gap: '10px',
      }}
      >
        <TextField id="outlined-basic" label="Your email" variant="outlined" />
        <Button variant="contained" sx={(theme) => ({ backgroundColor: theme.palette.secondary.light, pr: 2 })}>Subscribe</Button>
      </Box>

    </Box>
  );
    };

export default Footer;
