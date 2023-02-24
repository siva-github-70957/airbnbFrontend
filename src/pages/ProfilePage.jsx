import { useContext, useState } from "react"
import { Link, Navigate, redirect, useParams } from 'react-router-dom';
import { UserContext } from "../UserContext.js";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/AccountNav";

export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) { subpage = 'profile'; }

    async function logout() {
        const ress = await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return (<div className="flex justify-center items-center h-screen w-screen">
            <div><h4>Loading...
                (if still showing loading , pls refresh the page..)</h4></div>
        </div>);
    }

    if (ready && !user && !redirect) {
        return <Navigate to={"/login"} />
    }



    if (redirect)
        return <Navigate to={redirect} />

    return (
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}

            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}