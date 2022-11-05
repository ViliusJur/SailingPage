import React, { useRef } from 'react';
import UserService from '../../../services/user-service';

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

        const data = await UserService.userEnter('register', user);

        console.log(data);
    }

    return (
      <div>
        <input ref={emailRef} type="text" placeholder="email" />
        <input ref={passOneRef} type="text" placeholder="pass one" />
        <input ref={passTwoRef} type="text" placeholder="pass two" />
        <button onClick={register}>Register</button>
      </div>
    );
};

export default RegistrationPage;
