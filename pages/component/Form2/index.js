import Button2 from "../Button2"
import Button3 from "../Button3"

const Form2=(props)=>{
return(
<>
<div className="flex w-1/2 ">
    <div className="bg-green-500 w-2/5 space-y-80 py-10 flex flex-col justify-center items-center  rounded-l-xl">
        <div className="text-center pt-6 text-white text-3xl">{props.H}</div>
        <Button2 >Sign Up</Button2>

    </div>
    <div className="bg-gray-900 w-3/5 rounded-r-xl flex flex-col justify-center align-middle items-center  px-10">
        <div className="text-green-500 text-3xl mt-8 font-semibold">{props.T1}</div>
        <input className="mt-8 px-2 rounded-full py-2" type="text" placeholder="Name"/>
        <input className="mt-8 px-2 rounded-full py-2" type="email" placeholder="Email"/>
        <input className="mt-8 px-2 rounded-full py-2" type="password" placeholder="Password"/>
        <div className="my-14">
        <Button3>Log In</Button3>
        </div>

    </div>
</div>
</>


)


}
export default Form2