import { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        validateForm();

        if (Object.keys(errors).length === 0) {
            try {
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                console.log('success');
            }
            else console.log('failure');

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