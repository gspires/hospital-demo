import React from 'react'
import './style.css'

import { FaHospital } from 'react-icons/fa'

import Menu from '../../components/menu'


function Part1(){
    return(
        <div className='container-menu'>
            <Menu />
            <div className='background'>
                <div>
                    <FaHospital className='icon'/>
                    <h1>WELCOME TO HOSPITAL</h1>
                    <p>WE BUILD AWESOMENESS WITH OUR PRO SKILLS</p>
                    <button>HOOK ME UP</button>
                </div>
            </div>
        </div>
    )
}

export default Part1