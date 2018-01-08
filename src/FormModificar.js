import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';



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




class FormModificar extends Component{
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        tipo: '',
        mar:'',
        esta:'',
        se:'',
        au:'',
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){
        return(
            <div>
                    <TextField
                        id="search"
                        label="Número de inventario"
                        type="search"
                        margin="normal"
                    />
                    <Button raised color="primary">
                        <Done/>
                        Buscar
                    </Button>
                    <div className='equipo-info'>
                        <Chip label="equipo "/>
                        <Chip label="in"/>
                        <Chip label="ser"/>
                        <Chip label="mar"/>
                        <Chip label="est"/>
                        <Chip label="sede"/>
                        <Chip label="aula"/>
                        <Chip label="augdsffdsfsfvcresgrsvrsfvrwszdfvrsdzfvrsdzfverdgbrgdfxgbtrdfgvxdrtdhrfgvcvfbrthedfgvxc rbtdfvxrgdfgv dfgvc rdgbfvxcfdxcv gfdfvxcbfvla"/>
                    </div>
                <TextField
                    id="select-currency"
                    select
                    label="Estatus"
                    value={this.state.esta}
                    onChange={this.handleChange('esta')}

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
                    value={this.state.se}
                    onChange={this.handleChange('se')}

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
                    value={this.state.au}
                    onChange={this.handleChange('au')}

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
                    margin="normal"
                />
                    <Button raised color="primary">
                        <Done/>
                       modificar
                    </Button>
                <Button raised color="primary"  onClick={function(event) {window.location = '/'}}>
                    <Done/>
                    Regresar
                </Button>
                    <p id='footer'> stefanie.c@gmail.com </p>
            </div>
        )
    }
}

export default FormModificar;