import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ errors: ' ' });
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const validateForm = () => {
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Username is required!';
        }

        if (!password) {
            newErrors.password = 'Password is required!';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm the password';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
    }

    useEffect(() => {
        validateForm();
    }, [username, password, confirmPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            try {
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('post request success');
                setErrors({});
                navigate('/');
            } else {
                if (response.status === 400) { 
                    const newErrors = {};
                    newErrors.duplicateUser = data.error;
                    setErrors(newErrors);
                }
            }

            } catch (err) {
                console.error('Error', err);
            }
        }
        
    }

    return (
        <div>
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                {errors.username && <span>{errors.username}</span>}
                {errors.duplicateUser && <span>{errors.duplicateUser}</span>}
                
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
                {errors.password && <span>{errors.password}</span>}
                
                <label htmlFor='confirm-password'>Confirm Password</label>
                <input type='password' name='confirm-password' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                
                <button>Submit</button>
            </form>
            <a href='http://localhost:3000/'>Or login instead!</a>
        </div>
    );
}

export default Signup