import React from 'react';
import ReactDOM from 'react-dom';
import './LayoutTemplate.css';
import './Footer.css';
import linkedimlogo from "../imgs/linkedin_logo.png";
import facebooklogo from "../imgs/facebook_icon.png";
import githublogo from  "../imgs/github_logo.png";
import instagramlogo from "../imgs/Instagran_icon.png";
import emaillogo from  "../imgs/mail.png";

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
       
      }



    render(){
        
        return(
            <div className="FooterDiv" id="footer_id">
            <p className="DeveloperCopiright">Developed  by Erick </p>    
            <div className="each_icon_content"> 
                <a href="https://www.linkedin.com/in/erick-lucio-04351715b/" target="_blank">
                    <img className="footer_imgs_icon" src={linkedimlogo}></img> 
                </a>                    
                
                           
                 <a href="https://www.facebook.com/erick.lucio.758/" target="_blank">
                     <img className="footer_imgs_icon" src={facebooklogo}></img>
                </a>
               
           
                 <a href="https://github.com/erick-lucio" target="_blank">
                    <img className="footer_imgs_icon" src={githublogo}></img>
                </a>
                
                            
                 <a href="https://www.instagram.com/erick_lucioo/" target="_blank">
                    <img className="footer_imgs_icon" src={instagramlogo}></img>
                 </a>
                
                             
                <a href="mail:ericklucio-suv@hotmail.com" target="_blank">
                   <img className="footer_imgs_icon" src={emaillogo}></img>
                </a>
               
            </div>
            
            
            
            
            
            
         </div>
        );
    }
}