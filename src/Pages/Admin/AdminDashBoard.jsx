import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import { Switch, Route } from 'react-router-dom';
// import Category from './Category/Category'
// import SubCategory from './SubCategory/SubCategory'
// import AdminRoute from '../../Components/Routes/AdminRoute'

const AdminDashBoard = ({history}) => {
  return (
    <div className="container-fluid">
      <div className="row">
      <Sidebar />
        <div className="col-lg-10 col-md-9 d-flex align-items-center flex-column ">
       <h1>Admin homepage</h1>
       {/* <Switch>
      <AdminRoute  path="/admin/category"
       component={Category}/>
        <AdminRoute  path="/admin/subcategory" component={SubCategory}/>
       </Switch> */}
        </div>
      </div>
    </div>

  );
};

export default AdminDashBoard