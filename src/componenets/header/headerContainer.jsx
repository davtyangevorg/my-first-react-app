import Header from './header.jsx'
import { connect } from 'react-redux'


let mapStateToProps=(state)=>{
    return{
        products:state.cartReduser
    }
}

const HeaderContainer=connect(mapStateToProps)(Header)

export default HeaderContainer