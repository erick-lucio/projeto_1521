import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import FetchChat from './FetchChat';
export default class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            valueName:'',
            valueEmail:'',
            valuePassword:'',
            login_create:'login'
        }
    }
    change_login_status(string){
        this.setState({login_create:string});
    };
    change_state_name(){


    };
    return_states(){

        return this.state;
    }
    change_state_valueName(name){
        this.setState({valueName:name});
    };
    render(){
        const {login_create,valueName} = this.state;

        if(login_create == 'login' && valueName == ''){
            return(
                <div className="chatDiv">
                    <ChatLogin func_change_status_login={this.change_login_status.bind(this,'register')} 
                    change_state_valueName={this.change_state_valueName.bind(this)}/>
                    <textarea className="textAreaChat"></textarea>
                    <FetchChat/>
                    
                </div>
            )
        }else{
            if(login_create == 'register' && valueName == ''){
                return(
                    <div className="chatDiv">
                        <ChatRegister func_change_status_register={this.change_login_status.bind(this,'login')}/>
                        <textarea className="textAreaChat"></textarea>
                        <FetchChat/>
                    </div>
                )
            }else{
                return(
                    <div className="chatDiv">
                        <textarea className="textAreaChat">Area para digitar</textarea>
                        <FetchChat/>
                    </div>
                )
            }

        }
        
 
    }
}
export class ChatLogin extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            valueName:'',
            valueEmail:'',
            valuePassword:''
            
        }
        
    }
    

    closeComponent = e => {
        console.log("Destruir componente");
        var container = ReactDOM.findDOMNode(this).parentNode;
        ReactDOM.unmountComponentAtNode(container);
    };
    handleChange = e => { 
        this.setState({[e.target.name]:e.target.value})
     
    };

    userGetRegister = e =>{
        
        e.preventDefault();
        if(this.state.valueEmail != '' 
        & this.state.valuePassword !='')
        {
            //console.log(this.state);
            //console.log('http://127.0.0.1:3100/cruser/',this.state);
            axios
                .post('http://localhost:3100/sruser/',this.state)
                .then(response =>{
                    
                    if(response.data.data == 1){
                        {this.props.change_state_valueName(response.data.user)}
                        //this.setState({valueName:response.data.user})
                        //alert("Bem vindo : "+response.data.user);
                        console.log(this.state);
                        

                    }else{
                        alert(response.data.user);
                    }
                })
                .catch(error =>{
                    console.log(error)
                })
        }else{
            alert('Preencha todos os campos');
        }    
    };
    

   
    render(){
        const {valueName} = this.state;
        
        if(valueName == ''){
            return(
                
                <form className="loginInputForm" onSubmit={this.userGetRegister}>
                    
                    
                    Email                    
                    <input
                         defaultValue={this.valueEmail}
                         type="text" 
                         className="loginInput"
                         name="valueEmail"
                         onChange={this.handleChange} >
                        
                    </input>
                    Password                    
                    <input 
                        defaultValue={this.valuePassword}
                        type="text" 
                        className="loginInput"
                        name="valuePassword"
                        onChange={this.handleChange} >
                    </input>                    
                    <button 
                        className="loginButton"
                        type="submit">
                        login
                    </button>
                    <button 
                        className="loginDonthaveAcc"
                        onClick={this.props.func_change_status_login}
                        >
                        Dont have Accout?
                    </button>
                    
                </form>
            
        )
        }else{
            return(
                <div>
                    {this.state.valueName}
                </div>
            )
        }

    }
}
export class ChatRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valueName: '',
            valuePassword:'',
            valueEmail:''
        };

      }

    userRegister = e =>{
        
        e.preventDefault();
        if(this.state.valueEmail != '' &
        this.state.valueName != '' 
        & this.state.valuePassword !='')
        {
            console.log(this.state);
            //console.log('http://127.0.0.1:3100/cruser/',this.state);
            axios
                .post('http://localhost:3100/cruser/',this.state)
                .then(response =>{
                    if(response.data == 1){
                        alert("Usuario Criado com Sucesso!");
                    }else{
                        alert("Usuario Ja Existe!");
                    }
                })
                .catch(error =>{
                    //console.log(error)
                })
        }else{
            alert('Preencha todos os campos');
        }    
    };
      
    handleChange = e => { 
        this.setState({[e.target.name]:e.target.value})
     
    };
          
  


    render(){
        const {valueName,valuePassword,valueEmail} = this.state;
        return(
           <form className="registerForm" onSubmit={this.userRegister}>
               Name
               <input  
                    defaultValue={valueName} 
                    type="text" 
                    onChange={this.handleChange} 
                    className="registerInput" 
                    name="valueName" 
                >
               </input>
               Password
               <input 
                    defaultValue={valuePassword} 
                    type="text" 
                    onChange={this.handleChange} 
                    className="registerInput" 
                    name="valuePassword" >

                </input>
               Email
               <input 
                    defaultValue={valueEmail} 
                    type="text" 
                    onChange={this.handleChange} 
                    className="registerInput" 
                    name="valueEmail" >

                </input>
               <button 
                    type="submit"  
                    className="RegisterButton">
                    Register
                </button>
               <button 
                    type="submit"  
                    className="RegisterHaveAccButton"
                    onClick={this.props.func_change_status_register}>
                    Have Account?
                </button>
           </form>
        )
    }
}