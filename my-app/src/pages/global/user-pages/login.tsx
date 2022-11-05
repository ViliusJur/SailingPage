import React, { useRef } from 'react';
import UserService from '../../../services/user-service';

const Login: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    async function login() {
        const user = {
            email: emailRef.current?.value,
            password: passRef.current?.value,
        };

        const data = await UserService.userEnter('login', user);
        console.log(data);
    }

    return (
      <div>
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={passRef} type="text" placeholder="password" />
        <button onClick={login}>Login</button>
      </div>
    );
};

export default Login;
