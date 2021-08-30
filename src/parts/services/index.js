import React from 'react'
import './style.css'
import { FaHospital, FaStethoscope, FaBed, FaAmbulance } from 'react-icons/fa';
import Service from '../../components/service';

function Services() {
    return (
        <div className='blocos'>
            <Service color='34ABB1' icons={<FaHospital className='icon-service'/>} title='WELCOME TO HOSPITAL' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis tellus ut fermentum tempor' />
            <Service color='2EB5BB' icons={<FaStethoscope className='icon-service'/>} title='Orthopedics Service' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis tellus ut fermentum tempor' />
            <Service color='37BEC4' icons={<FaBed className='icon-service'/>} title='Operating Theaters' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis tellus ut fermentum tempor' />
            <Service color='42C9CF' icons={<FaAmbulance className='icon-service'/>} title='Emergency' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis tellus ut fermentum tempor' />
        </div>

    )
}

export default Services