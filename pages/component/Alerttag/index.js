const AlertTag=(props)=>{
return(
<>

<div className="bg-blue-200 w-full mx-4 my-4 h-16 text-lg py-4 px-6 text-blue-500 border-blue-500 shadow-md rounded-md">{props.T}
</div>
<div className="bg-red-200 w-full mx-4 my-4 h-16 text-lg py-4 px-6 text-red-500 border-red-500 shadow-md rounded-md">{props.T}</div>
<div className="bg-green-200 w-full mx-4 my-4 h-16 text-lg py-4 px-6 text-green-500 border-green-500 shadow-md rounded-md">{props.T}</div>
<div className="bg-yellow-200 w-full mx-4 my-4 h-16 text-lg py-4 px-6 text-yellow-500 border-yellow-500 shadow-md rounded-md">{props.T}</div>


</>


)

}
export default AlertTag 