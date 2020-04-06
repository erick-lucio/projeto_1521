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
     returnLast_50_chats(){

        setInterval(() => {

            axios
            .get('http://localhost:3100/sr50chats/')
            .then(response =>{
                
                this.setState({chatLog:response});
    
            })
            .catch(error =>{
                console.log(error)
            })

        }, 5000);


        
    }
    getStatechat(){

        return this.state.chatLog.data;
    };
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