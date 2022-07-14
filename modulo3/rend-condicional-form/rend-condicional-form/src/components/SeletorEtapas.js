import React, {useState} from "react";
import { Etapa1 } from './Etapa1';
import { Etapa2 } from './Etapa2';
import { Etapa3 } from "./Etapa3.js";
import { EtapaFinal } from "./EtapaFinal.js";


export function SeletorEtapas (){

const [etapaState, setEtapaState] = useState(0)

function proxEtapa() {
    setEtapaState(etapaState + 1);
}

function resetEtapa () {
    setEtapaState(0);
}


switch (etapaState) {
    case 0 :
        return <Etapa1 passaEtapa = {proxEtapa}/>
        break
    case 1 : 
        return <Etapa2 passaEtapa = {proxEtapa} />
        break
    case 2 : 
        return <Etapa3 passaEtapa = {proxEtapa} />
        break  
    case 3 :
        return <EtapaFinal passaEtapa = {resetEtapa} />  
    break 
}


}
