import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});


function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function Acciones(props) {
    const {classes, acciones} = props;
    return (
        <div>
            <p className="App-intro">
                Selecciona una opción:
            </p>
            <div className={classes.row}>
                {acciones.length > 0 && acciones.map((accion, key) => (
                    <Chip
                        key={key}
                        avatar={<Avatar>{accion.charAt(0)}</Avatar>}
                        label={accion}
                        onClick={function (event) {
                            window.location = '/form' + accion.toLowerCase()
                        }}
                        className={classes.chip}
                    />
                ))}
            </div>
        </div>
    );
}

Acciones.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Acciones);