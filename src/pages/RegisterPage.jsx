import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(name, email, password);
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('registration successfull');
            navigate('/Login');
        }
        catch (e) {
            alert(e);
        }
    }
    return (
        <div className="m-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto " onSubmit={registerUser}>
                    <input
                        type="text" placeholder="Ex: Siva prasad" value={name} onChange={ev => setName(ev.target.value)} />
                    <input
                        type="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input
                        type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a Member ? <Link className="underline text-black" to="/Login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}