const TagCard2=(props)=>{
return(
<>
<div className="relative flex w-80 align-middle items-center h-40 mx-20 my-4 justify-between  shadow-lg bg-white border-4 rounded-md">
    <div className="w-14 text-blue-600 px-6">{props.T}</div>
    <div className="rounded-full text-white absolute -mr-10 right-0 -mt-40  h-20 w-20 text-center align-middle items-center flex justify-center bg-blue-600">{props.n}</div>
</div>

</>


) 

}
export default TagCard2