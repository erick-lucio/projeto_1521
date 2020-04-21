import React from 'react';

import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import PageNotFound from './components/Page404';
import Main from './components/Main';
import About from './components/About';
import AcelDev from './components/AcelDev';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import chat_img from './imgs/chat_img_.png';

import './components/Defaultcss.css'
import './components/LayoutTemplate.css'


export default class App extends React.Component{
  constructor()
  {
      super();
      this.state={
          show_char:"1"
          

      }
     this.toggleChat = this.togglechat_.bind(this);
     this.toogleStyle1=this.tooglestyle1.bind(this);
     this.toogleStyle2=this.tooglestyle2.bind(this);
     this.toogleStyle3=this.tooglestyle3.bind(this);
     this.toogleStyle4=this.tooglestyle4.bind(this);
     this.toogleStyle5=this.tooglestyle5.bind(this);
  }
  togglechat_(){
    if(document.getElementById("chatDivId").style.visibility  == "hidden"){
      document.getElementById("chatDivId").style.visibility = "visible";
      document.getElementById("mainRouter").style.width  = "80vw";  
      document.getElementById("chatDivId").style.display  = "inline";
      document.getElementById("div_dinamic_id").style.marginLeft = "20vw";
    }else{
      document.getElementById("chatDivId").style.display  = "none";
      document.getElementById("chatDivId").style.visibility  = "hidden";
      document.getElementById("mainRouter").style.width  = "100vw"; 
      document.getElementById("div_dinamic_id").style.marginLeft = "0vw";
    }
    
    

    
  }
  tooglestyle1(){
    alert('1');
  }
  tooglestyle2(){
    alert('2');
  }
  tooglestyle3(){
    alert('3');
  }
  tooglestyle4(){
    alert('4');
  }
  tooglestyle5(){
    alert('5');
  }
  render(){

    return(
        <BrowserRouter>
        <Chat/>  
        <div className="div_dinamic" id="div_dinamic_id">
          <img src={chat_img} onClick={this.toggleChat} className="toogleChat"></img>  
          <div onClick={this.toogleStyle1} className="dinamic_buttons">1</div>
          <div onClick={this.toogleStyle2} className="dinamic_buttons">2</div>
          <div onClick={this.toogleStyle3} className="dinamic_buttons">3</div>
          <div onClick={this.toogleStyle4} className="dinamic_buttons">4</div>
          <div onClick={this.toogleStyle5} className="dinamic_buttons">5</div>
        </div>

        <Header/>   
        <Switch>acelera_dev_julio
             <Route exact path="/acelera_dev_julio" component={AcelDev}/>
             <Route exact path="/" component={Main}/>
             <Route exact path="/about" component={About}/>            
             <Route component={PageNotFound}/>

        </Switch>
        
        <Footer /> 
        
        
        
        
        
        
        </BrowserRouter>
      
        

        

        
     
    );
  }
}