import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    const [error, setError] = useState(false) // validación de formulario vacios

    // funciones
    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeToUpperCase = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value.toUpperCase()
        })
    }
    const submitEvent = (e) => {
        e.preventDefault();
        // validar campos
        if (mascota.trim() === "" || propietario.trim() === "" ||
            fecha.trim() === "" || hora.trim() === "" ||
            sintomas.trim() === "") {
            setError(true)
            return;
        }
        setError(false)
        //asignar un id
        cita.id = uuidv4();
        // crear cita
        crearCita(cita);
        // reiniciar fomulario
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (
        <>
            <h2>Crear cita</h2>
            <form
                onSubmit={submitEvent}
            >
                {error ? <p className="alerta-error">Todos los campos son requeridos</p> : null}

                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    value={mascota}
                    onChange={handleChangeToUpperCase}
                />
                <label>Nombre del propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    value={propietario}
                    onChange={handleChangeToUpperCase}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    value={fecha}
                    onChange={handleChange}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    value={hora}
                    onChange={handleChange}
                />
                <label>Sistomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    value={sintomas}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </>
    )
}
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;
