import React, { useRef } from 'react';
import { Box, Button, Toolbar } from '@mui/material';
import UserService from '../../../services/user-service';
import HomeSectionHeading from '../components/home-section-heading';

const RegistrationPage: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passOneRef = useRef<HTMLInputElement>(null);
    const passTwoRef = useRef<HTMLInputElement>(null);

    async function register() {
        const user = {
            email: emailRef.current?.value,
            passOne: passOneRef.current?.value,
            passTwo: passTwoRef.current?.value,
        };

        const res = await UserService.userEnter('register', user);

        console.log(res);
    }

    return (
      <div>
        <HomeSectionHeading align="center">Sign Up page</HomeSectionHeading>
        <Toolbar />
        <Box sx={{ mb: 4 }}>
          <div><input ref={emailRef} type="text" placeholder="email" /></div>
          <div><input ref={passOneRef} type="text" placeholder="pass one" /></div>
          <div><input ref={passTwoRef} type="text" placeholder="pass two" /></div>
          <Button variant="outlined" onClick={() => register()}>Register</Button>
        </Box>
      </div>
    );
};

export default RegistrationPage;
