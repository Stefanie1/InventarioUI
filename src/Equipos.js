import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import {withStyles} from "material-ui/styles/index";
import PropTypes from 'prop-types';


const styles = theme => ({
    container: {
        margin: 'auto',
        width: '80%',
        padding: '1px',
    },
    chip:{
        display: 'flex',
        'justify-content': 'center',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: '1%',
    }
});

class Equipos extends Component {
    render() {
        const { classes, equipos } = this.props;
        return (
            <div className={classes.container}>
                {equipos.map((equipo,index) => (
                    <div className='equipo-info' key={index}>
                        <Chip className={classes.chip} label={equipo.equipo}/>
                        <Chip className={classes.chip} label={equipo.numInventario}/>
                        <Chip className={classes.chip} label={equipo.numSerie}/>
                        <Chip className={classes.chip} label={equipo.marca}/>
                        <Chip className={classes.chip} label={equipo.estatus}/>
                        <Chip className={classes.chip} label={equipo.sede}/>
                        <Chip className={classes.chip} label={equipo.aula}/>
                        {((equipo.observaciones && equipo.observaciones !== '' && (
                            <Chip className={classes.chip} label={equipo.observaciones}/>
                        )))}
                    </div>
                ))}
            </div>
        )
    }
}

Equipos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Equipos);
