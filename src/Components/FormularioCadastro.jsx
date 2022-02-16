import React from "react";
import { Component } from "react/cjs/react.development";

export default class FormularioCadastro extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Titulo"></input>
                <textarea placeholder='Escreva sua nota'></textarea>
                <button>Enviar</button>
            </form>
        );
    }

}