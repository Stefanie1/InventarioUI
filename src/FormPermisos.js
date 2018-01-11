import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Tabla from './Tabla';


class FormPermisos extends Component{
    render(){
        return(
            <div>
                <Tabla/>
                <br></br>
                <Button raised color="primary"  onClick={function(event) {window.location = '/'}}>
                    <Done/>
                    Regresar
                </Button>
                <p id='footer'> stefanie.c@gmail.com </p>
            </div>
        )
    }
}

export default FormPermisos;