import React from 'react'
import ListadoUsuarios from './ListadoUsuarios'

const Usuarios = ({nombre, apellido, usuarios, manejarElSubmit, manejarCambioNombre,  borrarUsuario, editarUsuario}) =>
    <>
        <form onSubmit={manejarElSubmit}>
            <div>
                <input data-target='nombre' onChange={manejarCambioNombre} type="text" placeholder='nombre' value={nombre}/>
            </div>
            <div>
                <input data-target='apellido' onChange={manejarCambioNombre} type="text" placeholder='apellido'value={apellido}/>
            </div>
            <button>Guardar</button>
        </form>
       <ListadoUsuarios 
            usuarios = {usuarios}
            borrarUsuario = {borrarUsuario}
            editarUsuario = {editarUsuario}
        />
    </>

export default Usuarios