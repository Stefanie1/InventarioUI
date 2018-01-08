import React, {Component} from 'react'
import Chip from 'material-ui/Chip'

class Equipos extends Component {
    render() {
        const equipos = [{
            equipo: 'Monitor',
            noinventario: '',
            noserie: '',
            marca: 'DELL',
            estatus: '',
            sede: 'NL',
            aula: '',
            observaciones: 'Muy bien',

        }, {
                equipo: 'Monitor',
                noinventario: '',
                noserie: '',
                marca: 'DELL',
                estatus: '',
                sede: 'NL',
                aula: '',
                observaciones: 'Muy bien',
            },
            {
                equipo: 'Monitor',
                noinventario: '',
                noserie: '',
                marca: 'DELL',
                estatus: '',
                sede: 'NL',
                aula: '',
                observaciones: 'Muy bien',
            },
        ]

        return (
            <div className=''>
                {equipos.map((equipo,index) => (
                    <div className='equipo-info' key={index}>
                        <Chip label={equipo.equipo}/>
                        <Chip label={equipo.noinventario}/>
                        <Chip label={equipo.noserie}/>
                        <Chip label={equipo.marca}/>
                        <Chip label={equipo.estatus}/>
                        <Chip label={equipo.sede}/>
                        <Chip label={equipo.aula}/>
                        <Chip label={equipo.observaciones}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Equipos
