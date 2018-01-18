import React, {Component} from 'react';
import logo from './unam7.png';
import CampoTexto from './CampoTextoRegitro'
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';


class Registro extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={logo} className='img-prin' alt="logo"/>
                    <h1 className="App-title">DGTIC</h1>
                </header>
                <p className="App-intro">
                    Registrarse
                </p>
                <CampoTexto mensaje={'Registro'}/>

                <br></br>
                <a className='link tiny-link' href='/login'>¿Tienes una cuenta?</a>
                <p id='footer'> MDTI. Alfonso Gutiérrez Molina amolina@unam.mx </p>
            </div>
        )
    }
}

export default Registro;