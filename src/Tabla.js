import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/ModeEdit';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const ITEM_HEIGHT = 48;

const options = [
    'Administrador',
    'Encargado',
    'General',
];

class BasicTable extends Component {
    state = {
        ususario: '',
        rol: '',
        data: '',
        anchorEl: null,
    };

    componentDidMount() {
        fetch('http://localhost:7050/usuarios')
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data);
                this.setState({data: data});
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };


    clickRow = (row, usuario) => {
        this.setState({ususario: usuario})
    };

    handleClose = (e,u) => {
        this.setState({ anchorEl: null });

        console.log(e.target);
        console.log(u);
        console.log('new User '+ this.state.ususario);
        this.modificar(e.target, this.state.ususario);
    };

    modificar = (e, usuario) => {
        var rol;
        if(e.innerHTML.includes('Administrador')){
            rol = 1;
        } else if (e.innerHTML.includes('Encargado')){
            rol = 2;
        } else if(e.innerHTML.includes('General')){
            rol = 3;
        }

        console.log('rol '+ rol);
        console.log('usuario '+ usuario);

        fetch('http://localhost:7050/login?username=' + this.state.ususario + "&rol=" + rol)
            .then(res => res)
            .then(data => {
                console.log(data);
                window.location = '/formpermisos';
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

    render() {
        const {classes} = this.props;
        const { anchorEl } = this.state;
        let usuario;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell numeric>Rol</TableCell>
                            <TableCell numeric>Modificar Rol</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data !== '' && this.state.data.map((u,i) => {
                            return (
                                <TableRow key={i}
                                          hover
                                          onClick={event => this.clickRow(event, u.usuario)}
                                          role="checkbox"
                                          tabIndex={-1}
                                >
                                    <TableCell>{u.usuario}</TableCell>
                                    <TableCell numeric>{u.rol}</TableCell>
                                    {/*<Roles select={this.modificar}/>*/}

                                    <div>
                                        <IconButton
                                            aria-label="More"
                                            aria-owns={anchorEl ? 'long-menu' : null}
                                            aria-haspopup="true"
                                            onClick={this.handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={this.state.anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={this.handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: 200,
                                                },
                                            }}
                                        >
                                            {options.map((option,index) => (
                                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={event => this.handleClose(event, u.usuario)}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </div>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

BasicTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);