import React from "react";
import './projects.scss'


import chamados from "../../assets/chamados2.png"
import prime from "../../assets/primeflix.png"
import tarefas from "../../assets/tarefas2.png"

import {DiHtml5, DiCss3, DiJavascript1, DiReact, DiSass, DiJavascript} from 'react-icons/di'

export default () => {
    return(
        <div id="projects" className="projects">
            <h1>Projetos</h1>
            <div className="container-cards">
                <a data-aos="zoom-in" target="_blank" href="https://reactarefas.netlify.app/" className="cards" style={{backgroundImage: `url(${tarefas})`}}>
                        <p className="title">Lista de tarefas</p>
                        <div className="icons">
                            <DiReact size={35} color="white"/>
                            <DiSass size={35} color="white"/>
                        </div>
                        <div className="background-black"/>
                    </a>

                    <a data-aos="zoom-in" target="_blank" href="https://sistemachamadosreact.netlify.app" className="cards" style={{backgroundImage: `url(${chamados})`}}>
                        <p className="title">Aplicativo Sistema de Chamados</p>
                        <div className="icons">
                            <DiReact size={35} color="white"/>
                            <DiSass size={35} color="white"/>
                        </div>
                        <div className="background-black"/>
                    </a>

                    <a data-aos="zoom-in" target="_blank" href="https://filmeflixprime.netlify.app" className="cards" style={{backgroundImage: `url(${prime})`}}>
                        <p className="title">Filmes em cartazes</p>
                        <p className="title">consumidos por api</p>
                        <div className="icons">
                            <DiReact size={35} color="white"/>
                            <DiSass size={35} color="white"/>
                            
                        </div>
                        <div className="background-black"/>
                    </a>
            </div>
        </div>
    )
}