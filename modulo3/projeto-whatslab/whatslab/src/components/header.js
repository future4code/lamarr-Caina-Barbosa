import React from 'react';
import {HeaderStyle} from './style.js'

export function Header(props) {
    return <HeaderStyle>
        <img src = {props.icon}/>
        <h1>LabZap</h1>
    </HeaderStyle>
}