import React from 'react'
import './style.css'


function TitleSection(props){
    return(
        <div className='title-section'>
            <h3>{props.title}</h3>
            <div id='linha-horizontal'></div>
        </div>
    )
}

export default TitleSection