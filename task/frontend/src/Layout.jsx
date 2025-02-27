import TopNav from "./Components/TopNav"
import Footerr from "./Components/Footerr"
import { Outlet } from "react-router-dom"
const Layout = ()=>{
    return (
        <>
        <TopNav/>
        <section>
            <Outlet/>
        </section>
        <Footerr/>
        </>
    )
}

export default Layout