import React, { useEffect } from 'react'
import style from './phones.module.css'
import { Link } from 'react-router-dom'

const Phones=(props)=>{
    
    useEffect(()=>{
        props.getPhones()
    },[1])
    let CartBtnText;


    let phones=props.phones.map((el)=>{
        CartBtnText=(el.inCart) ? 'remove' : <i class="fa fa-cart-plus"></i>
        let addOrRemoveProduct=(addedProduct,productId,productType)=>{
            (el.inCart) ? props.removeInCart(productId,productType) : props.addToCart(addedProduct,productId,productType)
        }                                   
        return(
            <div className={style.phone} key={el.id}>
                <div className={style.phone__top}>
                    <Link to={`/details/${el.id}`}><img src={el.img}></img></Link>
                    <button onClick={()=>{addOrRemoveProduct(el,el.id,'phone')}} className={style.phone__btn}>{CartBtnText}</button>
                </div>
                <div className={style.phone__title}>
                    <div>{el.title}</div>
                    <span><i>{el.price} $</i></span>
                </div>
            </div>
        )
    })
    return(
        <div className={style.phonesPage}>
            <div className={style.productsTitle}>Our products</div>
            <div className={style.phones}>
                {phones}
            </div>
        </div>
    )
}

export default Phones