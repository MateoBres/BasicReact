export let aumentarContador = () =>{
    return {type:"CONTADOR_SUMAR"}
}

export let restarContador = () =>{
    return {type:"CONTADOR_RESTAR"}
}

export let resetearContador = () =>{
    return {type:"CONTADOR_RESETEAR"}
}
