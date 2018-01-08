import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

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
        alert(this.state.inventario);
    };
    eliminarEquipo=(clic) =>{
        clic.preventDefault();
        this.setState({ open: true });
        console.log(this.state.inventario);
        fetch('http://localhost:7050/eliminarEquipo?inventario=' + this.state.inventario)
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
        return (
            <div>
                <form onSubmit={this.handleClickOpen.bind(this)}>
                    <TextField
                        id="search"
                        label="Número de inventario"
                        type="search"
                        margin="normal"
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
                <div className='equipo-info'>
                    <Chip label={this.state.data.equipo}/>
                    <Chip label={this.state.data.numInventario}/>
                    <Chip label={this.state.data.numSerie}/>
                    <Chip label={this.state.data.marca}/>
                    <Chip label={this.state.data.sede}/>
                    <Chip label={this.state.data.aula}/>
                    <Chip label={this.state.data.estatus}/>
                    <Chip label={this.state.data.observaciones}/>
                </div>
                )}
                <Button raised color="primary" onClick={this.eliminarEquipo.bind(this)}>
                    <Done/>
                    eliminar
                </Button>
                <Button raised color="primary" onClick={function (event) {
                    window.location = '/'
                }}>
                    <Done/>
                    Regresar
                </Button>
                <p id='footer'> stefanie.c@gmail.com </p>


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

export default FormEliminar;