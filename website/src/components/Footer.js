import React from 'react';
import ReactDOM from 'react-dom';
import '../css/LayoutTemplate.css';
import '../css/footer.css';
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
            <div className="each_icon_content"> 
                <a href="https://www.linkedin.com/in/erick-lucio-04351715b/" target="_blank">Linkedin</a>                    
                <img className="footer_imgs_icon" src={linkedimlogo}></img>
            </div>
            <div className="each_icon_content">                     
                 <a href="https://www.facebook.com/erick.lucio.758/" target="_blank">Facebook</a>
               <img className="footer_imgs_icon" src={facebooklogo}></img>
            </div>
            <div className="each_icon_content"> 
                 <a href="https://github.com/erick-lucio" target="_blank">Github</a>
                <img className="footer_imgs_icon" src={githublogo}></img>
            </div>
            <div className="each_icon_content">                     
                 <a href="https://www.instagram.com/erick_lucioo/" target="_blank">Instagram</a>
                <img className="footer_imgs_icon" src={instagramlogo}></img>
            </div>
            <div className="each_icon_content">                     
                <a href="mail:ericklucio-suv@hotmail.com" target="_blank">ericklucio-suv@hotmail.com</a>
               <img className="footer_imgs_icon" src={emaillogo}></img>
            </div>
            
            
            
            
            
            <p>Developed  by Erick </p>
         </div>
        );
    }
}