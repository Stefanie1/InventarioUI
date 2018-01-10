import React, {Component} from 'react'
import Chip from 'material-ui/Chip'

class Equipos extends Component {
    render() {
        const { equipos } = this.props;
        return (
            <div className=''>
                {equipos.map((equipo,index) => (
                    <div className='equipo-info' key={index}>
                        <Chip label={equipo.equipo}/>
                        <Chip label={equipo.numInventario}/>
                        <Chip label={equipo.numSerie}/>
                        <Chip label={equipo.marca}/>
                        <Chip label={equipo.estatus}/>
                        <Chip label={equipo.sede}/>
                        <Chip label={equipo.aula}/>
                        {((equipo.observaciones && equipo.observaciones !== '' && (
                            <Chip label={equipo.observaciones}/>
                        )))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Equipos
