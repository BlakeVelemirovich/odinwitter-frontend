import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class='login'>
            <h1>Login!</h1>
            <form>
                <label for='username'>Username</label>
                <input type='text' name='username' value={username} />
                <label for='password'>Password</label>
                <input type='password' name='password' value={password} />
                <button>Submit</button>
            </form>
            <a href='http://localhost:3000/signup'>Click here to signup instead!</a>
        </div>
    );
}

export default Login