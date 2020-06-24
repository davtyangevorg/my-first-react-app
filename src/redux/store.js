import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import phoneReduser from './phones-reduser.js'
import cartReduser from './cart-reduser.js'
import videoGamesReduser from './videoGames-reduser.js'
let reducers=combineReducers({
    phoneReduser:phoneReduser,
    cartReduser:cartReduser,
    videoGamesReduser:videoGamesReduser
})

let store=createStore(reducers,applyMiddleware(thunk))

export default store