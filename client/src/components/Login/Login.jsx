import { useState } from 'react';
import axios from 'axios';
import eye from '../../assets/eye-svgrepo-com.svg';
import './Login.css';

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const showPassword = () => {
        const pass = document.getElementById("password");
        if (pass.type === "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const loginChangeHandler = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Login</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    onChange={loginChangeHandler}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    placeholder="password"
                    onChange={loginChangeHandler}
                />
                <img 
                    src={eye} 
                    alt="Display password icon" 
                    onClick={showPassword} 
                />
            </div>
            <div className="login-link">
                <p>No account yet?</p> 
                <a href="/register">Sign Up</a>
            </div>
            <button className="register-button">Login</button>
        </form>
    )
}

export default Login;