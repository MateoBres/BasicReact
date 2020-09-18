import React from 'react'
import {connect} from 'react-redux'
import {aumentarContador, restarContador, resetearContador} from "../../api/actions/Contador"
import {bindActionCreators} from 'redux'
import {Route, Switch} from 'react-router-dom'

import Usuarios from '../paginas/Usuarios'
import Productos from '../paginas/Productos'
import Contacto from '../paginas/Contacto'


const Main=({contador, aumentarContador, resetearContador, restarContador}) =>
      <main>
        <Switch>
          <Route path='/Usuarios' component={Usuarios}/>
          <Route path='/Productos' component={Productos}/>
          <Route path='/Contacto' component={Contacto}/>
        </Switch>

        {/* <h2>Home</h2>
        <p>El contador esta' en : {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button> */}
      </main>

let mapDispatchToProps = (dispatch) => {
    return {
      aumentarContador : bindActionCreators(aumentarContador, dispatch),
      restarContador : bindActionCreators(restarContador, dispatch),
      resetearContador : bindActionCreators(resetearContador, dispatch),
    }
}

export default connect(
  ({Contador})=>({contador: Contador.contador}),
  mapDispatchToProps
  )(Main)