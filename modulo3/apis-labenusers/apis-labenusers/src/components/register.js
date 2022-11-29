import React, {useState} from "react"
import '../App.css';

export function Register (props){
    
    return (
        <div>
            <h1>Insira seus dados para cadastro</h1>
            <div>
                <label>Email</label>
                <input value = {props.email} onChange = {props.handleEmail}></input>
                <label>Nome</label>
                <input value = {props.name} onChange = {props.handleName}></input>
                <button onClick = {props.submitData}>Enviar dados</button>
            </div>
        </div>

    )
}