
export let manejarElSubmit = (e) =>{
    return {type: "MANEJAR_SUBMIT", e}
  }

export let manejarCambioNombre = (e) =>{
  let nombre = e.target.value
  let elemento = e.target.dataset.target
  return {type: "MANEJAR_NOMBRE", nombre, elemento}
}

export let borrarUsuario =(i)=>{
    return{type:"USUARIO_BORRAR", i}
 }
 
 export let editarUsuario =(i)=>{
   return{type:"USUARIO_EDITAR", i}
 }