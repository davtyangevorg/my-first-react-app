import React from 'react'
import LoadingSvg from './../../img/loading.svg'
import VideoGames from './videoGames.jsx'
import { getProductsThunkCreator, changeIsFeatchingActionCreator,changeTheGameButtonActionCreator } from '../../redux/videoGames-reduser.js'
import { addToCartActionCreator,removeInCartActionCreator } from '../../redux/cart-reduser.js'
import {useEffect} from 'react'
import style from './videoGames.module.css'
const { connect } = require("react-redux")

const VideoGamesHOC=(props)=>{
    
    useEffect(()=>{
        props.getProducts()
    },[])


    if(props.products.length>0){
        props.changeFeatching()
    }

    return(
            (props.isFeatching) ? <img className={style.loading} src={LoadingSvg}></img> : <VideoGames {...props} />
    )
}



const mapStateToProps=(state)=>{
    return{
        products:state.videoGamesReduser.products,
        isFeatching:state.videoGamesReduser.isFeatching
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getProducts:()=>{
            dispatch(getProductsThunkCreator())
        },
        changeFeatching:()=>{
            dispatch(changeIsFeatchingActionCreator())
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

const VideoGamesContainer=connect(mapStateToProps,mapDispatchToProps)(VideoGamesHOC)

export default VideoGamesContainer