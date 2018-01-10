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
        value: 'equipo',
        label: 'Equipo',
    },
    {
        value: 'numSerie',
        label: 'Numero de Serie',
    },
    {
        value: 'numInventario',
        label: 'Numero de Inventario',
    },
    {
        value: 'sede',
        label: 'Sede',
    },
    {
        value: 'aula',
        label: 'Aula',
    },
    {
        value: 'marca',
        label: 'Marca',
    },
    {
        value: 'estatus',
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
        value: 'Nuevo Leon ',
        label: 'Nuevo León',
    },
    {
        value: 'ciudad universiatria',
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
        equipos: null,
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

        var equipo = {
            "buscarPor": this.state.buscarPor,
            "valor": this.state[this.state.buscarPor],
        }

        fetch('http://localhost:7050/consultarEquipo', {
            method: 'POST',
            body: JSON.stringify(equipo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({equipos: data, open: true, mensaje: data.mensaje, show: true});
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

                {this.state.buscarPor != '' && this.state.buscarPor == 'equipo' && (
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
                {this.state.buscarPor != '' && this.state.buscarPor == 'numInventario' && (
                    <TextField
                        id="search"
                        label="Número de inventario"
                        value={this.state.numInventario}
                        type="search"
                        required={true}
                        onChange={this.handleChange('numInventario')}
                        margin="normal"
                    />)}

                {this.state.buscarPor != '' && this.state.buscarPor == 'numSerie' && (
                    <TextField
                        id="search"
                        label="Número de serie "
                        value={this.state.numSerie}
                        type="search"
                        onChange={this.handleChange('numSerie')}
                        margin="normal"
                    />)}
                {this.state.buscarPor != '' && this.state.buscarPor == 'marca' && (
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


                {this.state.buscarPor != '' && this.state.buscarPor == 'estatus' && (
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

                {this.state.buscarPor != '' && this.state.buscarPor == 'sede' && (
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

                {this.state.buscarPor != '' && this.state.buscarPor == 'aula' && (
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
                    <Equipos equipos={this.state.equipos}/>
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

                <p id='footer'> stefanie.c@gmail.com </p>
            </div>

        )
    }
}

export default FormConsultas;