import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Equipos from './Equipos'
import Done from 'material-ui-icons/Done';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const buscarPor = [
    {
        value: 'Equipo',
        label: 'Equipo',
    },
    {
        value: 'Numero de Serie',
        label: 'Numero de Serie',
    },
    {
        value: 'Numero de Inventario',
        label: 'Numero de Inventario',
    },
    {
        value: 'Sede',
        label: 'Sede',
    },
    {
        value: 'Aula',
        label: 'Aula',
    },
    {
        value: 'Marca',
        label: 'Marca',
    },
    {
        value: 'Estatus',
        label: 'Estatus',
    }
]
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
        value: 'Generica',
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

class FormConsultas extends Component {
    state = {
        equipo: '',
        sede: '',
        marca: '',
        aula: '',
        numSerie: '',
        numInventario: '',
        estatus: '',
        open: false,
        mensaje: '',
        show: false,
        buscarPor: '',
    }

    saveEquipo = name => event => {
        console.log("Call save Equipo");
        console.log(event.target.value);
        console.log(name);
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open: false});
    };


    consultaEquipo = (e) => {
        e.preventDefault();
        console.log("Call registroEquipo");
        console.log(this.state.equipo);
        console.log(this.state.numInventario);

        var equipo = {
            "equipo": this.state.equipo,
            "numInventario": this.state.numInventario,
            "numSerie": this.state.numSerie,
            "marca": this.state.marca,
            "estatus": this.state.estatus,
            "sede": this.state.sede,
            "aula": this.state.aula,
        }
        fetch('http://localhost:7050/consultarEquipo', {
            method: 'POST',
            body: JSON.stringify(equipo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({data: data, open: true, mensaje: data.mensaje, show: true});
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
        });
    };
    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                {/*<BotonFormulario equipo={this.state.equipo} registroEquipo={this.registroEquipo}/>*/}
                {this.state.buscarPor == '' && (
                    <TextField
                        id="select-currency"
                        select
                        label="Buscar Por "
                        value={this.state.buscarPor}
                        onChange={this.handleChange('buscarPor')}
                        required={true}
                        fullWidth
                        margin="normal"
                    >
                        {buscarPor.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>)}

                {this.state.buscarPor != '' && this.state.buscarPor == 'Equipo' && (
                    <TextField
                        id="select-currency"
                        select
                        label="Selectione Equipo "
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
                )}
                {this.state.buscarPor != '' && this.state.buscarPor == 'Numero de Inventario' && (
                    <TextField
                        id="search"
                        label="Número de inventario"
                        value={this.state.numInventario}
                        type="search"
                        required={true}
                        onChange={this.handleChange('numInventario')}
                        margin="normal"
                    />)}

                {this.state.buscarPor != '' && this.state.buscarPor == 'Numero de Serie' && (
                    <TextField
                        id="search"
                        label="Número de serie "
                        value={this.state.numSerie}
                        type="search"
                        onChange={this.handleChange('numSerie')}
                        margin="normal"
                    />)}
                {this.state.buscarPor != '' && this.state.buscarPor == 'Marca' && (
                    <TextField
                        id="select-marca"
                        select
                        label="Marca "
                        value={this.state.marca}
                        onChange={this.handleChange('marca')}
                        helperText="Por favor seleccione una opción "
                        margin="normal"
                    >
                        {marc.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>)}


                {this.state.buscarPor != '' && this.state.buscarPor == 'Estatus' && (
                    <TextField
                        id="select-estatus"
                        select
                        label="Estatus"
                        value={this.state.estatus}
                        onChange={this.handleChange('estatus')}
                        helperText="Por favor seleccione una opción"
                        margin="normal"
                    >
                        {estat.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>)}

                {this.state.buscarPor != '' && this.state.buscarPor == 'Sede' && (
                    <TextField
                        id="select-currency"
                        select
                        label="Sede"
                        value={this.state.sede}
                        onChange={this.handleChange('sede')}
                        helperText="Por favor seleccione una opción"
                        margin="normal"
                    >
                        {sed.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>)}

                {this.state.buscarPor != '' && this.state.buscarPor == 'Aula' && (
                    <TextField
                        id="select-currency"
                        select
                        label="Aula"
                        value={this.state.aula}
                        onChange={this.handleChange('aula')}
                        helperText="Por favor seleccione una opción"
                        margin="normal"
                    >
                        {aul.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>)}


                <br></br>
                <Button raised color="primary" onClick={this.consultaEquipo}>
                    <Done/>
                    Consultar
                </Button>

                {this.state.show && (
                    <Equipos/>
                )}

                {this.state.buscarPor != '' && (
                    <Button raised color="primary" onClick={function (event) {
                        window.location = '/formconsultas'
                    }}>
                        <Done/>
                        Buscar por..
                    </Button>
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

                <p id='footer'> stefanie.c@gmail.com </p>
            </div>

        )
    }
}


export default FormConsultas;