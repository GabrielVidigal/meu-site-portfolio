import React from "react";
import './footer.scss';

import {BsLinkedin, BsGithub} from 'react-icons/bs'

import Logo from '../../assets/Logopurple.png'

export default () => {
    return(
        <footer>
            <div className="container-logo">
                <img src={Logo}/>
            </div>
            <div className="container-icons">
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-vidigal-5103a0218/">
                    <BsLinkedin size={30} color="#321473"/>
                </a>
                <a target="_blank" href="https://github.com/GabrielVidigal">
                    <BsGithub size={30} color="#321473"/>
                </a>
            </div>
        </footer>
    )
}