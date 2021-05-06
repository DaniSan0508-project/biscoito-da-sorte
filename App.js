import React, { Component } from 'react';

class App extends Component{
constructor(props){
    super(props)
    this.state = {}
}

render(){
    return(
        <div>
            <img alt="biscoito-da-sorte" src={require('./assets/biscoito.png')}/>
        </div>
    )
}
}

export default App;