import { API } from "../config"

export const getCategories = () => {
    return fetch(`${API}/viewCategories`, {
        method: "GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addCategory = (category_name, token) => {
    return fetch(`${API}/addcategory`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getCategory = (id) => {
    return fetch(`${API}/findcategory/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// update category
export const updateCategory = (id, category_name, token) => {
    return fetch(`${API}/updatecategory/${id}`,{
        method: "PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
// delete category
export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`,{
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}