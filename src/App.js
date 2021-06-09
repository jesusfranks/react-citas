import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

function App() {

    //citas en local storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    const [citas, guardarCitas] = useState(citasIniciales) // Arreglo de citas

    useEffect(() => {
        localStorage.setItem('citas', JSON.stringify(citas));
    }, [citas])

    // funcion para crear una cita se pasa al fomulario
    const crearCita = cita => {
        guardarCitas([
            ...citas,
            cita
        ])
    }

    //funcion para eliminar una cita en el componente cita.js
    const eliminarCita = (id) => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas)
    }

    return (
        <>
            <h1>Administración de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        <ListaCitas
                            citas={citas}
                            eliminarCita={eliminarCita}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
