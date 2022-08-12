import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../hooks/Consts'



const  HomePage = () => {
    const navigate = useNavigate()
    const goToPage = (url) => {
        navigate(url)
    }

    return ( 
        <>
        <p>HomePage</p>
        <button onClick = {() => goToPage("trips/list")}>Lista de Viagens</button>
        <button onClick = {() => goToPage("/admin/trips/list")}> Área Administrativa </button>
        </>
    
    )
}
export default HomePage
