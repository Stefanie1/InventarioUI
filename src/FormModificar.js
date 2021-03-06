import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {withStyles} from "material-ui/styles/index";
import PropTypes from 'prop-types';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: '1.8em',
        marginTop: '2%',
        width: 280,
    },
    container: {
        margin: 'auto',
        width: '80%',
        padding: '1px',
    },
    observaciones: {
        marginLeft: 'auto',
        width: '90%',
        adding: '1px',
    },
    button:{
        margin: theme.spacing.unit,
        marginTop: '3%',
    },
    chip:{
        display: 'flex',
        'justify-content': 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: '3%',
    }
});


const sed = [
    {
        value: 'Nuevo Leon',
        label: 'Nuevo León',
    },
    {
        value: 'ciudad universitaría',
        label: 'Ciudad Universitaría',
    },
    {
        value: 'mascarones',
        label: 'Mascarone',
    },
    {
        value: 'tlatelolco',
        label: 'Tlatelolco',
    },
    {
        value: 'San Agustín',
        label: 'San Agustín',
    }
];
const estat = [
    {
        value: 'Dañado',
        label: 'Dañado',
    },
    {
        value: 'Funciona',
        label: 'Funciona',
    }
];
const aul = [
    {
        value: 'Aúla 1',
        label: 'Aúla 1',
    },
    {
        value: 'Aúla 2',
        label: 'Aúla 2',
    },
    {
        value: 'Aúla 3',
        label: 'Aúla 3',
    },
    {
        value: 'Aúla 4',
        label: 'Aúla 4',
    },
    {
        value: 'Aúla 5',
        label: 'Aúla 5',
    },
    {
        value: 'Aúla 6',
        label: 'Aúla 6',
    },
    {
        value: 'Aúla 7',
        label: 'Aúla 7',
    },
    {
        value: 'Aúla 8',
        label: 'Aúla 8',
    },
    {
        value: 'Aúla 9',
        label: 'Aúla 9',
    },
    {
        value: 'Multimedia 1',
        label: 'Multimedia 1',
    },
    {
        value: 'Multimedia 2',
        label: 'Multimedia 2',
    },
    {
        value: 'Infraestructura',
        label: 'Infraestructura',
    },
    {
        value: 'Informes',
        label: 'Informes',
    },
    {
        value: 'Biblioteca',
        label: 'Biblioteca',
    },
    {
        value: 'Administrativos',
        label: 'Administrativos',
    },
    {
        value: 'Vigilancia',
        label: 'vigilancia',
    }
];




class FormModificar extends Component{
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        equipo: '',
        sede: '',
        marca: '',
        aula: '',
        numSerie: '',
        numInventario: '',
        estatus: '',
        observaciones: '',
        data: null,
        open: false,
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickOpen = (e) => {
        e.preventDefault();
        console.log(this.state.inventario);
        fetch('http://localhost:7050/equipoInfo?inventario=' + this.state.inventario)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({data: data})
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

    };


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };


    modificar = (e) => {
        e.preventDefault();
        var equipo = {
            "numInventario": this.state.inventario,
            "numSerie": this.state.numSerie,
            "estatus": this.state.estatus,
            "sede": this.state.sede,
            "aula": this.state.aula,
            "observaciones": this.state.observaciones,
            "user": this.getUser(),
        }
        fetch('http://localhost:7050/modificarEquipo', {
            method: 'POST',
            body: JSON.stringify(equipo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({data: data, open: true, mensaje: data.mensaje, numInventario:data.numInventario});
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });

        this.setState({
            equipo: '',
            sede: '',
            marca: '',
            aula: '',
            numSerie: '',
            numInventario: '',
            estatus: '',
            observaciones: ''
        });
    };

    getUser = () => {
        var getCookieValues = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[1].trim();
        };

        var getCookieNames = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[0].trim();
        };

        var cookies = document.cookie.split(';');
        var cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf('user')];

        return (cookieValue === undefined) ? null : cookieValue;
    }


    render(){
        const {classes} = this.props;
        return(
            <div>
                <form onSubmit={this.handleClickOpen.bind(this)}>
                    <TextField
                        id="search"
                        label="Número de inventario"
                        type="search"
                        margin="normal"
                        value={this.state.inventario}
                        className={classes.textField}
                        required={true}
                        onChange={e => this.setState({inventario: e.target.value})}
                    />
                    <Button type=" submit " raised color="primary">
                        <Done/>
                        Buscar
                    </Button>
                </form>


                <div className={classes.container}>
                {(this.state.data != null) && (
                    <div className='equipo-info'>
                        <Chip className={classes.chip} label={this.state.data.equipo}/>
                        <Chip className={classes.chip} label={this.state.data.numInventario}/>
                        <Chip className={classes.chip} label={this.state.data.numSerie}/>
                        <Chip className={classes.chip} label={this.state.data.marca}/>
                        <Chip className={classes.chip} label={this.state.data.sede}/>
                        <Chip className={classes.chip} label={this.state.data.aula}/>
                        <Chip className={classes.chip} label={this.state.data.estatus}/>
                        <Chip className={classes.chip} label={this.state.data.observaciones}/>
                    </div>
                )}
                </div>


                <br></br>

                <TextField
                    id="select-currency"
                    select
                    label="Estatus"
                    value={this.state.estatus}
                    className={classes.textField}
                    onChange={this.handleChange('estatus')}
                    helperText="Por favor seleccione una opción"
                    margin="normal"
                >
                    {estat.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="select-currency"
                    select
                    label="Sede"
                    value={this.state.sede}
                    className={classes.textField}
                    onChange={this.handleChange('sede')}
                    helperText="Por favor seleccione una opción"
                    margin="normal"
                >
                    {sed.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="select-currency"
                    select
                    label="Aula"
                    value={this.state.aula}
                    className={classes.textField}
                    onChange={this.handleChange('aula')}
                    helperText="Por favor seleccione una opción"
                    margin="normal"
                >
                    {aul.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="Observaciones"
                    helperText="Por favor escriba sus obseravaciones"
                    value={this.state.observaciones}
                    className={classes.observaciones}
                    fullWidth
                    onChange={this.handleChange('observaciones')}
                    margin="normal"
                />

                <Button raised color="primary" className={classes.button} onClick={this.modificar}>
                    <Done/>
                    modificar
                </Button>

                <Button raised color="primary" className={classes.button}  onClick={function(event) {window.location = '/'}}>
                    <Done/>
                    Regresar
                </Button>
                    <p id='footer'> MDTI. Alfonso Gutiérrez Molina amolina@unam.mx </p>

                <div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Se ha modificado</span>}
                        action={[
                            <Button key="undo" color="accent" dense onClick={this.handleClose}>
                                Cerrar
                            </Button>,
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </div>
            </div>
        )
    }
}

FormModificar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormModificar);