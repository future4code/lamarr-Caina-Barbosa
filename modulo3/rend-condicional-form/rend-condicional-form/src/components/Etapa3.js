import React from "react";
import { DivPai, FormItems, ButtonNext } from "../style.js"

export function Etapa3  (props) {
    return  <DivPai>
    <h1>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h1>
    <FormItems>
        <label for = "unfinishedReason">Por que você não terminou um curso de graduação?</label>
        <input id = "unfinishedReason"></input> 
    </FormItems>
    <p>Você fez algum curso complementar?</p>
    <FormItems>
        <input type="radio" id="Curso Técnico" name="extraCourse" value="Curso Técnico"/>
        <label for="Curso Técnico">Curso Técnico</label>
        <input type="radio" id="Curso de Inglês" name="extraCourse" value="Curso de Inglês"/>
        <label for="Curso de Inglês">Curso de Inglês</label>
        <input type="radio" id="Não fiz curso complementar" name="extraCourse" value="Não fiz curso complementar"/>
        <label for="Não fiz curso complementar">Não fiz curso complementar</label>
    </FormItems>
    <ButtonNext onClick={props.passaEtapa}>Finalizar</ButtonNext>
    </DivPai>
}