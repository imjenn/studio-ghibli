import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
        if (password !== confirmPassword || password.length === 0) {
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

    console.log(newUser);

    return (
        <form onSubmit={registerHandler}>
            { error ? <p>{error}</p> : null }
            <h1>Create an Account</h1>
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
                    type="text" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Confirm Password" 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="login-link">
                <p>Already registered?</p> 
                <a href="">Log in</a>
            </div>
            <button>Sign Up</button>
        </form>
    )
}

export default Register;