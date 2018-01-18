import React, {Component} from 'react'
import logo from './unam7.png';
import Acciones from './Acciones'

class Bienvenida extends Component {
    state = {
        ususario: '',
        rol: '',
        acciones:[]
    }
    componentDidMount(){
        var usuario = this.traerCookie('user');
        var rol = this.traerCookie('rol');
        this.setState({
            usuario:this.traerCookie('user'),
            rol:this.traerCookie('rol')
        })

        console.log("Usuario: "+usuario);

        if(usuario !== null && rol === 'Administrador'){
            this.setState({acciones: ['Altas','Bajas','Consultas','Modificaciónes','Permisos']});
        } else if(usuario !== null && rol === 'General'){
            this.setState({acciones: ['Consultas']});
        } else if(usuario !== null && rol === 'Encargado'){
            this.setState({acciones: ['Altas','Consultas','Modificaciónes']});
        }
    }

    traerCookie = (nombre) => {
        var getCookieValues = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[1].trim();
        };

        var getCookieNames = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[0].trim();
        };

        var cookies = document.cookie.split(';');
        var cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf(nombre)];

        return (cookieValue === undefined) ? null : cookieValue;
    }

    render() {
        /*const acciones = ['Altas','Bajas','Consultas','Modificaciónes'];*/

        return (
            < div>
                <header >
                    <img src={logo} className='img-prin' alt="logo"/>
                    <h1 className="App-title">DGTIC</h1>
                </header>
                {this.traerCookie('user') !== null && (
                    <Acciones acciones={this.state.acciones}/>
                )}
                <br></br>
                <br></br>
                <br></br>
                <p id='footer'> MDTI. Alfonso Gutiérrez Molina amolina@unam.mx </p>
            </div>
        );
    }
}

export default Bienvenida;