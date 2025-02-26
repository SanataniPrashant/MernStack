import TopNav from "./Components/TopNav"
import Footer from "./Components/Footer"
import {Outlet} from 'react-router-dom'

const Layout  = ()=>{
    return (
        <>
        <TopNav />
        <section>
            <Outlet/>
        </section>

        <Footer/>
        </>
    )
}
export default Layout