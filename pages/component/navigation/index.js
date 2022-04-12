
import Link from "next/link"

const Navbar =()=>{
return (

    <>
     <div className="flex justify-between space-x-8 text-white">
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Buyer</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Tenants</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Owners</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Dealers/Builders</div></Link>
        </div>
    
    </>
)


}
export default Navbar