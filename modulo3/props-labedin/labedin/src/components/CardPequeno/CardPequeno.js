import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.icon } />
            <div>
                <p> <strong>{ props.addressType }:</strong> { props.address}</p>
            </div>
        </div>
    )
}

export default CardPequeno;