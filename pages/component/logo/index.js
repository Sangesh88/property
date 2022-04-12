import Link from "next/link"

const Logo =()=>{
return (
<>
<Link href="https://www.google.com/">
        <div className="w-10 h-10 border-2 p-1 m-4 justify-center flex items-center cursor-pointer">
            <div className="bg-blue-900  p-1 rounded-md   h-6 w-6"></div>
        </div>
        </Link>
</>


)

} 
export default Logo