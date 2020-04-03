import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import './css/defaultcss.css'
import './css/LayoutTemplate.css'


export default class App extends React.Component{
  render(){
    return(
      <div >
        <Header />
        <Routes/>
        <Chat ref="chat"/>     
        <Footer /> 
        
      </div>
    );
  }
}