const TagCard=(props)=>{
return (
<>
<div className="flex w-60 align-middle items-center h-12 mx-4 my-4 justify-between px-6 shadow-lg bg-blue-600 rounded-md">
    <div className="w-14 text-white">{props.T}</div>
    <div className="rounded-full text-blue-600 h-8 w-8 text-center align-middle items-center flex justify-center bg-white">{props.n}</div>
</div>


</>


)
    
}
export default TagCard