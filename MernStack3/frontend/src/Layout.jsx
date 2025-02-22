


import { Outlet } from "react-router-dom";
import Top from "./Components/Navbarr";
import Bottom from "./Components/Footerr";


function Layout() {

    return (
      <>
        <Top/>

        <div>
          <Outlet/>
        </div>



        <Bottom/>

      </>
    )
  }
  
  export default Layout