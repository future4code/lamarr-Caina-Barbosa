import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { BackButton, MatchDiv, MatchesList } from './style';


export function Matches (props){
    const [matchList, setMatchList] = useState([])
    const [update, setUpdate] = useState(0)
    const gm_url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caina-perotti-lamarr/matches"
    const gm_get = axios.get(gm_url)
    const cl_url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caina-perotti-lamarr/clear"
    

    useEffect(() => {matchesCall()}, [update])

    function matchesCall () {
        
        gm_get.then((response) => {
            setMatchList(response.data.matches)
        }).catch((error) => {
            alert("Algo deu errado... Erro: ", error.data)
        })
    }

    function clearMatches () {
        axios.put(cl_url).then((response) => {
            alert("Limpo")
            setUpdate(update+1)
        }).catch((error) => {
            alert("Algo deu errado... Erro: ", error.data)
        })
    }


    const renderMatches = matchList.map(callbackMatches)

    function callbackMatches (object, index) {
        return <MatchDiv key = {index}>
                <img src={object.photo}/>
                <span>{object.name} - {object.age}</span>
            </MatchDiv>
    }

    return(
    <div>
        <MatchesList>
        {renderMatches}
        </MatchesList>
        <BackButton onClick={clearMatches}>Limpar Seus Matches</BackButton>
    </div>
    );



}