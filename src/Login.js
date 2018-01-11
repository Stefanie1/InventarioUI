import React, {Component} from 'react';
import logo from './unam7.png';
import CampoTexto from './CampoTexto'
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import TextField from 'material-ui/TextField';


class Login extends Component {

    render() {
        return(
            < div>
                <header >
                    <img src={logo} className='img-prin' alt="logo"/>
                    <h1 className="App-title">DGTIC</h1>
                </header>
                <p className="App-intro">
                    Iniciar Sesión
                </p>
                <CampoTexto mensaje={'Iniciar Sesión'}/>

                <br></br>
                <a className='link tiny-link' href='/'>Continue without signing in</a>
                <p id='footer'> stefanie.c@gmail.com </p>

            </div>
        )
    }

}

export default Login
