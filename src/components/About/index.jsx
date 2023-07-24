import React from "react";
import './about.scss'

import imgAbout from '../../assets/imgabout.png'

export default () => {
    return(
        <div id="about" className="about">
            <h1 className="title">Sobre</h1>
            <div data-aos="zoom-in" className="description">
                <img src={imgAbout}/>

                <div className="container-text">
                    <p>Sou fascinado por tecnologia, sempre buscando novas maneiras e ferramentas que possam aumentar meu conhecimento, despertando interesse principalemente na área de desenvolvimento e operação de softwares.</p>

                    <p>Minha jornada começou logo quando criança onde eu pesquisava sobre computadores e fazia pequenas manutenções em máquinas e aparelhos eletrônicos de amigos e parentes.</p>

                    <p>Em 2020, já na faculdade, descobri que minha paixão pela tecnologia é na área da programação e criação de softwares. Com isso, aprendi sobre a linguagem java que foi o pontapé inicial para minha jornada. Logo em seguida conheci o JavaScript que foi onde iniciou minha rotina de estudos para aprender mais sobre a linguagem de programação e criar algumas aplicações para me auxiliar nas tarefas diárias..</p>

                    <p>Sou desenvolvedor há 3 anos, estou no começo de uma longa jornada em que anseio por evolução e aprendizado, tenho certeza que com força de vontade juntamente com disciplina e estudos conseguir meu objetivos será apenas questão de tempo.</p>
                </div>
            </div>
        </div>
    )
}