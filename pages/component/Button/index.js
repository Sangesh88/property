import Link from "next/link"

const Button =(props)=>{
return (
<>
{/* <Link href="https://www.google.com/"><div className="bg-white text-blue-700 m-4 py-1 rounded-md px-4 cursor-pointer">login</div></Link> */}

<div className="bg-purple-700 text-white px-6 py-2 w-32 text-center rounded-md m-4" onClick="onClick">{props.children}</div>
</>

)

}
export default Button