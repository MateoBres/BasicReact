let init = {
    links: ['usuarios', 'productos', 'contacto'],
    contador: 0,
    form : {
        nombre:'',
        apellido:'',
        editar : -1
      },
      usuarios:[],
}


let reducer = (prevState = init, action) =>{
    switch(action.type){
        case "MANEJAR_USUARIO":
            return {  ...prevState,
                usuarios : action.nuevos_usuarios,
                form:{
                  nombre:'',
                  apellido:'',
                  editar : -1
                },
                
              }
        case "MANEJAR_SUBMIT":
            return { ...prevState,
                usuarios:[
                  ...prevState.usuarios,
                  prevState.form,
                ],
                form:{
                  nombre:'',
                  apellido:'',
                  editar : -1
                }
              }
        case "MANEJAR_NOMBRE":
            return{
                ...prevState,
                form : { 
                    ...prevState.form,
                    [action.elemento] : action.nombre
                } 
            }
        case 'CONTADOR_SUMAR':
            return{
                ...prevState,
                contador: prevState.contador + 1
            }
        case 'CONTADOR_RESTAR':
            return{
                ...prevState,
                contador: prevState.contador - 1
            }
        case 'CONTADOR_RESETEAR':
            return{
                ...prevState,
                contador: 0
            }
        default:
            return prevState
    }
}

export default reducer