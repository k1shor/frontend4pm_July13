import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../constants/orderConstants"

export const placeOrder = (order) => (dispatch, getState) => {
    dispatch({
        type: CREATE_ORDER_REQUEST
    })
    try{
        // place order in backend
        dispatch({
            type: CREATE_ORDER_SUCCESS
        })
    }
    catch{
        dispatch({
            type: CREATE_ORDER_FAIL
        })
    }    
}