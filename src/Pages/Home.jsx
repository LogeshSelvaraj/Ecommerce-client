import React,{useState,useEffect} from "react";
import ProductCard from "../Components/Product/ProductCard";
import {getProducts} from '../functions/ProductApi'

const Home = () => {
  const [products,setProducts]=useState()

  useEffect(()=>{
    loadNewArraivals()
  },[])

  const loadNewArraivals=()=>{
    getProducts(4).then((res)=>{
      setProducts(res.data)
    }).catch((err)=>console.log(err))
  }

  return (
  <>  <h1 className="heading-1 text-center">New Arrivals</h1>
    <div className="row w-100 products">
      {products&&products.map(product=><ProductCard key={product._id} product={product}/>)}
    </div> </>
  );
};

export default Home;
