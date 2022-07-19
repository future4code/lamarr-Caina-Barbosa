import React from "react";
import { DivPai, ButtonNext } from "../style.js"


export function EtapaFinal  (props) {
    return  <DivPai>
    <h1>Muito obrigado por preencher este formulário!</h1>
    <ButtonNext onClick={props.passaEtapa} >Reiniciar</ButtonNext>
    </DivPai>
}