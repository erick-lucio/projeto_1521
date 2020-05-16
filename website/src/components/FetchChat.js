import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './LayoutTemplate.css';
import './FetchChat.css';

export default class FetchChat extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            chatLog:''
            
        }
        this.create_chat = this.create_string_chat.bind(this);
    }
     
     returnLast_50_chats = e =>{




        
    }
    componentDidUpdate(){
        
       //console.log(this.state.chatLog.data.messages);
       //console.log(this.state.chatLog.data.name_user);
       //console.log(this.state.chatLog.data.date_time);
         
       
       this.data_array = this.state.chatLog.data;
       this.create_string_chat();
    };
    componentDidMount(){
        setInterval(() => {

            axios
            .get('http://192.168.1.2:3100/sr100chats/')
            .then(response =>{
               // console.log(response.data[0].user.name_user)
                this.setState({chatLog:response});
                
    
            })
            .catch(error =>{
                //console.log(error)
            })
            

        }, 500);
    };
    
    create_string_chat(){
        var string_return='';
        if(this.data_array){
            this.data_array.forEach(element => {
                string_return+="<div class='each_chat_div'> "+
                "<div class='each_name_chat_div'>"+                
                element.user.name_user+//"  "+element.date_time+
                "</div>"+         
                "<div class='each_message_chat_div'>"+
                element.messages+
                "</div>"+ 
                "</div>";
                


                
             });
        }else{
            //console.log("ta indefinido ainda");
        }
       // console.log(string_return);
        document.getElementById("log_id").innerHTML=string_return;
       // console.log(string_return);
      
    }
    
    render(){
        
        
        
                    
                  //ARRUMAR O ARRAY

        
        return(
            <div className="Logzinhos" id="log_id">

            </div>
        )
    }
}

//posts.map((post, index)=>
//  <div key={index}>
//      <h3>{post.title}</h3>
//      <p>{post.body}</p>
//    </div>
//);
//              {this.state.data.map((data,index)=>
//<div>
//{data.name_user}
//</div>
//
//)}
//
//
//
//
//