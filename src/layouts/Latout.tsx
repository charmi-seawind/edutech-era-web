import Footer from "../shared/Footer";;
import Header from "../shared/Header";
import * as React from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="relative">
    <Header/>
      <Outlet />
   <Footer/>
    </div>
  );
};

export default Layout;
