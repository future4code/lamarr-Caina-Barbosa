import axios from 'axios';
import React from 'react';
import Heart from '../img/like.png'
import X from '../img/dislike.png'
import { useEffect, useState } from 'react';
import { Matches } from './matches';
import { ProfileCard, ProfileDetails, MatchButtons, ProfilePic, BioText, ProfileToChoose } from './style';


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
        <ProfileToChoose>
            <ProfilePic src= {props.profile.photo} alt = {props.profile.photo_alt}></ProfilePic>
            <ProfileDetails>
                <span id = "name" >{props.profile.name},</span>
                <span>{props.profile.age}</span>
            </ProfileDetails>
            <BioText>
                <span className="bio">Bio:</span>
                <span>{props.profile.bio}</span>
            </BioText>
            <MatchButtons>
                <img src={Heart} onClick={like}/>
                <img src={X} onClick = {dislike}/>
            </MatchButtons>
        </ProfileToChoose>

    )
}