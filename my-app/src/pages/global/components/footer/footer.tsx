import React from 'react';
import {
    Container,
    Grid,
    Box,
    Link,
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// type FooterProps = {
//   navigation: Navigation[]
// };

// const Footer: React.FC<FooterProps> = ({ navigation }) => {
//   const navigate = useNavigate();
const Footer = () => (
  <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.secondary"
      color="white"
    //   sx={(theme) => ({
    //     backgroundColor: theme.palette.primary.light,

    // })}

    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={10} sm={4}>
            <Box borderBottom={1} mb={2}>Help</Box>
            <Box>
              <Link href="/" color="inherit" mb={1}>
                Contact
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Support
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1} mb={2}>Account</Box>
            <Box>
              <Link href="/login" color="inherit">
                Login
              </Link>
            </Box>
            <Box>
              <Link href="/register" color="inherit">
                Register
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Project sailing &reg;
          {' '}
          {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
  );

export default Footer;
