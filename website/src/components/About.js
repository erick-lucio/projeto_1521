import React from 'react';
import './About.css';
import myImage1  from '../imgs/me_1.png';

export default class About extends React.Component{
    render(){
        return(
            <div className="about" id="mainRouter">
                <div className="personal_info">
                    <div className="about_left_div">
                        <img className="myImage1" src={myImage1}></img>
                    </div>
                    <div className="about_right_div">
                    <p className="firstText">
                        Sou um estudante de Ciencia da Computação nascido em Sao Paulo,atualmente vivendo em Belo Horizonte.<br/>
                        No atual momento estou cursando o 7° Periodo,e estou em busca de uma vaga como desenvolvedor,sempre busco realizar projetos full stack onde necessiton lidar com ambos front e backend
                        porem eu particularmente prefiro backend.<br/>
                        Atualmente estou estudando react,node,e spring porem num futuro pretendo ir para python para brincar um pouco com chatbots.<br/>
                        Possuo Ingles avançado e ainda estudando,Portugues nativo e pretendo num futuro estudar uma terceira lingua.<br/>
                         
                    </p>
                    </div>
                    
                 
                </div>
             
                
            </div>
        )
    }
} 