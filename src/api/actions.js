

export let aumentarContador = () =>{
    return {type:"CONTADOR_SUMAR"}
}

export let restarContador = () =>{
    return {type:"CONTADOR_RESTAR"}
}

export let resetearContador = () =>{
    return {type:"CONTADOR_RESETEAR"}
}

export let manejarElSubmit = (e, store) =>{
    e.preventDefault()
  if(store.form.editar>=0){
    let start = store.usuarios.slice(0, store.form.editar)
    let end = store.usuarios.slice(store.form.editar+1)
    let usuarioModificado = store.form
    let nuevos_usuarios = [
      ...start,
      usuarioModificado,
      ...end
    ]
    return {type: "MANEJAR_USUARIO", nuevos_usuarios}}
  if (store.form.editar = -1){ return {type: "MANEJAR_SUBMIT"}} }

export let manejarCambioNombre = (e) =>{
    let nombre = e.target.value
    let elemento = e.target.dataset.target
    return {type: "MANEJAR_NOMBRE", nombre, elemento}
}

