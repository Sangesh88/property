const TagCard1=(props)=>{
return(
<>
<div className="mx-24 my-4 rounded-md  align-middle shadow-lg">
    <div className=" w-64 "><img src={props.i} className="rounded-t-md"/></div>
    
    <div className="text-center py-10">
        <div className="text-center ">{props.T}</div>
        <div className="">{props.r}</div>
    </div>
</div>

</>


)


}
export default TagCard1