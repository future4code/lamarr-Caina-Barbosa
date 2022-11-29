import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useRequestData from '../hooks/UseRequestData';
import { useNavigate } from 'react-router-dom'


export function ListTripsPage (){
    const navigate = useNavigate()
    const goToPage = (url) => {
        navigate(url)
    }
    
    const listTripsUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caina-perotti-lamarr/trips"
    const [tripsObject, isLoading, error] = useRequestData(listTripsUrl)
    const TripList = tripsObject&&tripsObject.trips.map((t, index) => {
        return (
            <div key = {index} id = {t.id}>
                <h1>{t.planet}</h1>
                <h2>{t.name}</h2>
                <h3>{t.date}</h3>
                <p>{t.description}</p>
                <p>Duração: {t.durationInDays}</p>
                <button onClick={() => goToPage("/trips/application")}>Quero me inscrever</button>
            </div>
        )
    }) 


    if (isLoading) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div>
            <p>ListTripsPage</p>
            {TripList}
        </div>

    ) 
}
