import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {

    const { equipos, registrarColaborador, crearEquipo } = props;

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);

        // Limpiando campos
        setNombre("");
        setPuesto("");
        setFoto("");
        setEquipo("");
    };

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        crearEquipo({titulo, colorPrimario: color});

        // Limpiando campos
        setTitulo("");
        setColor("");
    };

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />

            <Campo
                titulo="Foto"
                placeholder="Ingresar foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />

            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={equipos}
            />

            <Boton>
                Crear
            </Boton>

        </form>

        <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el equipo.</h2>

            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={setTitulo}
            />

            <Campo
                titulo="Color"
                placeholder="Ingresar el color en hexadecimal"
                required
                valor={color}
                actualizarValor={setColor}
                type="color"
            />

            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
};

export default Formulario;
