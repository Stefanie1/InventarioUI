import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Chip from 'material-ui/Chip';
import {withStyles} from "material-ui/styles/index";
import PropTypes from 'prop-types';


const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    observaciones: {
        marginLeft: 'auto',
        width: '90%',
        adding: '1px',
    },
    container: {
        margin: 'auto',
        width: '80%',
        padding: '1px',
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: '3%',
    },
    chip: {
        display: 'flex',
        'justify-content': 'center',
        margin: theme.spacing.unit,
        marginTop: '1%',
    }
});

const tipos = [
    {
        value: 'Monitor',
        label: 'Monitor',
    },
    {
        value: 'CPU',
        label: 'CPU',
    },
    {
        value: 'Switch',
        label: 'Switch',
    },
    {
        value: 'Router',
        label: 'Router',
    },
    {
        value: 'Cañon',
        label: 'Cañon',
    },
    {
        value: 'Impresora',
        label: 'Impresora',
    },
    {
        value: 'Escaner',
        label: 'Escaner',
    }
];
const marc = [
    {
        value: 'Acer',
        label: 'Acer',
    },
    {
        value: 'Sony',
        label: 'Sony',
    },
    {
        value: 'Dell',
        label: 'Dell',
    },
    {
        value: 'Toshiba',
        label: 'Toshiba',
    },
    {
        value: 'Lenobo',
        label: 'Lenobo',
    },
    {
        value: 'Mac',
        label: 'Mac',
    },
    {
        value: 'Generico',
        label: 'Generica',
    }
];

const sed = [
    {
        value: 'Nuevo León',
        label: 'Nuevo León',
    },
    {
        value: 'Ciudad Universitaría',
        label: 'Ciudad Universitaría',
    },
    {
        value: 'Mascarones',
        label: 'Mascarone',
    },
    {
        value: 'Tlatelolco',
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
        value: 'Aula 1',
        label: 'Aúla 1',
    },
    {
        value: 'Aula 2',
        label: 'Aúla 2',
    },
    {
        value: 'Aula 3',
        label: 'Aúla 3',
    },
    {
        value: 'Aula 4',
        label: 'Aúla 4',
    },
    {
        value: 'Aula 5',
        label: 'Aúla 5',
    },
    {
        value: 'Aula 6',
        label: 'Aúla 6',
    },
    {
        value: 'Aula 7',
        label: 'Aúla 7',
    },
    {
        value: 'Aula 8',
        label: 'Aúla 8',
    },
    {
        value: 'Aula 9',
        label: 'Aúla 9',
    },
    {
        value: 'Aula Multimedia 1',
        label: 'Multimedia 1',
    },
    {
        value: 'Aula Multimedia 2',
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

class FormAltas extends Component {
    state = {
        equipo: '',
        sede: '',
        marca: '',
        aula: '',
        numSerie: '',
        numInventario: '',
        estatus: '',
        observaciones: '',
        open: false,
        mensaje: ''
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false});
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


    registroEquipo = (e) => {
        e.preventDefault();

        if (this.getUser() === null || this.state.equipo === '' || this.state.numInventario === '' || this.state.numSerie === '' || this.state.marca === '' || this.state.estatus === '' || this.state.sede === '' || this.state.aula === '') {
            return;
        }

        var equipo = {
            "equipo": this.state.equipo,
            "numInventario": this.state.numInventario,
            "numSerie": this.state.numSerie,
            "marca": this.state.marca,
            "estatus": this.state.estatus,
            "sede": this.state.sede,
            "aula": this.state.aula,
            "observaciones": this.state.observaciones,
            "user": this.getUser(),
        }
        fetch('http://localhost:7050/equipoInfo', {
            method: 'POST',
            body: JSON.stringify(equipo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({data: data, open: true, mensaje: data.mensaje});
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

    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <TextField
                    id="select-currency"
                    select
                    label="Equipo "
                    className={classes.textField}
                    value={this.state.equipo}
                    onChange={this.handleChange('equipo')}
                    required={true}
                    helperText="Por favor selecciona una opción"
                    margin="normal"
                >
                    {tipos.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="search"
                    label="Número de inventario"
                    value={this.state.numInventario}
                    className={classes.textField}
                    type="search"
                    helperText="Por favor ingrese el numero"
                    required={true}
                    onChange={this.handleChange('numInventario')}
                    margin="normal"
                />
                <TextField
                    id="search"
                    label="Número de serie "
                    value={this.state.numSerie}
                    className={classes.textField}
                    type="search"
                    helperText="Por favor ingrese el numero"
                    onChange={this.handleChange('numSerie')}
                    margin="normal"
                />

                <TextField
                    id="select-marca"
                    select
                    label="Marca "
                    value={this.state.marca}
                    className={classes.textField}
                    onChange={this.handleChange('marca')}
                    helperText="Por favor seleccione una opción "
                    margin="normal"
                >
                    {marc.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="select-estatus"
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
                    label="Aúla"
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

                <Button raised color="primary" className={classes.button} onClick={this.registroEquipo.bind(this)}>
                    <Done/>
                    guardar
                </Button>


                {(this.state.data != null) && (
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
                )}

                <Button raised color="primary" onClick={function (event) {
                    window.location = '/'
                }}>
                    <Done/>
                    Regresar
                </Button>


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
                        message={<span id="message-id">{this.state.mensaje}</span>}
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
                                <CloseIcon/>
                            </IconButton>,
                        ]}
                    />
                </div>

                <p id='footer'> MDTI. Alfonso Gutiérrez Molina amolina@unam.mx </p>
            </div>

        )
    }
}

FormAltas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormAltas);