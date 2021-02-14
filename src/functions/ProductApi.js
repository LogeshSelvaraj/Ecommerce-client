
import axios from "axios"

export const createProduct=async (token,payload)=>{

 
    return await axios.post(
         `${process.env.REACT_APP_BACKEND_API_DOMAIN}/product`,
         payload,
         { headers:{
             token,
        } })

}

export const getProducts=async(limit)=>{
    return await axios.get(
        `${process.env.REACT_APP_BACKEND_API_DOMAIN}/products-newarrivals/${limit}`
       )
}

export const remove=async(productId)=>{
    return await axios.delete(
        `${process.env.REACT_APP_BACKEND_API_DOMAIN}/product/${productId}`
    )
}

export const update=async(token,payload)=>{
    return await axios.put(  `${process.env.REACT_APP_BACKEND_API_DOMAIN}/product/`,payload,{
        headers:{token}
    })
}

export const getProduct=async(productId)=>{
    return await axios.get(`${process.env.REACT_APP_BACKEND_API_DOMAIN}/product/${productId}`)
}
