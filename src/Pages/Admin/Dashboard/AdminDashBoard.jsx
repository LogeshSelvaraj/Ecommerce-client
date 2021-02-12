import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";


const AdminDashBoard = ({history}) => {
  return (
    <div className="container-fluid">
      <div className="row">
      <Sidebar />
        <div className="col-lg-10 col-md-9 d-flex align-items-center flex-column ">
       <h1>Admin homepage</h1>
        </div>
      </div>
    </div>

  );
};

export default AdminDashBoard