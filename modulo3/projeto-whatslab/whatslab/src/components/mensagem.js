import React from 'react';
import {MessageDisplay, Message, Sender} from './style.js'

export function Mensagem (props) {
    return <MessageDisplay>
        <Sender>{props.remetente}:</Sender>
        <Message>{props.texto}</Message>
    </MessageDisplay>

}