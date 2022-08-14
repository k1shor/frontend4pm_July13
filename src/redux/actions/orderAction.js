import axios from "axios"
import { API } from "../../config"
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../constants/orderConstants"

export const placeOrder = (order, token) =>async (dispatch, getState) => {
    
    try{
        dispatch({
            type: CREATE_ORDER_REQUEST,
        })
        // place order in backend
        const config ={
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }

        const {data} = await axios.post(`${API}/processpayment`, order, config)

        dispatch({
            type: CREATE_ORDER_SUCCESS, 
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:error.error
        })
    }    
}