import ReactDOM from 'react-dom'
import React from 'react'
import App from './ui/layout/App'
import {Provider} from 'react-redux'
import store from './api/store'


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)