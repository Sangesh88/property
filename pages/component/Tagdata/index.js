const Tagdata=(props)=>{
 return(
<>
<div>
    <div className="contaner w-60 mx-24 text-center relative` shadow-md my-14">
        <div className="relative">
            <div><img src={props.i} className="w-80 h-40" /></div>
            <div className="absolute top-0 left-0 bg-blue-700 text-white p-1 text-xs z-10">Coming Soon</div>
        </div>
        <div className="text-xl my-2">{props.T}</div>
        <div className="">
            <div className="flex justify-between text-xs mx-2">
            <div>{props.d1}</div>
            <div>{props.d2}</div>
            </div>
            <div className="flex justify-between text-xs my-2 mx-2">
            <div>{props.d3}</div>
            <div>{props.d4}</div>
            </div>
            <div className="flex space-x-4 mx-4 text-center text-red-700 my-4 py-4 align-middle items-center justify-center">
            <div>Read</div>
            <div><img src={props.imgr} className="bg-red-700 rounded-full "/></div>
            </div> 
        </div>
    </div>
</div>
</>

 )   

 }
export default Tagdata