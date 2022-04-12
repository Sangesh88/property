const Tagcard10=(props)=>{
return(

<>
<div className="  py-4 rounded-md flex ml-10 my-10 bg-blue-500">
<div><img src={props.i} className=" ml-4 h-6  w-6"/> </div>
<div className="text-white text-center mx-4 w-32">{props.T}</div>
<div className="align-middle flex justify-center items-center"><img src={props.img}className="mr-4 "/></div>


</div>

</>

)


}
export default Tagcard10