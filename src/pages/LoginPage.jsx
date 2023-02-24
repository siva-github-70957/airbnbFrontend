import { useContext, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('login successfull');
            setRedirect(true);
        }
        catch (e) {
            alert('login failed');
        }
    }

    if (redirect) { return <Navigate to='/' /> };

    return (
        <div className="m-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login page</h1>
                <form className="max-w-md mx-auto " onSubmit={handleLoginSubmit}>
                    <input
                        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button
                        type='submit' className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Dont'have an account yet ? <Link className="underline text-black" to="/Register">Register Now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;