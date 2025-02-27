import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footerr = ()=>{
    return(
        <>
        <section className="r">
            <div className="row">
                <ul>
                    <li><FaGoogle  style={{color: 'orange',height:"50px",width :"50px"}}/></li>
                    <li><FaFacebook  style={{color: 'orange',height:"50px",width :"50px"}}/></li>
                    <li><FaInstagramSquare style={{color: 'orange',height:"50px",width :"50px"}} /></li>
                    <li><FaLinkedin style={{color: 'orange',height:"50px",width :"50px"}} /></li>
                </ul>
            </div>
            <h1>© 2020 Copyright: MDBootstrap.com</h1>
        </section>
        </>
    )
}
export default Footerr;