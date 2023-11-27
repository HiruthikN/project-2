/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import './styles/login.css';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //login logic here
        setUsername('');
        setPassword('');
        alert('Login successful!');
        // Redirect to the home
        navigate('/home');
    };

    return (
        <>
            <Navbar> 
                <Navbar.Brand href="">OnePlus</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <Button type="submit">Login</Button>
                </form>
            </Container>
        </>
    );
};

export default LoginPage;
