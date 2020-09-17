import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Usuarios from '../componentes/Usuarios'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
        contador : 0,
        form : {
          nombre:'',
          apellido:'',
          editar : -1
        },
        usuarios:[],
        
    }
}

borrarUsuario=(i)=>{
  let start = this.state.usuarios.slice(0, i)
  let end = this.state.usuarios.slice(i+1)
  let nuevos_usuarios = [
    ...start,
    ...end
  ]
  this.setState({
    usuarios : nuevos_usuarios
  })
}

editarUsuario=(i)=>{
  this.setState({
    form:{
      nombre :this.state.usuarios[i].nombre,
      apellido:this.state.usuarios[i].apellido,
      editar: i
    }
  })
}


manejarElSubmit=(e)=>{
  e.preventDefault()
  if(this.state.form.editar>=0){
    let start = this.state.usuarios.slice(0, this.state.form.editar)
    let end = this.state.usuarios.slice(this.state.form.editar+1)
    let usuarioModificado = this.state.form
    let nuevos_usuarios = [
      ...start,
      usuarioModificado,
      ...end
    ]
    this.setState({
      usuarios : nuevos_usuarios,
      form:{
        nombre:'',
        apellido:'',
        editar : -1
      },
      
    })
  } else {
      this.setState({
        usuarios:[
          ...this.state.usuarios,
          this.state.form,
        ],
        form:{
          nombre:'',
          apellido:'',
          editar : -1
        }
      })
    }
}



manejarCambioNombre=(e)=>{
  this.setState({ 
   form : { 
       ...this.state.form,
       [e.target.dataset.target] : e.target.value
   } 
 })
}


aumentarContador=()=>{this.setState({contador: this.state.contador+1})}

restarContador=()=>{this.setState({contador: this.state.contador-1})}

resetearContador=()=>{this.setState({contador: 0})}

render(){
  let {contador, form, usuarios} = this.state
    return <>
            <Header/>
            <Main 
              contador={contador}
              aumentarContador={this.aumentarContador}
              restarContador={this.restarContador}
              resetearContador={this.resetearContador}
              />
            <Usuarios
                nombre={form.nombre}
                apellido={form.apellido}
                usuarios={usuarios}
                manejarElSubmit={this.manejarElSubmit}
                manejarCambioNombre={this.manejarCambioNombre}
                borrarUsuario={this.borrarUsuario}
                editarUsuario={this.editarUsuario}
            />
            <Footer/>
          </>
  }
}

export default App