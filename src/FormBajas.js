import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
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
        width: 250,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        'justify-content': 'center',
    },
    button:{
        margin: theme.spacing.unit,
        marginTop: '13%',
    },
    chip:{
        display: 'flex',
        'justify-content': 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: '3%',
    }
});

class FormEliminar extends Component {

    state = {
        inventario: '',
        data: null,
        open: false,
    }

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

    eliminarEquipo=(clic) =>{
        clic.preventDefault();
        this.setState({ open: true });
        console.log(this.state.inventario);
        var user = this.getUser();
        fetch('http://localhost:7050/eliminarEquipo?inventario=' + this.state.inventario + "&user="+ user)
            .then(respuesta => respuesta)
            .catch(function (error) {
                console.log('Request failed', error);
            });
        this.setState({data: null})
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };
    render() {
        const {classes} = this.props;

        return (
            <div>
                <form onSubmit={this.handleClickOpen.bind(this)} >
                    <TextField
                        id="search"
                        label="Número de inventario"
                        type="search"
                        margin="normal"
                        className={classes.textField}
                        value={this.state.inventario}
                        required={true}
                        onChange={e => this.setState({inventario: e.target.value})}
                    />
                    <Button type=" submit " raised color="primary">
                        <Done/>
                        Buscar
                    </Button>
                </form>


                {(this.state.data != null) && (
                <div className='equipo-info' className={classes.container}>
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
                <Button raised color="primary" className={classes.button} onClick={this.eliminarEquipo.bind(this)}>
                    <Done/>
                    eliminar
                </Button>
                <Button raised color="primary" className={classes.button} onClick={function (event) {
                    window.location = '/'
                }}>
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
                        message={<span id="message-id">Se ha Eliminado</span>}
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

FormEliminar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormEliminar);