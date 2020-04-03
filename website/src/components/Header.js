import React from 'react';



export default class Header extends React.Component{
    constructor()
    {
        super();
        this.state={
            show:false
        }
    }
    render(){
        return(
            <div className="w3-container HeaderDiv" id='header_id' >
              Header 
            </div>
        );
    }
}