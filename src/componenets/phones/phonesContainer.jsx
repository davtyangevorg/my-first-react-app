
import Phones from './phones.jsx'
import {getPhonesActionCreator,changeThePhoneButtonActionCreator} from './../../redux/phones-reduser.js'
import { addToCartActionCreator,removeInCartActionCreator } from '../../redux/cart-reduser.js'
const { connect } = require("react-redux")


let mapStateToProps=(state)=>{
    return{
        phones:state.phoneReduser.phones,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        getPhones:()=>{
            dispatch(getPhonesActionCreator())
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

const PhonesContainer=connect(mapStateToProps,mapDispatchToProps)(Phones)

export default PhonesContainer