const Section15 =(props)=>{
return (
<>
<div className="bg-cyan-700 text-white border-cyan-900 relative rounded-md border-2 py-10 mx-24 w-1/3 my-10 shadow-md">
                      <div className="text-lg px-8 font-semibold">{props.heading}</div>
                     <div className=" px-8 mt-2 text-sm">{props.p}</div>
                     <div className="font-semibold px-8 mt-4">{props.price}</div>
                     <div className="flex"> 
                     <div className="absolute w-full flex justify-between  px-12 top-0">
                     <div className="h-14 w-14 bg-slate-600 rounded-full border-white border- border-4 -mt-8 align-middle  flex justify-center items-center text-center text-white ">1</div>
                     <div className="h-14 w-14 bg-slate-600 rounded-full border-4 border-white -mt-8 align-middle flex justify-center items-center text-center text-white">2</div>
                     </div>
                     </div>
                     </div>

</>

)

}
export default Section15