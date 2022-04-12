import Button2 from "../Button2"
import Button3 from "../Button3"

const Form1=(props)=>{
return(
<>
<div className="  w-1/2 mx-10 flex my-10">
<div className=" w-2/5 flex flex-col bg-red-400 text-white rounded-l-xl justify-center text-center align-middle items-centers-  ">
    <div className="text-2xl">{props.T1}</div>
    <div className="">{props.T2}</div>
</div>
<div className="p-6 rounded-r-xl bg-red-50 w-3/5">
        <div className="text-2xl mb-10">{props.T3}</div>
        <div className="flex space-x-4 w-full">
            <div className="flex flex-col w-1/2">
             <label className="my-2">{props.T4}</label>
             <input className=" bg-white"/>
             </div>
             <div className="flex flex-col w-1/2">
             <label className="my-2 ">{props.T5}</label>
             <input className="mb-4 bg-white"/>
             </div>
         </div>
         <div className="flex flex-col w-1/2">
             <label className="my-2 ">{props.T6}</label>
             <input className="mb-4 bg-white"/>
             </div>
             <div className="flex flex-col w-full">
             <label className="my-2 ">{props.T7}</label>
             <input className="mb-4 bg-white"/>
             </div>
             <div className="flex flex-col w-1/2">
             <label className="my-2 ">{props.T8}</label>
             <input className="mb-4 bg-white"/>
             </div>

    <div className="flex justify-between my-4">
        <Button3 className="bg-white">Back</Button3>
        <Button2>Next</Button2>

    </div>
</div>


</div>

</>


)



}
export default Form1