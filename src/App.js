import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Usuarios from './Usuarios'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
        contador : 0,
        links:['usuarios', 'productos', 'contacto'],
        form : {
          nombre:'',
          apellido:''
        },
        usuarios:[],
        editar : -1,
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
    apellido:this.state.usuarios[i].apellido
    },
    editar: i,
  })
}


manejarElSubmit=(e)=>{
  e.preventDefault()
  if(this.state.editar>=0){
    this.state.usuarios.splice(this.state.editar, 1, this.state.form)
    this.setState({
      usuarios : this.state.usuarios,
      form:{
        nombre:'',
        apellido:'',
      },
      editar : -1
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
        }
      })
    }
}

manejarCambioNombre=(e)=>{
  if(e.target.placeholder === 'nombre'){
    this.setState({ 
      form : { 
          ...this.state.form,
          nombre : e.target.value
      } 
    })
  }else{
  this.setState({ 
    form : { 
        ...this.state.form,
        apellido : e.target.value
    } 
  })
}}

aumentarContador=()=>{this.setState({contador: this.state.contador+1})}

restarContador=()=>{this.setState({contador: this.state.contador-1})}

resetearContador=()=>{this.setState({contador: 0})}

render(){
  let {contador, links, form, usuarios} = this.state
    return <>
            <Header links={links}/>
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
                // manejarCambioApellido={this.manejarCambioApellido}
                borrarUsuario={this.borrarUsuario}
                editarUsuario={this.editarUsuario}
            />
            <Footer/>
          </>
  }
}

export default App