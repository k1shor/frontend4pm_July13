import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./constants/orderConstants";

const orderReducer = (state={}, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:

        case CREATE_ORDER_SUCCESS:

        case CREATE_ORDER_FAIL:

        default: return state
    }
}

export default orderReducer