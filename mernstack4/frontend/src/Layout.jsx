import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import TopMenu from "./Components/TopNav"
const Layout=()=>{
    return(
        <>
          <TopMenu/>
           
             <Outlet />

          <Footer/>
        
        </>
    )
}

export default Layout;