import React from 'react';
import { Button, Input, LoginContainer, LoginForm } from './Login.style';

const Login = () => {
    return (
        <LoginContainer>
            <LoginForm>
                <h2 style={{ textAlign: 'center' }}>  Login Form</h2>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Submit</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
