

import { Outlet } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
const Layout = ()=>{
    return(
        <>
        <TopNav/>

        <section>
            <Outlet/>
        </section>

        <Footer/>
        </>
    )
}
export default Layout;