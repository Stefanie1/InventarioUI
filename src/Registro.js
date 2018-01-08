import React, {Component} from 'react';
import logo from './unam7.png';
import CampoTexto from './CampoTexto'
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
                <CampoTexto/>
                <Button raised color="primary">
                    <Done/>
                    Registrarse
                </Button>
                <p id='footer'> stefanie.c@gmail.com </p>
            </div>
        )
    }
}

export default Registro;