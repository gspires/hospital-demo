import React from 'react'
import './style.css'

import { BiPhone } from 'react-icons/bi';
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';


function Footer() {
    return (
        <footer>
            <p>www.hospitalteste.com</p>
            <ul>
                <li><a href='/#'><FiFacebook /></a></li>
                <li><a href='/#'><FiGithub /></a></li>
                <li><a href='/#'><FiLinkedin /></a></li>
                <li><a href='/#'><FiInstagram /></a></li>
                <li><a href='/#'><FiMail /></a></li>
            </ul>
        </footer>
    )
}
export default Footer