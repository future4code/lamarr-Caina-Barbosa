import React from "react";
import { DivPai, FormItems, ButtonNext } from "../style.js"

export function Etapa1  (props) {
    return  <DivPai>
    <h1>ETAPA 1: Dados Gerais</h1>
    <FormItems>
        <label for = "name">Nome</label>
        <input id = "name"></input> 
    </FormItems>
    <FormItems>
        <label for = "age">Idade</label>
        <input type = "" id = "age"></input> 
    </FormItems>
    <FormItems>
        <label for = "email">Email</label>
        <input  type = "email" id = "email"></input> 
    </FormItems>
    <p>Qual o seu grau de escolaridade?</p>
    <FormItems>
        <input type="radio" id="Ensino Médio Incompleto" name="scolarship" value="Ensino Médio Incompleto"/>
        <label for="Ensino Médio Incompleto">Ensino Médio Incompleto</label>
        <input type="radio" id="Ensino Médio Completo" name="scolarship" value="Ensino Médio Completo"/>
        <label for="Ensino Médio Completo">Ensino Médio Completo</label>
        <input type="radio" id="Ensino Superior Incompleto" name="scolarship" value="Ensino Superior Incompleto"/>
        <label for="Ensino Superior Incompleto">Ensino Superior Incompleto</label>
        <input type="radio" id="Ensino Superior Completo" name="scolarship" value="Ensino Superior Completo"/>
        <label for="Ensino Superior Completo">Ensino Superior Completo</label>
    </FormItems>
    <ButtonNext onClick={props.passaEtapa}>Seguir</ButtonNext>
    </DivPai>
}