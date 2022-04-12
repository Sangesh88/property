const Pholio=(props)=>{
return(
<>
<div className="text-center bg-white border-2 shadow-md mx-14 my-10  w-96">
    <div className="flex justify-center w-full"><img src={props.src} className={`${props.bg} rounded-full mt-4 h-10 w-10 `}/></div>
    <div className="text-3xl font-bold mt-4 text-gray-500">{props.tittle}</div>
    <div className="text-sm mt-4">{props.desp}</div>
    <div className={ ` ${props.bg} w-32 text-white mx-24 my-8 rounded-md py-2 text-sm px-1`}>{props.btn}</div>
</div>



</>



)



}
export default Pholio