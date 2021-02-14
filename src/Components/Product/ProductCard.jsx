import React,{useState,useEffect} from 'react'
import "./ProductCard.css"
import { useSelector } from "react-redux";


const ProductCard = ({product}) => {
    const [floatables,setfloatables]=useState(false)
    const {user} = useSelector(state => ({...state}))

    useEffect(()=>{
        if(user&&user.role==="admin"){
            setfloatables(true)
            console.log(!floatables)
        }
        console.log(!floatables)
    },[user])
 
    return (
    <div className="col-md-3 col-sm-6 my-4">
        <div className="product-grid">
            <div className="product-image">
                <a href="#" className="image">
                    <img className="pic-1 pt-4" src={product.images[0]?product.images[0].url : "" } alt="product"
                    />
                </a>
      
           { !floatables && <ul className="product-links">
                    <li><a href="#"><i className="fa fa-shopping-bag"></i> Add to cart</a></li>
                    <li><a href="#"><i className="fa fa-search"></i> Quick View</a></li>
                </ul>}
            </div>
            <div className="product-content">
               <h3 className="title">{product.title}</h3>
                <div className="price" style={{cursor:"pointer"}}>Rs.{product.price}</div>
            </div>
        </div>
    </div>

    )
}

export default ProductCard
