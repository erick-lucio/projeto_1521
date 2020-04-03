import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class FetchChat extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            chatLog:''
            
        }
        
    }
    returnLast_50_chats = e =>{
        axios
        .get('http://localhost:3100/sr50chats/')
        .then(response =>{
            
            this.setState({chatLog:response});
            //console.log(response);
           // console.log(response.data[0].date_time)
          //  console.log(response.data[0].name_user)
            //console.log(response.data[0].messages)
            //console.log(this.state.chatLog.data[0].name_user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        setInterval(() => {
            this.returnLast_50_chats();
        }, 5000);
        const {chatLog} = this.state;
        return(
            <div className="Logzinhos">
              {chatLog.data.forEach(element => {
                  //ARRUMAR O ARRAY
                  console.log(element.name_user);
              })} 
                
            </div>
        )
    }
}