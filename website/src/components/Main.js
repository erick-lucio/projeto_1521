import React from 'react';
import './Main.css';
import java_logo from '../imgs/java_logo.png';
import node_logo  from '../imgs/node_js_logo.png';
import react_logo  from '../imgs/react_logo.png';


export default class Main extends React.Component{
    render(){
        return(
            <div className="main" id="mainRouter">
                <p className="main_explanation_text">
                    Esta pagina e um teste e um aprendizado em desenvolvimento de Sistemas.<br/>
                    Meu objetivo inicial era testas conhecidos praticos aprendidos em cursos online e video aulas com minhas proprias ideias<br/>
                    O objetivo desta pagina e ser um lugar onde eu possa testar minhas ideias e exibi-las ao mesmo tempo q pratico possiveis tecnologias q estou estudando<br/>
                    Inicialmente comecei utilizando <strong>HTML,CSS,</strong>e <strong>Javascript</strong> como base.<br/>
                    
                </p>
                <div className="main_component_left_img">
                    <img className="img_left_float" src={react_logo}>
                    </img>
                    <p className="text_right_side">
                        Com o desenvolver das ideias Logo no começo pensei em utilizar o React.js,pois vi muita gente falando sobre,entao realizei algumas pesquisas e comecei a utiliza-lo.<br/>
                        Iniciei pelo Basico,o create react app fornecido pelo proprio facebook "npc create-react-app appName".<br/>
                        Apos tal comecei alguns teste,vendo sobre props,states,componentes,classes e funçoes e logo logo irei implementar o mais novo hooks que foi lançado a pouco tempo.<br/>
                        Logo em seguida criei meu primeiro request usando o react utilizando o <strong>axios</strong> para realizar post e get requests no backend da aplicação,inicialmente fiz somente um chat ao vivo junto com um sistema de log in log of e cadastro,ainda não implementei nada referente a <strong>criptografia </strong>
                        porem pretendo fazer isso logo logo.<br/>
                        Preciso Implementar responsividade nisso.

                    </p>

                </div>
                <div className="main_component_right_img">
                    <img className="img_right_float" src={node_logo}>
                    </img>
                    <p className="text_left_side">
                        Utilizando o <strong>Node.js</strong> fiz o primeiro backend desta aplicação,utilizando algumas video aulas fui pegando referencias e criei um sistema de rotas
                        onde o front conecta para acessar os dados,inicialmente ele esta atendendo somente um front feito em <strong>React</strong>,porem posteriormente pretende adicionar um app mobile em <strong>React Native</strong>.
                        Como disse anteriormente este backend roda <strong>node.js</strong> junto com <strong>Express</strong>,recebendo get's e post's do front,
                        tal que este mesmo esta conectado a um banco de dados <strong>Mysql</strong> onde ele realiza as operaçoes listadas anteriormente.<br/>

                    </p>

                </div>
                <div className="main_component_left_img">
                    <img className="img_left_float" src={java_logo}>
                    </img>
                    <p className="text_right_side">
                        <strong>Grande Java</strong>,ainda n implementei nada utilizando Java neste projeto porem posteriormente pretendo utiliza-lo para criar um api de integração com o telegram.<br/>
                    </p>

                </div>
            </div>
        )
    }
} 