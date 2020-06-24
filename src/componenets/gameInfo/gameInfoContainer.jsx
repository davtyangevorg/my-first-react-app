import GameInfo from './gameInfo.jsx'
import { connect } from 'react-redux'
// import { getPhoneActionCreator,changeThePhoneButtonActionCreator } from '../../redux/phones-reduser.js'
import { addToCartActionCreator,removeInCartActionCreator } from '../../redux/cart-reduser.js'
import {getProductActionCreator,changeTheGameButtonActionCreator} from './../../redux/videoGames-reduser.js'
let mapStateToProps=(state)=>{
    return{
        product:state.videoGamesReduser.products
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        getProduct:(id)=>{
            dispatch(getProductActionCreator(id))
        },
        addToCart:(addedProduct,productId,productType)=>{
            dispatch(addToCartActionCreator(addedProduct,productType))
            dispatch(changeTheGameButtonActionCreator(productId))
        },
        removeInCart:(productId,productType)=>{
            dispatch(removeInCartActionCreator(productId,productType))
            dispatch(changeTheGameButtonActionCreator(productId))
        }
    }
}

let GameInfoContainer=connect(mapStateToProps,mapDispatchToProps)(GameInfo)

export default GameInfoContainer