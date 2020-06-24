import React from 'react'
import style from './videoGames.module.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const VideoGames=(props)=>{

    let CartBtnText;

    let products=props.products.map((el)=>{
        CartBtnText=(el.tba) ? 'Remove In Cart' : 'Add To Cart'
        let addOrRemoveProduct=(addedProduct,productId,productType)=>{
            (el.tba) ? props.removeInCart(productId,productType) : props.addToCart(addedProduct,productId,productType)
        }  
        return(
            <div className={style.game} key={el.id}>
                <Link to={`/gameInfo/${el.id}`}><img  className={style.game__img} src={el.background_image}></img></Link>
                <div className={style.game__name}>{el.name}</div>
                <div className={style.other}>
                    <div className={style.game__platform}>{el.parent_platforms[0||1].platform.name}</div>
                    <div className={style.game__price}><i>$ {el.metacritic}</i></div>
                </div>
                <button onClick={()=>{addOrRemoveProduct(el,el.id,'game')}} className={style.game__btn}>{CartBtnText}</button>
            </div>
        )
    })

    
    return(
        <div className={style.videoGames}>
            <div className={style.products__item}>Our Products</div>
            <div className={style.games}>{products}</div>
        </div>
    )
}
export default VideoGames