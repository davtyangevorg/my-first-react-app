import Details from './details.jsx'
import { connect } from 'react-redux'
import { getPhoneActionCreator,changeThePhoneButtonActionCreator } from '../../redux/phones-reduser.js'
import { addToCartActionCreator,removeInCartActionCreator } from '../../redux/cart-reduser.js'

let mapStateToProps=(state)=>{
    return{
        product:state.phoneReduser.phones
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        getProduct:(id)=>{
            dispatch(getPhoneActionCreator(id))
        },
        addToCart:(addedProduct,productId,productType)=>{
            dispatch(addToCartActionCreator(addedProduct,productType))
            dispatch(changeThePhoneButtonActionCreator(productId))
        },
        removeInCart:(productId,productType)=>{
            dispatch(removeInCartActionCreator(productId,productType))
            dispatch(changeThePhoneButtonActionCreator(productId))
        }
    }
}

let DetailsContainer=connect(mapStateToProps,mapDispatchToProps)(Details)

export default DetailsContainer