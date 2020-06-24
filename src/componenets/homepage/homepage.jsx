import React from 'react'
import homepageImg from './../../img/homepage.png'
import style from './homepage.module.css'
import {useSpring,animated} from 'react-spring'
import { useState } from 'react'
const Homepage=(props)=>{
    const [editeMode,setEditMode]=useState(false)
    
    const learnMore=()=>{
        (!editeMode) ? setEditMode(true) : setEditMode(false)
    }

    return(
        <div className={style.homepage}>
            <div className={style.homepage__inner}>
                <div className={style.homepage__title}>
                    Online Shoping
                </div>
                <div className={style.homepage__text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Suscipit minus nam quasi quaerat placeat sequi aperiam eum obcaecati laboriosam voluptatum,
                      fugit laborum enim repudiandae tenetur libero iusto consequuntur reiciendis iste.
                </div>
                <button onClick={learnMore}  className={style.homepage__btn}>Learn More</button>
            </div>
            <div className={style.homepage__img}>
                <img alt='' src={homepageImg}></img>
            </div>
            <Popup editeModeP={editeMode} learnMoreF={learnMore}/>
        </div>
    )
}

const Popup=(props)=>{
    const fade= useSpring({
        transform:(props.editeModeP) ? 'scale(1)' : 'scale(0)'
    })
    const fadeBtn=useSpring({
         display: (props.editeModeP) ? 'block' : 'none',
    })
    const popupText=<div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint illum possimus quasi vitae consectetur repudiandae ea ab perspiciatis ipsam. Beatae quis perspiciatis sed a mollitia tempora nemo aspernatur repudiandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et atque cumque temporibus itaque modi veniam id dignissimos asperiores, numquam, porro dicta fugiat non quo deserunt sapiente natus eaque dolore rem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequatur tenetur voluptatem, minus quos accusantium, quas sed aut dolor magni
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas commodi id nobis quis voluptates officia enim officiis voluptas. Vel excepturi doloremque numquam quam culpa reprehenderit et accusantium asperiores enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga, aspernatur corporis veritatis harum rem praesentium dolorum recusandae reprehenderit consequuntur eos laborum. Quo corrupti dicta dolores, error fugiat similique sint.lore provident ullam aspernatur, expedita sint vero voluptatum? Enim, maiores velit?
    </div>
    const popup= <div>
                    <animated.div style={fade} className={style.popup}><button onClick={props.learnMoreF} >&times;</button>{popupText}</animated.div>
                    <animated.div style={fadeBtn} onClick={props.learnMoreF} className={style.overlay}></animated.div>
                </div> 
    return(
        <div >
            {popup}
        </div>
    )
}

export default Homepage