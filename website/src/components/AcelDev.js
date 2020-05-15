import React from 'react';
import './AcelDev.css'
import axios from 'axios';
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');

export default class AcelDev extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:'',
            datafinal:""
       
        }
        this.getjson = this.getJson.bind(this);
        this.sendjson =this.sendJson.bind(this);
        this.decriptjson =this.decriptJson.bind(this);
        
    }
    getJson(){
        axios
        .get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=a4d944dd47ea6faba16e39103cd132be80a5a939',)
        
        .then(response =>{
            this.setState({data:response})
            
        })
        .catch(error =>{
            console.log(error)
        })
    }
    sendJson(){

        var formData = new FormData();
        formData.append("answer", document.getElementById("myFileField").files[0]);
        console.log(formData)
     
        axios({
            method: 'post',
            url: 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=a4d944dd47ea6faba16e39103cd132be80a5a939',
            data: formData,
            headers: {'Content-type': 'multipart/form-data'}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

       
    }
    
    
    decriptJson(){
        let string=this.state.data.data.cifrado;
        let string_final="";
        let key =this.state.data.data.numero_casas;
        let alp="abcdefghijklmnopqrstuvwxyz";
        
        let decoded = new Map();
        var sha1 = require('sha1');
        string = string.toLowerCase();
        //access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted"
        //alp.search('a')-key<0?alp.search('a')-key-26:alp.search('a')-key
        decoded.set('a',alp.charAt(alp.search('a')-key<0 ? 26+(alp.search('a')-key): alp.search('a')-key))
        decoded.set('b',alp.charAt(alp.search('b')-key<0 ? 26+(alp.search('b')-key): alp.search('b')-key))
        decoded.set('c',alp.charAt(alp.search('c')-key<0 ? 26+(alp.search('c')-key): alp.search('c')-key))
        decoded.set('d',alp.charAt(alp.search('d')-key<0 ? 26+(alp.search('d')-key): alp.search('d')-key))
        decoded.set('e',alp.charAt(alp.search('e')-key<0 ? 26+(alp.search('e')-key): alp.search('e')-key))
        decoded.set('f',alp.charAt(alp.search('f')-key<0 ? 26+(alp.search('f')-key): alp.search('f')-key))
        decoded.set('g',alp.charAt(alp.search('g')-key<0 ? 26+(alp.search('g')-key): alp.search('g')-key))
        decoded.set('h',alp.charAt(alp.search('h')-key<0 ? 26+(alp.search('h')-key): alp.search('h')-key))
        decoded.set('i',alp.charAt(alp.search('i')-key<0 ? 26+(alp.search('i')-key): alp.search('i')-key))
        decoded.set('j',alp.charAt(alp.search('j')-key<0 ? 26+(alp.search('j')-key): alp.search('j')-key))
        decoded.set('k',alp.charAt(alp.search('k')-key<0 ? 26+(alp.search('k')-key): alp.search('k')-key))
        decoded.set('l',alp.charAt(alp.search('l')-key<0 ? 26+(alp.search('l')-key): alp.search('l')-key))
        decoded.set('m',alp.charAt(alp.search('m')-key<0 ? 26+(alp.search('m')-key): alp.search('m')-key))
        decoded.set('n',alp.charAt(alp.search('n')-key<0 ? 26+(alp.search('n')-key): alp.search('n')-key))
        decoded.set('o',alp.charAt(alp.search('o')-key<0 ? 26+(alp.search('o')-key): alp.search('o')-key))
        decoded.set('p',alp.charAt(alp.search('p')-key<0 ? 26+(alp.search('p')-key): alp.search('p')-key))
        decoded.set('q',alp.charAt(alp.search('q')-key<0 ? 26+(alp.search('q')-key): alp.search('q')-key))
        decoded.set('r',alp.charAt(alp.search('r')-key<0 ? 26+(alp.search('r')-key): alp.search('r')-key))
        decoded.set('s',alp.charAt(alp.search('s')-key<0 ? 26+(alp.search('s')-key): alp.search('s')-key))
        decoded.set('t',alp.charAt(alp.search('t')-key<0 ? 26+(alp.search('t')-key): alp.search('t')-key))
        decoded.set('u',alp.charAt(alp.search('u')-key<0 ? 26+(alp.search('u')-key): alp.search('u')-key))
        decoded.set('v',alp.charAt(alp.search('v')-key<0 ? 26+(alp.search('v')-key): alp.search('v')-key))
        decoded.set('w',alp.charAt(alp.search('w')-key<0 ? 26+(alp.search('w')-key): alp.search('w')-key))
        decoded.set('x',alp.charAt(alp.search('x')-key<0 ? 26+(alp.search('x')-key): alp.search('x')-key))
        decoded.set('y',alp.charAt(alp.search('y')-key<0 ? 26+(alp.search('y')-key): alp.search('y')-key))
        decoded.set('z',alp.charAt(alp.search('z')-key<0 ? 26+(alp.search('z')-key): alp.search('z')-key))
        
        for(let i =0;i<string.length;i++){
            string_final+=decoded.has(string.charAt(i))?decoded.get(string.charAt(i)):string.charAt(i);
            //string = string.replace(string.charAt(i),decoded.has(string.charAt(i))?decoded.get(string.charAt(i)):string.charAt(i))
            //console.log(decoded.has(string.charAt(i))?decoded.get(string.charAt(i)):string.charAt(i))
          
            //
        }
       
        
 
       
        
        
       console.log()

       this.setState({data:{
           data:{
            decifrado:string_final,
            numero_casas:this.state.data.data.numero_casas,
            cifrado:this.state.data.data.cifrado,
            token:this.state.data.data.token, 
            resumo_criptografico:sha1(string_final)
           }
       }});
       
    }
    componentDidUpdate(){
        document.getElementById("state_received").innerHTML="Numero casas:"+this.state.data.data.numero_casas+'<br/>'
        +"Token:"+this.state.data.data.token+"<br/>"+"texto crifrado:"+this.state.data.data.cifrado+"<br/>"+"texto decifrado:"+this.state.data.data.decifrado+'<br/>'+
        "resumo criptografico:"+this.state.data.data.resumo_criptografico+'<br/>';

        var file = new File([JSON.stringify(this.state.data.data)], "answer.json", {type: "application/json"});
        FileSaver.saveAs(file);
        
    }

    render(){
        return(
            <div id="mainRouter" className="AcelDevMain">
                Normal: a ligeira raposa marrom saltou sobre o cachorro cansado<br/>

                Cifrado: d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr<br/>
                Regras<br/>

                    As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.<br/>
                    No nosso caso os números e pontos serão mantidos, ou seja:<br/>

                Normal: 1a.a<br/>

                Cifrado: 1d.d<br/>

                Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:<br/>
                <br/>
                https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN<br/>
                <br/>
                O resultado da requisição vai ser um JSON conforme o exemplo:<br/>

                    <br/>
                    "numero_casas": 10,<br/>
                    "token":"token_do_usuario",<br/>
                    "cifrado": "texto criptografado",<br/>
                    "decifrado": "aqui vai o texto decifrado",<br/>
                    "resumo_criptografico": "aqui vai o resumo"<br/>
                    <br/>

                O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome answer.json, que irá usar no restante do desafio.<br/>
                <br/>
                Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo decifrado. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo sha1 e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo sha1 do texto decifrado.<br/>
                <br/>
                Seu programa deve submeter o arquivo atualizado para correção via POST para a API:<br/>
                <br/>
                https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN<br/>
                <br/>
                OBS: a API espera um arquivo sendo enviado como multipart/form-data, como se fosse enviado por um formulário HTML, com um campo do tipo file com o nome answer. Considere isso ao enviar o arquivo.<br/>
                <br/>
                O resultado da submissão vai ser sua nota ou o erro correspondente. Você pode submeter quantas vezes achar necessário, mas a API não vai permitir mais de uma submissão por minuto.<br/>
                OBS<br/>
                <br/>
                Neste estágio da aceleração não solicitamos que você nos envie o código do programa que você criou, mas recomendamos que você guarde uma cópia pois o mesmo pode ser solicitado nas próximas fases do processo.<br/>
                <br/><br/>
                Meu token= a4d944dd47ea6faba16e39103cd132be80a5a939 <br/>
                <button onClick={this.getjson}>get cypher phrase</button>
                reality itself is too obvious to be true. jean baudrillard<br/>
                <br/>
                hijklmnopqrstuvwxyzabcdefg<br/>

                <button onClick={this.decriptjson}>Descriptografar </button>
                <br/><br/>
                
                    <input type="file" id="myFileField" name="answer" />
                    <br/><br/>
                    <button onClick={this.sendjson}>Send file</button>
                    <br/><br/>
                
                <div id="state_received">

                </div>
            </div>
        )
    }
}