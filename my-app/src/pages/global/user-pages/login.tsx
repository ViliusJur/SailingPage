import React, { useRef } from 'react';
import { Box, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../services/user-service';
import HomeSectionHeading from '../components/home-section-heading';

const Login: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function login() {
        const user = {
            email: emailRef.current?.value,
            password: passRef.current?.value,
        };

        const res = await UserService.userEnter('login', user);

        if (!res.error) {
          localStorage.setItem('secret', res.data ? res.data.secret : '');
          navigate('/');
        }

        console.log(res);
    }

    return (
      <div>
        <HomeSectionHeading align="center">Login page</HomeSectionHeading>
        <Toolbar />
        <Box sx={{ mb: 4 }}>
          <div><input ref={emailRef} type="text" placeholder="email" /></div>
          <div><input ref={passRef} type="text" placeholder="pass" /></div>
          <Button variant="outlined" onClick={() => login()}>Login</Button>
        </Box>
      </div>
    );
};

export default Login;
