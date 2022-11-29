import React, {useState} from "react"
import '../App.css';

export function Userlist (props){
    
    return (
        <div>
            <span>{props.name}</span>
            <button id = {props.id} onClick={props.handler}>X</button>
        </div>

    )
}