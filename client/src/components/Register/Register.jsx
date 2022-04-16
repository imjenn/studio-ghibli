import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import eye from '../../assets/eye-svgrepo-com.svg';
import './Register.css';

const Register = () => {
    // const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState("");

    const newUser = {
        firstName,
        lastName,
        email,
        password
    }

    const registerHandler = (e) => {
        e.preventDefault();
        console.log(newUser);
        if (password != confirmPassword) {
            setError("Passwords do not match.")
        }
        else if (password.length === 0) {
            setError("Please enter a valid password.")
        } else {
            axios.post('http://localhost:1337/register', newUser)
                .then(res => {
                    console.log(res);
                    // history.push('/home')
                })
                .catch(err => { 
                    setError("Please fix the values below.")
                });
        }
    }

    const showPassword = (e) => {
        const pass = document.getElementById(e);
        if (pass.type === "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
        }
    }

    return (
        <form onSubmit={registerHandler}>
            <h1>Create an Account</h1>
            { error ? <p style={{color: 'crimson'}}>{error}</p> : null }
            <div>
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    id="lastName"
                    placeholder="Last Name" 
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <img 
                    src={eye} 
                    alt="Display password icon" 
                    onClick={(e) => showPassword("password")} 
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    id="confirm-password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <img 
                    src={eye} 
                    alt="Display password icon" 
                    onClick={(e) => showPassword("confirm-password")} 
                />
            </div>
            <div className="login-link">
                <p>Already registered?</p> 
                <a href="/login">Log in</a>
            </div>
            <button className="register-button">Sign Up</button>
        </form>
    )
}

export default Register;