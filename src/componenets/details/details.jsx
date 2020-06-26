import React, { useEffect } from 'react'
import style from './details.module.css'
import img1 from './../../img/phonesImg/product-1.png'
import { Link } from 'react-router-dom'
const Details=(props)=>{
    let productId=props.match.params.id
    useEffect(()=>{
        props.getProduct(productId)
    },[1])
    let inner
    let product
    const productInfo='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, porro suscipit nesciunt voluptates voluptate placeat dicta! Molestiae corrupti, deleniti, quis libero at ut dignissimos repudiandae veniam aliquam cumque vitae sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima quam reprehenderit ratione porro dignissimos modi expedita. Temporibus aspernatur odit quisquam asperiores aliquam minus dolor a praesentium. Temporibus, corrupti aut!console.llorem;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime officiis architecto dignissimos temporibus soluta pariatur nemo neque odio suscipit, consectetur non voluptates. Ipsum illum tempora maiores accusamus consecteturlo Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    if(props.product.length==0){
        inner=<div>No Product</div> 
    }else{
        product= props.product[0]
        let addOrRemoveCart=()=>{
            (product.inCart) ? props.removeInCart(product.id,'phone') : props.addToCart(product,product.id,'phone')
        }
        let addOrRemoveText=(product.inCart) ? 'Remove In Cart' : 'Add To Cart'
        inner=<div className={style.product}>
        <div className={style.product__title}>{product.title}</div>
        <div className={style.product__inner}>
            <img src={product.img}></img>
            <div className={style.product__box}>
                <div className={style.product__box__title__made}>Made By : {product.company}</div>
                <div className={style.product__box__title__price}>Price : ${product.price}</div>
                <div className={style.product__box__title}>Some Info About Product :</div>
                <div className={style.product__box__title__text}>{productInfo}</div>
                <div>
                    <Link to={'/phones'}><button className={style.product__box__btn__back}>Back To Products</button></Link>
                    <button onClick={addOrRemoveCart} className={style.product__box__btn__add}>{addOrRemoveText}</button>
                </div>
            </div>
        </div>
    </div>
    }

    
    
    return(
        <div>
            {inner}
        </div>
        
    )
}

export default Details