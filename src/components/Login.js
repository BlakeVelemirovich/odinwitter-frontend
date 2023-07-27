import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                const { token } = data;

                sessionStorage.setItem('token', token);

                navigate('/');
            } else {
                const data = await response.json();
                if (data.error) newErrors.invalid = data.error;
                setErrors(newErrors);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='login'>
            <h1>Login!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
                <button>Submit</button>
                {errors.invalid && <span>{errors.invalid}</span>}
            </form>
            <a href='http://localhost:3000/signup'>Click here to signup instead!</a>
        </div>
    );
}

export default Login