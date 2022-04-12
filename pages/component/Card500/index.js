const Card500=(props)=>{
return(
<>
<div className=" w-80 bg-white border-2 shadow-md rounded-md mx-6 my-6">
    <div className=""><img src="img1.jpg"/></div>
    <div className="px-4 py-4 ">
        <div className="text-gray-700 text-xl font-bold">{props.H}</div>
        <div className="text-sm text-gray-600 mt-2">{props.P}</div>
        <div className="text-xs text-gray-500 mt-2">{props.F}</div>
    </div>
</div>

</>


)


}
export default Card500