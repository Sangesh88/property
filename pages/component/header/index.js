import Link from "next/link"
import Logo from "../logo"
import Navbar from "../navigation"
import Button from "../Button"
const Header =()=>{

    return(

        <>
         <div className="flex justify-between items-center bg-blue-700 fixed w-full z-50"> 
       <Logo/>
       <Navbar/>
       <Button/>
    </div>
        
        </>
    ) 
}
export default Header