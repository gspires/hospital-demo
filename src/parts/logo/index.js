import React from 'react'
import './style.css'

import Hospital from '../../img/hospital.jpg'

function Logo(){
    return(
        <div className='logo'>
            <img src={Hospital} alt='This is the hospital logo '/>
        </div>
    )
}

export default Logo