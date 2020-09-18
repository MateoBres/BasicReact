import form, usuarios from 'reducer'

export let aumentarContador = () =>{
    return {type:"CONTADOR_SUMAR"}
}

export let restarContador = () =>{
    return {type:"CONTADOR_RESTAR"}
}

export let resetearContador = () =>{
    return {type:"CONTADOR_RESETEAR"}
}

export let manejarElSubmit = (e) =>{
    e.preventDefault()
  if(init.form.editar>=0){
    let start = init.usuarios.slice(0, init.form.editar)
    let end = init.usuarios.slice(init.form.editar+1)
    let usuarioModificado = init.form
    let nuevos_usuarios = [
      ...start,
      usuarioModificado,
      ...end
    ]
    return {type: "MANEJAR_USUARIO", nuevos_usuarios}}
  if (init.form.editar = -1){ return {type: "MANEJAR_SUBMIT"}} }

export let manejarCambioNombre = (e) =>{
    let nombre = e.target.value
    let elemento = e.target.dataset.target
    return {type: "MANEJAR_NOMBRE", nombre, elemento}
}

