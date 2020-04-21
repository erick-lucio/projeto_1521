import React from 'react';
import './LayoutTemplate.css';
import './header.css'

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

        
        
        
      
    }
    render(){
      
        return(
            <div className="HeaderDiv" id='header_id' >
              
              
                <Link to="/" className="headerButton">Home</Link>
                <Link to="/about" className="headerButton">About</Link>
                <Link to="/acelera_dev_julio" className="headerButton">Acelera Dev</Link>
                <Link to="/"  className="headerButton">Empty</Link>
                <Link to="/" className="headerButton">Empty</Link>


             

            </div>
        );
    }
}