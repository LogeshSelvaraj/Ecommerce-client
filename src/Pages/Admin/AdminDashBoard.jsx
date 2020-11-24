import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AdminDashBoard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-5">Im Admin dashboard</div>
      </div>
    </div>
  );
};

export default AdminDashBoard