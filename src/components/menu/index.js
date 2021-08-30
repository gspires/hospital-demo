import React from 'react'
import './style.css'


function Menu(){
    return(
        <div className='menu'>
            <ul>
                <a href='/#'><li>HOME</li></a>
                <a href='/#'><li>ABOUT</li></a>
                <a href='/#'><li>SERVICES</li></a>
                <a href='/#'><li>DOCTORS</li></a>
                <a href='/#'><li>GALLERY</li></a>
                <a href='/#'><li>BLOG</li></a>
                <a href='/#'><li className='border-right'>APARTEDASDS</li></a>
            </ul>
        </div>
    )
}

export default Menu