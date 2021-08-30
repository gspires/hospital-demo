import React from 'react'
import './style.css'

function Bloco3(props) {
    return (
        <div className={`web-service ${props.border}`}>
            <div className='img'>
                {props.icons}
            </div>
            <div className='text'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Bloco3