const Tag=(props)=>{
return(
<>
<div className="mx-10 my-4 rounded-md px-4 py-4 align-middle bg-blue-700 w-96 h-14 flex justify-between">
    <div className=" text-white px-">
        <div className="">{props.T}</div>
    </div>
    <div className=""><img src={props.i}/></div>

</div>


</>


)

}
export default Tag