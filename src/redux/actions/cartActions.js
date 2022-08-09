import axios from "axios"
import { API } from "../../config"
import { ADD_ITEMS_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants"


export const addItemToCart =  (id, quantity) => async (dispatch, getState) => {
    let {data} = await axios.get(`${API}/productdetails/${id}`)
    
    dispatch({
        type: ADD_ITEMS_TO_CART,
        payload: {
            product: data._id,
            name: data.product_name,
            price: data.product_price,
            image: data.product_image,
            stock: data.count_in_stock,
            quantity
        }
    })
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
}

export const removeItemFromCart = (id) => async(dispatch, getState) => {
    let {data} = await axios.get(`${API}/productdetails/${id}`)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            product: data._id
        }
    })
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
}

export const saveShippingInfo = (shipping_info) => async (dispatch, getState) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: shipping_info
    })
    localStorage.setItem('shipping_info',JSON.stringify(shipping_info))
}