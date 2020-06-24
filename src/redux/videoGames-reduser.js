import axios from 'axios'
const GET_PRODUCTS='my-app/videoGames-reduser/GET_PRODUCTS'
const GET_PRODUCT='my-app/videoGames-reduser/GET_PRODUCT'
const CHANGE_BUTTON_TEXT = 'my-app/videoGames-reduser/CHANGE-BUTTON-TEXT';
const CHANGE_FEATCHING='my-app/videoGames-reduser/CHANGE_FEATCHING'
const initalState={
    products:[],
    isFeatching:true
}

const videoGames=(state=initalState,action)=>{
    switch(action.type){
        case GET_PRODUCTS:{
            return{
                ...state,
                products:action.products
            }
        }
        case GET_PRODUCT:{
            let product=state.products.filter((el)=>{
                if(el.id==action.productId){
                    return el
                }
            })
            return{
                ...state,
                products:product
            }
        }
        case CHANGE_FEATCHING:{
            return{
                ...state,
                isFeatching:false
            }
        }
        case CHANGE_BUTTON_TEXT :{
            const newProducts=state.products.map((el)=>{
                if(el.id==action.gameId){
                    if(el.tba){
                        el.tba=false
                    }else{
                        el.tba=true
                    }
                }
                else if(action.gameId=='All'){
                    el.tba=false
                }
                return el
            })
            return{
                ...state,
                products:newProducts
            }
        } 
        default:{
            return state
        }
    }
}
export const getProductActionCreator=(productId)=>{
    return{
        type:GET_PRODUCT,productId:productId
    }
}
export const getProductsActionCreator=(products)=>{
    return{
        type:GET_PRODUCTS,products:products
    }
}
export const changeIsFeatchingActionCreator=()=>{
    return{
        type:CHANGE_FEATCHING
    }
}
export const changeTheGameButtonActionCreator=(productId)=>{
    return{
        type:CHANGE_BUTTON_TEXT,gameId:productId
    }
}
export const getProductsThunkCreator=()=>{
    return(
        (dispatch)=>{
            axios.get(`https://api.rawg.io/api/games?page_size=8`).then(res=>{
                dispatch(getProductsActionCreator(res.data.results))
            })
        }
    )
}

export default videoGames