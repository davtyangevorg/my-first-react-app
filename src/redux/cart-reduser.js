const CHANGE_PRODUCT_COUNT = 'my-app/cart-reduser/CHANGE-PRODUCT-COUNT';
const ADD_TO_CART = 'my-app/cart-reduser/ADD-TO-CART';
const REMOVE_IN_CART_ALL = 'my-app/cart-reduser/REMOVE-IN-CART-ALL';
const REMOVE_IN_CART = 'my-app/cart-reduser/REMOVE-IN-CART';

const initalState={
    phones:[],
    games:[]
}

const cartReduser=(state=initalState,action)=>{
    switch(action.type){
        case ADD_TO_CART :{
            if(action.productType=='phone'){
                return{
                    ...state,
                    phones:[...state.phones,action.newProduct]
                }
            }else{
                return{
                    ...state,
                    games:[...state.games,action.newProduct]
                }
            }
            
        }
        
        case REMOVE_IN_CART :{
            if(action.productType=='phone'){
                let phone=state.phones.filter((el)=>{
                    return el.id!==action.productId
                })
                return{
                    ...state,
                    phones:phone
                }  
            }else{
                let game=state.games.filter((el)=>{
                    return el.id!==action.productId
                })
                return{
                    ...state,
                    games:game
                }  
            }
        }
        case REMOVE_IN_CART_ALL: {
            return{
                ...state,
                phones:[],
                games:[]
            }
        }
        case CHANGE_PRODUCT_COUNT :{
            let newProduct=state.phones.map((el)=>{
                if(el.id==action.productId){
                    if(action.symbol=='+'){
                        if(el.count==10){
                            return el
                        }else{
                            el.count+=1
                            el.total+=el.price
                        }
                    }else{
                        if(el.count==1){
                            return el
                        }else{
                            el.count-=1
                            el.total-=el.price
                        }
                    }
                }
                return el
            })
            return{
                ...state,
                phones:newProduct
            }
        }
        default:{
            return state
        }
    }
}
export const changeProductCountActionCreator=(productId,symbol)=>{
    return{
        type:CHANGE_PRODUCT_COUNT,productId:productId,symbol:symbol
    }
}
export const addToCartActionCreator=(addedProduct,productType)=>{
    return{
        type:ADD_TO_CART,newProduct:addedProduct,productType:productType
    }
}
export const removeInCartAllActionCreator=()=>{
    return{
        type:REMOVE_IN_CART_ALL
    }
}
export const removeInCartActionCreator=(productId,productType)=>{
    return{
        type:REMOVE_IN_CART,productId:productId,productType:productType
    }
}

export default cartReduser