import React from 'react'
import {connect} from 'react-redux'
import {aumentarContador, restarContador, resetearContador} from "../../api/actions/Contador"
import {bindActionCreators} from 'redux'
import {Route, Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Transition from 'react-transition-group/Transition'

import Usuarios from '../paginas/Usuarios'
import Productos from '../paginas/Productos'
import Contacto from '../paginas/Contacto'


const theme = createMuiTheme({
      overrides: {
          MuiButton: {
            text:{
              color: 'green'
            }
          }
      }
})

const Main=({contador, aumentarContador, resetearContador, restarContador}) =>
      <main>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route path='/Usuarios' component={Usuarios}/>
            <Route path='/Productos' component={Productos}/>
            <Route path='/Contacto' component={Contacto}/>
          </Switch>
          <Grid container>
            <Grid item xs={12}>
              <h2>Home</h2>
            </Grid>
            <Grid item xs={6}>
              <p>El contador esta' en : {contador}</p>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={aumentarContador}>+</Button>
              <Button onClick={resetearContador}>resetear</Button>
              <Button onClick={restarContador}>-</Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
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