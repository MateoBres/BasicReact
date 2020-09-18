import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Usuarios from '../componentes/Usuarios'

class App extends React.Component{

  constructor(){
    super()
    this.state = {usuarios:[]}
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
let valor = e.target.value
let nombre = e.target.dataset.target
  this.setState({ 
   form : { 
       ...this.state.form,
       nombre : valor
   }
 })
}

render(){
  let {usuarios} = this.state
    return <>
            <Header/>
            <Main/>
            <Usuarios
                usuarios={usuarios}
                borrarUsuario={this.borrarUsuario}
                editarUsuario={this.editarUsuario}
            />
            <Footer/>
          </>
  }
}

export default App