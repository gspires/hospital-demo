import React from 'react'
import './style.css'


function Bloco2(props) {
    return (
        <div className='bloco2'>
            <div className='img'>
                <img src={props.img} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Bloco2