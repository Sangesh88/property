export default function Student(){
    return (

        <div className="bg-gradient-to-r from-white to-blue-50">
          <div className="flex justify-between items-center border">
      <div><img src="logo1.jpg" height="70px" width="70px"/></div>
      <div className="flex text-blue-700 items-center space-x-4 text-xs">
        <div>09:00 AM  Friday,  7 Aug 2022</div>
        <div><img src="login.svg" height="30px" width="30px"/></div>
      </div>
    </div>
    <div className="flex"> 
    <div className="bg-blue-700 h-auto w-1/6 rounded-tr-full">
    <div  className=" mr-10 space-y-4 flex flex-col items-center" >
      <div className='bg-white h-14 w-14 rounded-full mt-24'></div>
      <div className="text-white text-xs"> Administration</div>
    </div>
    <div className='text-blue-50 tracking-wider space-y-4 text-sm mt-8'>
                    <div className='bg-blue-800 mx-4 px-4 py-2 rounded-md shadow-md shadow-black'>Dashboard</div>
                    <div className='bg-blue-800 mx-4 px-4 py-2 rounded-md shadow-md shadow-black'>Analytics</div>
                    <div className='bg-blue-800 mx-4 px-4 py-2 rounded-md shadow-md shadow-black'>Finance</div>
                    <div className='bg-blue-800 mx-4 px-4 py-2 rounded-md shadow-md shadow-black'>Registration</div>
                    <div className='bg-blue-800 mx-4 px-4 py-2 rounded-md shadow-md shadow-black'>Student Support</div>
                    <div className='bg-white text-blue-700 mx-4 px-4 py-2 rounded-md font-semibold shadow-md shadow-black'>Teacher Zone`</div>
    </div>
    </div>
    <div className="w-full">
    <div className="flex justify-end mr-14 mt-10">
        <div className="w-52 rounded-md text-blue-700 text-center bg-white border border-blue-100 py-2 px-6">
          <div className="text-sm font-semibold tracking-wider"> Faculty Registered</div>
          <div className="font-bold text-xl">87</div>
          <div className="flex justify-between bg-violet-100 px-2  rounded-lg items-center">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="text-xs tracking-wider">Active</div>
            <div className="font-bold text-sm">75</div>
          </div>
        </div>
    </div>    
        <div className="bg-white ronded-xl py-2 mx-10 my-8 rounded-md border ">
                <div className="bg-blue-700 text-blue-50 text-center font-semibold mx-16 rounded-md mt-8 py-2">Teacher details</div>
                <div className='my-4 mx-16 space-y-4'>
                <div className='border border-blue-700 flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                     <div className='bg-blue-700 w-8 h-20 -mt-2 rounded-b-xl flex justify-center'><img src='/Vector 17.svg ' className='mt-8 w-4 '/></div>
                    <div className='border h-4 w-4 border-blue-700 mx-3 '></div>
                    <div className='rounded-full w-14 h-12 bg-blue-700 mx-4 '></div>
                    <div className='text-blue-700 mx-4 w-32 space-y-1 ' >
                        <div className='font-bold text-xs tracking-wider '>Ramesh kumar</div>
                        <div className='text-yellow-600'>ID:   T09567</div>
                    </div>
                    <div className='text-blue-700 mx-4 space-y-1'> 
                        <div className='text-xs'>+91 9999999999</div>
                        <div className='text-yellow-600 '>Education@gmail.com</div>
                    </div>
                    <div className="text-blue-700 leading-5 inline-flex mx-4  space-y-2">
                        Address: 555, Block B, Laxmi Nagar, Delhi-110092
                    </div>
                    <div className="flex justify-between space-x-6 mr-8  pl-4 align-middle items-center text-center">
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 205 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 207.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 319 (1).svg"/></div>
                   </div>




                </div>
                <div className="flex flex-col">
                <div className='border bg-blue-700 flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                <div className='bg-white w-8 h-20 -mt-2 rounded-b-xl flex justify-center border border-blue-700'><img src='/Vector 17 (1).svg' className='mt-8 w-4'/></div>
                    <div className='border h-4 w-4 border-white mx-3 '></div>
                    <div className='rounded-full w-14 h-12 bg-white mx-4 '></div>
                    <div className='text-white mx-4 w-32 space-y-1 ' >
                        <div className='font-bold text-xs tracking-wider '>Ramesh kumar</div>
                        <div className='text-white'>ID:   T09567</div>
                    </div>
                    <div className='text-white mx-4 space-y-1'> 
                        <div className='text-xs'>+91 9999999999</div>
                        <div className='text-white'>Education@gmail.com</div>
                    </div>
                    <div className="text-white leading-5 inline-flex mx-4  space-y-2">
                        Address: 555, Block B, Laxmi Nagar, Delhi-110092
                    </div>
                    
                    <div className="flex justify-between space-x-6 mr-8  pl-4 align-middle items-center text-center">
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 205.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 207 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 319.svg"/></div>
                    </div>
                    </div>
                    <div className="bg-violet-100 h-30 border border-blue-200 rounded-b-xl -mt-1 px-14">
                        <div className="flex text-blue-700 pt-4 pb-8 space-x-10 items-center">
                            <div className="rounded-full bg-blue-700 h-8 align-middle items-center text-center flex justify-center w-8 text-white">M</div>
                            <div className="text-xs px-4">
                                <div className="py-4">post Graduate with commerce</div>
                                <div>Class : 6th , 7th, 8th</div>
                            </div>
                            <div className="text-xs">
                                <div className="py-4">Exp : 7 yrs      English, and Hinid</div>
                                <div>Subject : Maths, Engilish, SST English, SST Hindi</div>
                            </div>
                            <div className="text-xs">Full Time</div>
                        </div>
                    </div>





                </div>
                <div className='border border-blue-700 flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                <div className='bg-blue-700 w-8 h-20 -mt-2 rounded-b-xl flex justify-center'><img src='/Vector 17.svg ' className='mt-8 w-4 '/></div>
                    <div className='border h-4 w-4 border-blue-700 mx-3 '></div>
                    <div className='rounded-full w-14 h-12 bg-blue-700 mx-4 '></div>
                    <div className='text-blue-700 mx-4 w-32 space-y-1 ' >
                        <div className='font-bold text-xs tracking-wider '>Ramesh kumar</div>
                        <div className='text-yellow-600'>ID:   T09567</div>
                    </div>
                    <div className='text-blue-700 mx-4 space-y-1'> 
                        <div className='text-xs'>+91 9999999999</div>
                        <div className='text-yellow-600 '>Education@gmail.com</div>
                    </div>
                    <div className="text-blue-700 leading-5 inline-flex mx-4  space-y-2">
                        Address: 555, Block B, Laxmi Nagar, Delhi-110092
                    </div>
                    <div className="flex justify-between space-x-6 mr-8  pl-4 align-middle items-center text-center ">
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 205 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 207.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center "><img src="Group 319 (1).svg"/></div>
                    </div>




                </div>
                
        </div>
        </div>
      </div>
    </div>
        </div>
    )
}