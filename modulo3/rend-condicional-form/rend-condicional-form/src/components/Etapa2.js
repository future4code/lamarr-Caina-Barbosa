import React from "react";
import { DivPai, FormItems, ButtonNext } from "../style.js"

export function Etapa2  (props) {
    return  <DivPai>
    <h1>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h1>
    <FormItems>
        <label for = "course">Qual o curso?</label>
        <input id = "course"></input> 
    </FormItems>
    <FormItems>
        <label for = "institution">Qual a unidade de ensino?</label>
        <input id = "institution"></input> 
    </FormItems>
    <ButtonNext onClick={props.passaEtapa}>Seguir</ButtonNext>
    </DivPai>
}