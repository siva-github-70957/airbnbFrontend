import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';

const IndexPage = () => {

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
            setPlaces([...response.data])
            // setPlaces(response.data);
        });
    }, []);



    return (
        <div className=" mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {place.photos?.[0] && (
                            <img className="rounded-2xl object-cover aspect-square " src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt='Image' />
                        )}
                    </div>
                    <h3 className="font-bold ">{place.address}</h3>
                    <h2 className="text-sm  leading-4 text-gray-500">{place.title}</h2>
                    <div className="mt-1">
                        <span className="font-bold">${place.price}</span> only per night !</div>
                </Link>
            ))}
            {/* <img className="rounded-2xl object-cover aspect-square " src={'https://airbnbclonebackend-n253.onrender.com/uploads/' + place.photos?.[0]} alt='Image' /> */}
        </div>
    )
}

export default IndexPage;