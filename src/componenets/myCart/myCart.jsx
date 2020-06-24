import React, { useState } from 'react'
import style from './myCart.module.css'
import { Link } from 'react-router-dom'
const MyCart=(props)=>{
    const cartMessage=(props.phones.length==0 && props.games.length==0) ? 'Your Cart Is Empty' : 'Your Cart'
    let total=0
    const phoneProductsRows=props.phones.map((el)=>{
        total+=el.total
        return(
            <tr className={style.bodyTr} key={el.id}>  
                <td><Link to={`/details/${el.id}`} ><img src={el.img}></img></Link></td>
                <td>{el.title}</td>
                <td>${el.price}</td>
                <td className={style.quantity}>
                    <button onClick={()=>{props.changeProductCount(el.id,'-')}}>-</button>
                    <span>{el.count}</span>
                    <button onClick={()=>{props.changeProductCount(el.id,'+')}}>+</button>
                </td>
                <td onClick={()=>{props.removeInCart(el.id,'phone')}} className={style.deleteBtn}><i class="fa fa-trash"></i></td>
                <td>${el.total}</td>
            </tr>
        )
    })
    const gameProductsRows=props.games.map((el)=>{
        total+=el.metacritic
        return(
            <tr className={style.bodyTr} key={el.id}>  
                <td><Link to={`/details/${el.id}`} ><img src={el.background_image}></img></Link></td>
                <td>{el.name}</td>
                <td>${el.metacritic}</td>
                <td className={style.quantity}>
                    <span>1</span>
                </td>
                <td onClick={()=>{props.removeInCart(el.id,'game')}} className={style.deleteBtn}><i class="fa fa-trash"></i></td>
                <td>${el.metacritic}</td>
            </tr>
        )
    })
    let totalCartEl=(props.phones.length==0 && props.games.length==0) ? null : <div className={style.totalCart}>
                                                            <button onClick={()=>{props.removeInCartAll('All')}}>Clear Cart</button>
                                                            <div>Total : <span>${total}</span></div>
                                                        </div>
    return(
        <div>
            <div className={style.cart__title}>{cartMessage}</div>
            <div className={style.phones__cart}>
                <div>Phones</div>
                <table>
                        <tr className={style.headerTr}>
                                <td>Products</td>
                                <td>Name Of Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Remove</td>
                                <td>Total</td>
                        </tr    >
                        {phoneProductsRows}
                </table>
            </div>
            <div className={style.cart__line}></div>
            <div className={style.videoGames__cart}>
                <div>Video Games</div>
                <table>
                        <tr className={style.headerTr}>
                                <td>Products</td>
                                <td>Name Of Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Remove</td>
                                <td>Total</td>
                        </tr    >
                        {gameProductsRows}
                </table>
            </div>
            {totalCartEl}
        </div>
    )
}

export default MyCart