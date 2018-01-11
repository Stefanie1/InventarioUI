import React, {Component} from 'react';
import Barra from './barradenavegacion'
import Bienvenida from './Bienvenida'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Registro from './Registro'
import FormEliminar from './FormBajas'
import FormAltas from './FormAltas'
import FormConsultas from './FormConsultas'
import FormModificar from './FormModificar'
import FormPermisos from './FormPermisos'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Barra/>
                    <Route exact path="/" component={Bienvenida}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registro" component={Registro}/>
                    <Route exact path="/formbajas" component={FormEliminar}/>
                    <Route exact path="/formaltas" component={FormAltas}/>
                    <Route exact path="/formconsultas" component={FormConsultas}/>
                    <Route exact path="/formmodificaciónes" component={FormModificar}/>
                    <Route exact path="/formpermisos" component={FormPermisos}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
