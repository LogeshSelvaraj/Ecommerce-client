import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar';
import CreateProducts from './CreateProducts';
import MyProducts from './MyProducts'
import "./Product.css"


const Product = () => {
    return (
        <div className="container-fluid ">
        <div className="row">
          <Sidebar />
          <div className="col-lg-10 col-md-9">
            <CreateProducts/>
            <MyProducts/>
           </div>
         </div>
       </div>
    )
}

export default Product
