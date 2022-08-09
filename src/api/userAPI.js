import { API } from "../config"


export const registerUser = (username, email, password) => {
    const user = {username, email, password}
    console.log(user)
    return fetch(`${API}/register`, {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

//confirm email/user
export const confirmUser = (token) => {
    return fetch(`${API}/confirmuser/${token}`,{
        method:"GET"
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

// forget password
export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`,{
        method: "POST",
        headers: {
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email})
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

// reset password
export const resetPassword = (token,password) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers: {
            Accept: "application/json",
        "Content-Type":"application/json"
        },
        body: JSON.stringify({password})
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

// signin
export const signIn = (email, password) => {
    const user = {email, password}
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}
// authenticate
export const authenticate = (data) => {
    localStorage.setItem('jwt',JSON.stringify(data))
}

// to check if logged in or not
export const isAuthenticated = () => {
    return localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')): false
}

// sign out
export const signOut = (callback) => {
    localStorage.removeItem('jwt')
    callback()
} 

// resend verification
export const resendVerification = (email) => {
    return fetch(`${API}/resendverification`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}