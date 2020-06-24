import React from 'react'
import logoImg from './../../img/logo.png'
import style from './header.module.css'
import { NavLink,Link } from 'react-router-dom'



const Header=(props)=>{
    let productsCount   
    productsCount=(props.products.phones.length>0 || props.products.games.length>0) && (productsCount=props.products.phones.length+props.products.games.length)
    

    return(
        <div className={style.headerInner}>
            <div className={style.logo}>
                <Link to='/'><img alt='' src={logoImg}></img></Link>
            </div>
            <div className={style.products}>
                <NavLink className={style.link} exact activeClassName={style.active} to='/'>Home</NavLink>
                <NavLink className={style.link} activeClassName={style.active} to='/phones'>Phones</NavLink>
                <NavLink className={style.link} activeClassName={style.active} to='/videogames'>Video Games</NavLink>
            </div>
            <div className={style.cart}>
                <NavLink className={style.cartLink} to='/cart'>
                    <i class="fa fa-shopping-cart"></i>
                    <div>My Cart</div>
                    {(props.products.phones.length==0 && props.products.games.length==0) ? null : <span>{productsCount}</span>}
                </NavLink>
            </div>
        </div>
    )
}

export default Header