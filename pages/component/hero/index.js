

import Image from "next/image"


const HeroArea = ()=>{
return (
<>
<div className="flex w-full h-96 pt-20 relative">
        <div className=" "><Image src="/Rectangle 61.png" alt="dgt" width="1440px" height="305px"/></div>
        <div className="absolute  z-50 w-full pt-52">
        <div className=" mx-48 my-8">
            <div className=" w-full  border bg-white shadow-md rounded-md ">
                <div className="flex w-full px-4 py-6 border-b justify-between">
                    <div>Buy</div>
                    <div>Rent</div>
                    <div>Pg/Co-living</div>
                    <div>Commercial</div>
                    <div>Coworking</div>
                    <div>Project</div>
                    <div>Dealers</div>
                </div>
                 <div  className="flex justify-between ">
                   <div className="border-r align-center space-x-2 items-center text-center justify-center flex px-4 ">
                       <div className=" "> All Residential</div>
                       <div >img</div>
                   </div>
                   <div className="flex space-x-2 align-center py-6 " >
                       <div><img src=""/>img</div>
                       <div>search city</div>
                   </div>
                   <div className="flex mr-4 space-x-2">
                   <div className="flex space-x-2 py-6 align-center ">
                       <div>img</div>
                       <div className="text-blue-500"> Near Me</div>
                   </div>
                   <div className="bg-blue-700 text-white  py-2 my-4 mr-4 rounded-md px-4 cursor-pointer">Search</div> 
                    </div>   
                 </div>
            </div>
        </div>
    </div>
    </div>
</>

)    


}
export default HeroArea