import {
    SET_DATA
} from './types'

export default (state, action)=>{

    switch(action.type)
    {
        case SET_DATA:
            return{
                ...state,
                data: action.payload,
                loading: false,
                dataLoaded : true
            }
        default: 
        return state

            
    }

}