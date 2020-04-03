import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.unmountThisComponent = this.closeComponent.bind(this);
      }
      closeComponent() {
        console.log("Destruir componente");
        var container = ReactDOM.findDOMNode(this).parentNode;
        ReactDOM.unmountComponentAtNode(container);
    }
      handleClick() {
        console.log('Clicado');
      }

    render(){
        return(
            <div className="w3-container FooterDiv" id="footer_id">
                Made by Erick Lucio <a href="#">A</a>
                <button onClick={this.unmountThisComponent} className="button">Clica aqui menor</button>
            </div>
        );
    }
}