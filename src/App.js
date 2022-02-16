import React, { Component } from 'react';
import ListaDeNotas from "./Components/ListaDeNotas"
import FormularioCadastro from './Components/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

//react = lib
//React = ecossistema
export default App;