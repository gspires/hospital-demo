import React from 'react'
import './style.css'


function Service(props) {
    console.log(props)
    return (
        <div className='service' style={{ background: `#${props.color}` }}>
            {props.icons}
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Service