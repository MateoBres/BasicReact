let init = {
    form : {
        nombre:'',
        apellido:'',
        editar : -1
      },
      usuarios:[],
}


let UsuariosReducer = (prevState = init, action) =>{
    switch(action.type){
        case "USUARIO_BORRAR":
            let start = prevState.usuarios.slice(0,action.i)
            let end = prevState.usuarios.slice(action.i+1)
            let nuevos_usuarios = [...start, ...end]
            return {
                ...prevState,
                usuarios : nuevos_usuarios
            }       
        case "USUARIO_EDITAR":
            return {...prevState,
                form:{
                    nombre: prevState.usuarios[action.i].nombre,
                    apellido: prevState.usuarios[action.i].apellido,
                    editar: action.i
                }
            }
        
        case "MANEJAR_SUBMIT":
            action.e.preventDefault()
            if(prevState.form.editar>=0){
                let start = prevState.usuarios.slice(0, prevState.form.editar)
                let end = prevState.usuarios.slice(prevState.form.editar+1)
                let usuarioModificado = prevState.form
                let nuevos_usuarios = [
                    ...start,
                    usuarioModificado,
                    ...end
                ]
            return { ...prevState,
                    usuarios : nuevos_usuarios,
                    form:{
                        nombre:'',
                        apellido:'',
                        editar : -1
                    }
                }
            }
            else{
                return{
                    ...prevState,
                    usuarios:[
                    ...prevState.usuarios,
                    prevState.form,
                    ],
                    form:{
                    nombre:'',
                    apellido:'',
                    editar : -1
                    }}}
        
        case "MANEJAR_NOMBRE":
            return{
                ...prevState,
                form : { 
                    ...prevState.form,
                    [action.elemento] : action.nombre
                } 
            }
        default :
            return prevState
    }
}



export default UsuariosReducer  
       