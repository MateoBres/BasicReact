import {combineReducers} from "redux"
import App from "./reducers/App"
import Usuarios from "./reducers/Usuarios"
import Contador from "./reducers/Contador"


let reducer = combineReducers({App, Usuarios, Contador})

export default reducer