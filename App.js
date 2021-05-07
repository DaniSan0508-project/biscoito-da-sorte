import React, { Component } from 'react';
import './estilo.css'

class App extends Component{
constructor(props){
    super(props)
    this.state = {
        textoFrase:''
    }

    this.frases = ['Siga os bons e aprenda com eles.','O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz','Acredite em milagres mais não dependa deles']

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
}

quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()*this.frases.length)
    this.setState({textoFrase:this.frases[numeroAleatorio]})
    
}

    render(){
        return(
            <div className='container'>
                <img className='img' alt="biscoito-da-sorte" src={require('./assets/biscoito.png')}/>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>
            </div>
        )
    }
}


export default App;

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}