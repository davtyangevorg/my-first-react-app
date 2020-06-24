import phonesApi from './../data/phoneData.js'

const GET_PHONES = 'my-app/phones-reduser/GET-PHONES';
const GET_PHONE = 'my-app/phones-reduser/GET-PHONE';
const CHANGE_BUTTON_TEXT = 'my-app/phones-reduser/CHANGE-BUTTON-TEXT';

const initalState={
    phones:[]
}

const PhonesReduser=(state=initalState,action)=>{
    switch(action.type){
        case GET_PHONES :{
            return{
               ...state,
               phones:phonesApi
            }
        }
        case GET_PHONE :{
            let newPhone=state.phones.filter((el)=>{
                if(el.id==action.phoneId){
                    return el
                }
            })
            return{
                ...state,
                phones:newPhone
            }
        }
        case CHANGE_BUTTON_TEXT :{
            const newPhones=state.phones.map((el)=>{
                if(el.id==action.phoneId){
                    if(el.inCart){
                        el.inCart=false
                    }else{
                        el.inCart=true
                    }
                }
                else if(action.phoneId=='All'){
                    el.inCart=false
                }
                return el
            })
            return{
                ...state,
                phones:newPhones
            }
        }   
        default:{
            return state
        }
    }
}

export const changeThePhoneButtonActionCreator=(productId)=>{
    return{
        type:CHANGE_BUTTON_TEXT,phoneId:productId
    }
}
export const getPhoneActionCreator=(productId)=>{
    return{
        type:GET_PHONE,phoneId:productId
    }
}
export const getPhonesActionCreator=()=>{
    return{
        type:GET_PHONES
    }
}
export default PhonesReduser