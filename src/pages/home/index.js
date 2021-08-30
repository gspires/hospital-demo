import React from 'react'

import Header from '../../parts/header/Header'
import Logo from '../../parts/logo'
import ContainerMenu from '../../parts/container-menu'
import Services from '../../parts/services'
import TitleSection from '../../parts/title-section'
import SobreNos from '../../parts/sobre-nos'
import Faixa from '../../parts/faixa'
import ContainerWebService from '../../parts/container-web-service'
import Map from '../../parts/map'
import GALLERY from '../../parts/gallery'
import Footer from '../../parts/footer'

function Home(){
    return(
        <div>
            <Header />
            <Logo />
            <ContainerMenu />
            <Services />
            <TitleSection title='WE ARE HOSPITAL'/>
            <SobreNos />
            <Faixa />
            <TitleSection title='OUR SERVICES'/>
            <ContainerWebService />
            <Map />
            <TitleSection title='FROM THE GALLERY'/>
            <GALLERY />
            <Footer />

        </div>
    )
}
export default Home