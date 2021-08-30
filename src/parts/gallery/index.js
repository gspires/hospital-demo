import React from 'react'
import './style.css'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

import Foto1 from '../../img/foto1.jpg'
import Foto2 from '../../img/foto2.jpg'
import Foto3 from '../../img/foto3.jpg'
import Foto4 from '../../img/foto4.jpg'

function GALLERY() {
    return (
        <div className='gallery'>
            <div>
                <img src={Foto1} />
            </div>
            <div>
                <img src={Foto2} />
            </div>
            <div>
                <img src={Foto3} />
            </div>
            <div>
                <img src={Foto4} />
            </div>
        </div>
    )
}

export default GALLERY