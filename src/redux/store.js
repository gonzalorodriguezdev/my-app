// herramientas para crear una store con THUNK

// createStore
// applyMiddleware
import { createStore, applyMiddleware} from "redux"

// thunk
import thunk from "redux-thunk"

// reducer
import reducer from "./reducer"

// composeWhitDevTools
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
