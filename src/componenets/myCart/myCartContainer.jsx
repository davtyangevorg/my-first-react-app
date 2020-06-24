import MyCart from './myCart.jsx'
import {removeInCartActionCreator, changeProductCountActionCreator, removeInCartAllActionCreator} from './../../redux/cart-reduser.js'
import { changeThePhoneButtonActionCreator } from '../../redux/phones-reduser.js'
import {changeTheGameButtonActionCreator} from './../../redux/videoGames-reduser.js'
const { connect } = require("react-redux")

let mapStateToProps=(state)=>{
    return{
        phones:state.cartReduser.phones,
        games:state.cartReduser.games
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        removeInCartAll:(productId)=>{
            dispatch(removeInCartAllActionCreator())
            dispatch(changeThePhoneButtonActionCreator(productId))
            dispatch(changeTheGameButtonActionCreator(productId))
        },
        removeInCart:(productId,productType)=>{
            dispatch(removeInCartActionCreator(productId,productType))
            dispatch(changeTheGameButtonActionCreator(productId))
            dispatch(changeThePhoneButtonActionCreator(productId))
        },
        changeProductCount:(productId,symbol)=>{
            dispatch(changeProductCountActionCreator(productId,symbol))
        }
    }
}

const MyCartContainer=connect(mapStateToProps,mapDispatchToProps)(MyCart)
export default MyCartContainer