import React from 'react';
import '../css/LayoutTemplate.css';
import '../css/header.css'

import {Link,NavLink} from 'react-router-dom'

export default class Header extends React.Component{
    constructor()
    {
        super();
        this.state={
            show_char:"1"
        }
        this.toggleChat = this.toggleChatFromChat.bind(this);
        this.redirect = this.redirectRouter.bind(this);
    }
    redirectRouter(){
        //<Redirect to={{pathname:"/about"}}/>
    }
    toggleChatFromChat(){
        if(document.getElementById('chatDivId').style.visibility== "hidden"){
            document.getElementById("chatDivId").style.visibility  = "visible";
            document.getElementById("chatDivId").style.display = "flex";
            //
            document.getElementById("mainRouter").style.width = "80%";
            document.getElementById("mainRouter").style.minWidth  = "80%";
            
        }else{


            //

            //
           // document.getElementById("chatDivId").style.maxHeight = "0%";
            document.getElementById("chatDivId").style.display = "none";
            document.getElementById("chatDivId").style.visibility = "hidden";

            
            //
            document.getElementById("mainRouter").style.width = "100%";
            document.getElementById("mainRouter").style.minWidth  = "100%";
            //
        }
       //chat_tip,loginIdForm,idRegisterForm 
       // document.getElementById("chatDivId").style.min_width = "0%";
      //  document.getElementById("p2").style.color = "blue"; 
      
    }
    render(){
        return(
            <div className="HeaderDiv" id='header_id' >
              <div onClick={this.toggleChat} className="toogleChat"></div>  
              
                <Link to="/" className="headerButton">Home</Link>
                <Link to="/about" className="headerButton">About</Link>
                <Link to="/" className="headerButton">Empty</Link>
                <Link to="/"  className="headerButton">Empty</Link>
                <Link to="/" className="headerButton">Empty</Link>


             

            </div>
        );
    }
}