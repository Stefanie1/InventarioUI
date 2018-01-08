import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
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
class TextFields extends React.Component {
    state = {
        equipo: '',
        tipo: '',
        marca:'',
        estado:'',
        sede:'',
        aula:'',
        numSerie:'',
        numInventario:'',
        observaciones:''
    };


    handleChange = name => event => {
        console.log("change State");

        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes, equipo} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off" >

                <TextField
                    id="select-currency"
                    select
                    label="Equipo "
                    className={classes.textField}
                    value={this.state.equipo}
                    onChange={this.handleChange('equipo')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
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
                    type="search"
                    className={classes.textField}
                    onChange={this.handleChange('numInventario')}
                    margin="normal"
                />
                <TextField
                    id="search"
                    label="Número de serie "
                    type="search"
                    className={classes.textField}
                    onChange={this.handleChange('numSerie')}
                    margin="normal"
                />

                <TextField
                    id="select-currency"
                    select
                    label="Marca "
                    className={classes.textField}
                    value={this.state.marca}
                    onChange={this.handleChange('marca')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
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
                    id="select-currency"
                    select
                    label="Estatus"
                    className={classes.textField}
                    value={this.state.estado}
                    onChange={this.handleChange('estado')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
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
                    className={classes.textField}
                    value={this.state.sede}
                    onChange={this.handleChange('sede')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
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
                    className={classes.textField}
                    value={this.state.aula}
                    onChange={this.handleChange('aula')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
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
                    fullWidth
                    onChange={this.handleChange('obsevaciones')}
                    margin="normal"
                />
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);