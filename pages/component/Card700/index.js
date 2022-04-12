const Card700=(props)=>{
return(

<>

<div className=" w-80 h-64 shadow-md rounded-md mx-6 my-6">
<div className=" relative">
        <div className="h-64 w-80"><img src="img3.jpg"/></div>
        <div className="bg-red-600 absolute top-0 bottom-0 right-0 left-0 hover:opacity-40 opacity-50"></div>
        <div className="absolute top-0 mt-8 px-4 text-white"> 
            <div className="text-xl font-bold  ">{props.H}</div>
            <div className="text-sm mt-2  ">{props.P}</div>
            <div className="text-xs mt-2 ">{props.F}</div>
        </div>

    </div>
   
</div>
</>



)



}
export default Card700