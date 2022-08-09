import { API } from "../config"

export const getProducts = (sortBy, order, limit) => {
    // return fetch(`${API}/viewproducts?sortBy='${sortBy}'&order=${order}&limit=${limit}`,{
    return fetch(`${API}/viewproducts?sortBy=${sortBy}&order=${order}&limit=${limit}`,{
        method: "GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const productDetails = (id) => {
    return fetch(`${API}/productdetails/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

export const addProduct = (product, token) => {
    // console.log(product)
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            // "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body:product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const deleteProduct = (id, token) => {
    return fetch(`${API}/deleteproduct/${id}`,{
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const editProduct = (id, product, token) => {
    return fetch(`${API}/updateproduct/${id}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getFilteredProducts = (sortBy, order, limit, skip, filter) => {
    return fetch(`${API}/filteredProduct?sortBy=${sortBy}&order=${order}&limit=${limit}&skip=${skip}`, {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(filter)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// get related products
export const getRelatedProducts = id => {
    return fetch(`${API}/relatedProducts/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}