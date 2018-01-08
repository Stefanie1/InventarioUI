import React, {Component} from 'react'
import logo from './unam7.png';
import Acciones from './Acciones'

class Bienvenida extends Component {
    render() {
        const acciones = ['Altas','Bajas','Consultas','Modificaciónes'];

        return (
            < div>
                <header >
                    <img src={logo} className='img-prin' alt="logo"/>
                    <h1 className="App-title">DGTIC</h1>
                </header>
                <p className="App-intro">
                    Selecciona una opción:
                </p>
                <Acciones acciones={acciones}/>
                <br></br>
                <br></br>
                <br></br>
                <p id='footer'> stefanie.c@gmail.com </p>
            </div>
        );
    }
}

export default Bienvenida;