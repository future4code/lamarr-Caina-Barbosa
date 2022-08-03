import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';


export function Profile (props){
    const id = props.profile.id
    const cp_url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caina-perotti-lamarr/choose-person`
    

    function like () {
        const body = {
            id: id,
            choice: true
        }
        axios.post(cp_url, body).then((response) => {
            if(response.data.isMatch == true) {
                alert("Deu match!")
            }
            else {
                alert("Não foi dessa vez amigue, bora pra próxima")
            }
            props.setControl(props.control + 1)
        }).catch((error) => {
            alert("Algo deu errado")
        })
    } 

    function dislike () {
        const body = {
            id: id,
            choice: false
        }
        axios.post(cp_url, body).then((response) => {
            console.log("Descartado")
            props.setControl(props.control + 1)
        }).catch((error) => {
            alert("Algo deu errado")
        })
    } 
    
    return (
        <div>
            <img src= {props.profile.photo} alt = {props.profile.photo_alt}/>
            <h3>{props.profile.name}</h3>
            <h4>{props.profile.age}</h4>
            <p>{props.profile.bio}</p>
            <button onClick={like}>Quero</button>
            <button onClick = {dislike}>Num Quero</button>
        </div>

    )
}