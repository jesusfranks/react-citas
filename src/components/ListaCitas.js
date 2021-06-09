import React from 'react'
import PropTypes from 'prop-types'
import Cita from './Cita'

const ListaCitas = ({ citas, eliminarCita }) => {
    return (
        <>
            <h2>Administa tus citas</h2>
            {
                citas.length > 0
                    ?
                    citas.map((cita) =>
                        <Cita
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
                        />
                    )
                    :
                    <p className="alerta-null">No hay citas agendadas</p>
            }
        </>
    )
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default ListaCitas;