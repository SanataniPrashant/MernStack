import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav.jsx";
import Footer from "./components/Footer";
const Layout=()=>{
    return(
        <>
          <TopNav />
          <div id="wrapper">
           <Outlet />
           </div>
           <Footer/>
        </>
    )
}

export default Layout;