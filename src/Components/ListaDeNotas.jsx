import React from "react";
import { Component } from "react/cjs/react.development";
import CardNotas from "./CardNotas";

class ListaDeNotas extends Component{
    render(){
        return(
            <section>
                <ul>{Array.of("Trabalho","Trabalho", "Estudos").map(categorias => {
                    return(
                        <li>
                            <div>{categorias}</div>
                            <CardNotas/>    
                        </li>
                    );
                })}</ul>

            </section>
        );
    }
}
export default ListaDeNotas;
