import React, { Component } from 'react';

class App extends Component{
constructor(props){
    super(props)
    this.state = {}

    this.frases = ['Siga os bons e aprenda com eles.','O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz','Acredite em milagres mais não dependa deles']
}

render(){
    return(
        <div className='container'>
            <img className='img' alt="biscoito-da-sorte" src={require('./assets/biscoito.png')}/>
            <Botao/>
            <h3 className='textoFrase'>Frase número 1 aleatória</h3>
        </div>
    )
}
}

export default App;

class Botao extends Component{
    render(){
        return(
            <div>
                <button>Abrir biscoito</button>
            </div>
        )
    }
}