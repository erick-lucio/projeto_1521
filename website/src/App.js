import React from 'react';

import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import PageNotFound from './components/Page404';
import Main from './pages/main/index';
import About from './pages/about/index';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { Redirect } from "react-router-dom";


import './css/defaultcss.css'
import './css/LayoutTemplate.css'


export default class App extends React.Component{
  constructor()
  {
      super();
      this.state={
          show_char:"1",
          Redirect:'/about' 

      }
     this.changeRedirectState=this.redirectChange.bind(this); 
  }
  redirectChange(urlToRedirect){
    
      this.setState({Redirect:urlToRedirect});
  }

  render(){
    
    return(
        <BrowserRouter>
        
        <Header/>   
        <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/about" component={About}/>            
              <Route component={PageNotFound}/>

        </Switch>
        <Chat/>     
        <Footer /> 
        
        
        
        
        
        
        </BrowserRouter>
      
        

        

        
     
    );
  }
}