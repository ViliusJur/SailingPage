import React, { useRef, useState } from 'react';
import {
 Box, Button, Toolbar, Typography,
} from '@mui/material';
import UserService from '../../../services/user-service';
import HomeSectionHeading from '../components/home-section-heading';

const RegistrationPage: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passOneRef = useRef<HTMLInputElement>(null);
    const passTwoRef = useRef<HTMLInputElement>(null);

    const [msg, setMsg] = useState('');

    async function register() {
        const user = {
            email: emailRef.current?.value,
            passOne: passOneRef.current?.value,
            passTwo: passTwoRef.current?.value,
        };

        const res = await UserService.userEnter('register', user);

        if (res.error) {
          setMsg(res.message);
        }

        console.log(res);
    }

    return (
      <div>
        <HomeSectionHeading align="center">Sign Up page</HomeSectionHeading>
        <Toolbar />
        <Box sx={{ mb: 4 }}>
          <div><input ref={emailRef} type="text" placeholder="email" /></div>
          <div><input ref={passOneRef} type="text" placeholder="password" /></div>
          <div><input ref={passTwoRef} type="text" placeholder="repeat password" /></div>
          <Button variant="outlined" onClick={() => register()}>Register</Button>
        </Box>
        <Typography variant="h3">{msg}</Typography>
      </div>
    );
};

export default RegistrationPage;
