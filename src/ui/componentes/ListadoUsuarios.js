import React from 'react'
import {connect} from 'react-redux'
import {borrarUsuario, editarUsuario} from "../../api/actions/Usuarios"
import {bindActionCreators} from "redux"


const ListadoUsuarios = ({usuarios, borrarUsuario, editarUsuario}) =>
    <ul>
        {usuarios.length
        ? usuarios.map((usuario, i)=> 
            <li key={i}>
                {usuario.nombre} {usuario.apellido}
                <button onClick={editarUsuario.bind(null, i)}>editar</button>
                <button onClick={borrarUsuario.bind(null, i)}>borrar</button>
            </li>
        )
        :<li>No hay usuarios para mostrar</li>}
    </ul>

export default connect(
    ({Usuarios})=>({usuarios: Usuarios.usuarios}),
    (dispatch)=>({ 
        borrarUsuario : bindActionCreators(borrarUsuario,dispatch),
        editarUsuario : bindActionCreators(editarUsuario, dispatch)
        })
    )(ListadoUsuarios)