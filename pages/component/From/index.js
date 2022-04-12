import Button2 from "../Button2"

const Signup_Form=()=>{
return(
<>
<div className="w-1/3 border border-red-700 py-8 px-4 ">
    <div className="text-center text-3xl font-semibold text-blue-700">New Registration</div>
    <div className="mt-4 flex flex-col">
<label>First Name</label>
<input type="text" className="border-b "/>
</div>
<div className="mt-4 flex flex-col">
<label> Last Name</label>
<input type="text" className="border-b "/>
</div>
<div className="mt-4 flex flex-col">
<label>Email</label>
<input type="email" className="border-b "/>
</div>
<div className="mt-4 flex flex-col">
<label>Password</label>
<input type="Password" className="border-b "/>
</div>
<div className="mt-8 flex flex-row align-middle items-center    ">

<input type="checkbox" className="border-b "/>
<div className="ml-4">I agree</div>
</div>
<div className="mt-16">
    <Button2>Submit</Button2>
</div>

</div>


</>


)


}
export default Signup_Form