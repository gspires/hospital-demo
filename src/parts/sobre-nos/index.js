import React from 'react'
import Bloco2 from '../../components/bloco2'
import './style.css'

import Doctor from '../../img/doctor.jpg'
import Medical from '../../img/medical.jpg'
import Equipe from '../../img/equipe.jpg'

function SobreNos(){
    return(
        <div className='sobre-nos'>
            <Bloco2 title='WHO WE ARE' img={Doctor} text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nulla sed metus viverra, et bibendum diam ullamcorper'/>
            <Bloco2 title='WHAT WE DO' img={Medical} text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nulla sed metus viverra, et bibendum diam ullamcorper'/>
            <Bloco2 title='OUR MISSION' img={Equipe} text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nulla sed metus viverra, et bibendum diam ullamcorper'/>
        </div>
    )
}

export default SobreNos