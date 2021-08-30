import React from 'react'
import './style.css'
import WebService from '../../components/web-service'
import { FaThermometerHalf, FaHeartbeat, FaHospitalAlt} from 'react-icons/fa'
import { IoBandageSharp} from 'react-icons/io5'
import { Ri24HoursLine } from 'react-icons/ri'
import { SiGoogleadsense } from 'react-icons/si'

function Part4(){
    return (
        <div className='contaier-web-service'>
            <WebService border='border-bottom border-right' icons={<FaThermometerHalf className='tam'/>} title='WEB DESIGN' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.'/>
            <WebService border='border-bottom border-right' icons={<FaHeartbeat className='tam'/>} title='WEB DEVELOPMENT' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.' />
            <WebService border='border-bottom' icons={<IoBandageSharp className='tam'/>} title='GRAPHIC DESIGN' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.'/>
            <WebService border='border-right' icons={<Ri24HoursLine className='tam'/>} title='SEO SERVICES' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.'/>
            <WebService border='border-right' icons={<FaHospitalAlt className='tam'/>} title='APP DEVELOPMENT' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.'/>
            <WebService icons={<SiGoogleadsense className='tam'/>} title='ADSENSE & ADWORDS' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisl eget dui semper convallis.'/>
        </div>
    )
}
export default Part4