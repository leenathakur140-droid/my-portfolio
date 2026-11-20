
import { NavLink } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import  "./navbar.css"
function Navbar(){
useGSAP(()=>{

gsap.from("#li span",{
  opacity:0,
  scale:0,
   stagger:0.5,
})


})


return(
    <>

    
    <ul>

        <li id="li"><span style={{color:"white"}}>L</span> <span  style={{color:"white"}}>E</span> <span style={{color:"white"}}>E</span> <span  style={{color:"white"}}>N</span> <span style={{color:"white"}}>A</span> &nbsp;  <span style={{color:"purple"}}>T</span> <span style={{color:"purple"}}>H</span> <span style={{color:"purple"}}>A</span> <span style={{color:"purple"}}>K</span> <span style={{color:"purple"}}>U</span> <span style={{color:"purple"}}>R</span> </li>
 <li><NavLink to="/">HOME</NavLink> </li>
 <li><NavLink to="/about">ABOUT</NavLink></li>
 <li><NavLink to="/contact">CONTACT</NavLink></li>

    </ul>
    
    </>
)




}

export default Navbar