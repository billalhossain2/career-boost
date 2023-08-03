import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  );
};

export default Root;
