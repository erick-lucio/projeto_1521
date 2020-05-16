import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import FetchChat from './FetchChat';
import './LayoutTemplate.css';
import './Chat.css';

export default class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            valueName:'',
            valueEmail:'',
            valuePassword:'',
            login_create:'login'
        }
        this.callLogoffFunc = this.logOffFunction.bind(this);
        this.handle_key= this.handleKeyDown.bind(this);
        this.closeChat = this.closeChatFunction.bind(this);
    }
    change_login_status(string){
        this.setState({login_create:string});
    };
    change_state_name(){
    

    };
    closeChatFunction(){
      

            
      

        
    }; 
    logOffFunction(){
            this.setState({    
                valueName:'',
                valueEmail:'',
                valuePassword:'',
                login_create:'login'
            })
    };
    return_states(){

        return this.state;
    }
    change_state_valueName(name){
        this.setState({valueName:name});
    };
    handleKeyDown(e) {
        

        if (e.key === 'Enter' && this.state.valueName != "" 
        && document.getElementById('chat_tip').value.length >=1
        ) {
            let req ={
                message:document.getElementById('chat_tip').value,
                name:this.state.valueName,
            }
            //console.log(req)    
            document.getElementById('chat_tip').value="";

            axios
            .post('http://localhost:3100/inschat/',req)
            .then(response =>{
                console.log(response)
                if(response.data.data == 1){
                
                 
                    
                  
                //console.log();
                }else{
                    //console.log("deu ruim la");
                }
            })
              .catch(error =>{
               // console.log(error)
            })





        }
      }
    render(){
        const {login_create,valueName} = this.state;
        const style1={
            visibility:"hidden",
            display:"none"
          }
          
        if(login_create == 'login' && valueName == ''){
            return(
                <div className="chatDiv" id="chatDivId" style={style1}>
                   
                    <ChatLogin func_change_status_login={this.change_login_status.bind(this,'register')} 
                    change_state_valueName={this.change_state_valueName.bind(this)}/>
                    
                    <FetchChat/>
                    
                    
                </div>
            )
        }else{
            if(login_create == 'register' && valueName == ''){
                return(
                    <div className="chatDiv" id="chatDivId" style={style1}>

                        <ChatRegister func_change_status_register={this.change_login_status.bind(this,'login')}/>
                        
                        <FetchChat/>
                    </div>
                )
            }else{
                return(
                    <div className="chatDiv" id="chatDivId" style={style1}>
                        
                        <input  type="text" id="chat_tip" placeholder="Digita ai menor" className="textAreaChat" onKeyDown={this.handle_key}></input>
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
            console.log(this.state);
            //console.log('http://127.0.0.1:3100/cruser/',this.state);
            axios({
                method: 'get',
                url: 'http://localhost:3100/sruser/'+this.state.valuePassword+'/'+this.state.valueEmail,
                
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                })
                .then(response =>{
                    
                    if(response.data.data != 'false'){
                        {this.props.change_state_valueName(response.data)}
                        //this.setState({valueName:response.data.user})
                        alert("Bem vindo : "+response.data);
                        
                       // console.log(this.state);
                       
                        

                    }else{
                        alert('User not found');
                    }
                })
                .catch(error =>{
                   // console.log(error)
                })
        }else{
            alert('Preencha todos os campos');
        }    
    };
    

   
    render(){
        const {valueName} = this.state;
        
        if(valueName == ''){
            return(                
                <form className="loginInputForm" id="loginIdForm" onSubmit={this.userGetRegister}>                                        
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
                        onClick={this.props.func_change_status_login}                        >
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
            
            axios({
                method: 'post',
                url: 'http://localhost:3100/cruser/',
                data: this.state,
                headers: {'accept': '*/*',
                'Content-Type': 'application/json'
            } 
                })
                
                .then(response =>{
                    
                    if(response.data == 'true'){
                        alert("Usuario Criado com Sucesso!");
                    }else{
                        alert("Usuario Ja Existe!");
                    }
                    
                   console.log(response)
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
           <form className="registerForm" id="idRegisterForm" onSubmit={this.userRegister}>
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