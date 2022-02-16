import React from "react";
import { Component } from "react/cjs/react.development";
import CardNotas from "./CardNotas";

export default class ListaDeNotas extends Component{
    render(){
        return(
            <section>
                <ul>
                    <li>
                        <CardNotas/>    
                    </li>
                    <li>
                        <CardNotas/> 
                    </li>
                    <li>
                        <CardNotas/>
                    </li>
                </ul>
            </section>
        );
    }

}
