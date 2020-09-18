import React from 'react'
import ListadoUsuarios from './ListadoUsuarios'
import {connect} from "react-redux"
import {manejarElSubmit, manejarCambioNombre} from "../../api/actions"
import {bindActionCreators} from "redux"


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

export default connect(
    ({form})=>({nombre : form.nombre, apellido : form.apellido }),
    (dispatch)=>{
        return{
            manejarElSubmit : bindActionCreators(manejarElSubmit, dispatch),
            manejarCambioNombre : bindActionCreators(manejarCambioNombre, dispatch),
        }
    }
)(Usuarios)