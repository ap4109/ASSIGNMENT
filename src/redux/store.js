import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cartItemsReducer from './reducer'

const store = createStore(cartItemsReducer,applyMiddleware(thunk))

export default store