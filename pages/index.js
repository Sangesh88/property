export default function Home(){
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
          <div className="text-sm font-semibold tracking-wider"> Student Registered</div>
          <div className="font-bold text-xl">87</div>
          <div className="flex justify-between bg-violet-100 px-2  rounded-lg items-center">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="text-xs tracking-wider">Active</div>
            <div className="font-bold text-sm">75</div>
          </div>
        </div>
    </div>    
        <div className="bg-white ronded-xl py-2 mx-10 my-8 rounded-md border ">
                <div className="bg-blue-700 text-blue-50 text-center font-semibold mx-16 rounded-md mt-8 py-2">Student details</div>
                <div className='my-4 mx-16 space-y-4'>
                <div className='border border-blue-700 flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                     <div className='bg-blue-700 w-8 h-20 -mt-2 rounded-b-xl flex justify-center'><img src='/Vector 17.svg ' className='mt-8 w-4 '/></div>
                    <div className='border h-4 w-4 border-blue-700 mx-3 '></div>
                    <div className="text-center">
                    <div className='rounded-full w-12 m-2 h-12 bg-blue-700 mx-4 '></div>
                    <div className='text-yellow-600'>ID:   T09567</div>
                    </div>
                    <div className='text-blue-700 mx-4 w-48 space-y-1' >
                        <div className='font-bold text-xm stracking-wider '>Ramesh kumar</div>
                        <div className="text-green-900"> clAge:    27 Yr</div>
                        <div className="">Joining Date : 23/10/2022</div>
                    </div>
                    <div className='text-blue-700 mx-2 space-y-1 '> 
                        <div className='text-xm font-semibold'>+91 9999999999</div>
                        <div className='text-yellow-600 '>Education@gmail.com</div>
                        <div className="text-green-900">Batch:  B_7890</div>
                    </div>
                    <div className="text-blue-700 leading-5 mx-2  space-y-2">
                        <div className="text-xm font-semibold">S/o, G/o: Mr. Ramesh kumar</div>
                        <div>   Address: 555, Block B, Laxmi Nagar, Delhi-110092</div>
                    </div>
                    <div className="flex justify-between space-x-6 mr-4  pl-4 align-middle items-center text-center">
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 205 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 207.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 319 (1).svg"/></div>
                   </div>




                </div>
                <div className="flex flex-col">
                <div className='border border-blue-700 bg-blue-700 text-white flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                     <div className='bg-white w-8 h-20 -mt-2 rounded-b-xl flex justify-center'><img src='/Vector 17 (1).svg ' className='mt-8 w-4 '/></div>
                    <div className='border h-4 w-4 border-white mx-3 '></div>
                    <div className="text-center">
                    <div className='rounded-full w-12 m-2 h-12 bg-white mx-4 '></div>
                    <div className=''>ID:   T09567</div>
                    </div>
                    <div className=' mx-4 w-48 space-y-1' >
                        <div className='font-bold text-xm stracking-wider '>Ramesh kumar</div>
                        <div className=""> clAge:    27 Yr</div>
                        <div className="">Joining Date : 23/10/2022</div>
                    </div>
                    <div className='mx-2 space-y-1 '> 
                        <div className='text-xm font-semibold'>+91 9999999999</div>
                        <div className=' '>Education@gmail.com</div>
                        <div className="">Batch:  B_7890</div>
                    </div>
                    <div className=" leading-5 mx-2  space-y-2">
                        <div className="text-xm font-semibold">S/o, G/o: Mr. Ramesh kumar</div>
                        <div>   Address: 555, Block B, Laxmi Nagar, Delhi-110092</div>
                    </div>
                    <div className="flex justify-between space-x-6 mr-4  pl-4 align-middle items-center text-center">
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 205.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 207 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-white align-middle items-center text-center flex justify-center"><img src="Group 319.svg"/></div>
                   </div>
                </div>

                    <div className="bg-violet-100 h-30 border border-blue-200 rounded-b-xl -mt-1 px-14">
                        <div className="flex text-blue-700 pt-4 pb-8 space-x-10 items-center">
                        <div className="text-sm flex space-x-24">
                        <div className="text-blue-700 space-y-3">
                            <div>S/o, G/o: Mr. Ramesh kumar</div>
                            <div>G/o  Address : 777, Block-B, <br/>
                                    Ramesh Nagar, Delhi-110087</div>
                            <div className="">+91-9999999999 <br/>
                                    xyzabcd@gmail.com</div>
                            <div className="flex">
                                <div className="w-6 mr-2 text-center rounded-full  text-white bg-blue-700 h-6 text-xs p-1">M</div>
                                <div>DOB : 24/07/1870</div>
                            </div>
                            <div>Occupation:  Businessman</div>
                
                        </div>
                        <div className="">
                            <div className="flex space-x-24">
                                <div>Class/STD : 8th</div>
                                <div>No of Class : 7/50</div>
                                <div>
                                    <div>Batch no: B_7890</div>
                                    <div>Payment status : Paid</div>
                                    <div>Student status : Active</div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-blue-700 text-xs space-y-2 ">
                                    <div className="">Subject </div>
                                    <div className="bg-blue-300 p-2 justify-between w-28 rounded-lg flex ">
                                        <div>Maths</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-300 w-28 rounded-lg flex p-2 justify-between">
                                        <div>SST Eng</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-300 w-28 rounded-lg flex justify-between p-2">
                                        <div>SST Hnd</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                </div>
                                <div className="text-blue-700 text-xs space-y-2 ">
                                
                                   <div className="flex justify-between  mx-4">
                                       <div className="space-y-2">
                                       <div className="">Topics </div>
                                       <div className="bg-blue-200 p-2 justify-between w-28 rounded-lg flex ">
                                        <div>Maths</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-200 w-28 rounded-lg flex p-2 justify-between">
                                        <div>SST Eng</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-200 w-28 rounded-lg flex justify-between p-2">
                                        <div>SST Hnd</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                       </div>
                                       <div className="space-y-2 ml-4 mt-6">
                                       <div className="bg-blue-100 p-2 justify-between w-28 rounded-lg flex ">
                                        <div>Maths</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-100 w-28 rounded-lg flex p-2 justify-between">
                                        <div>SST Eng</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-100 w-28 rounded-lg flex justify-between p-2">
                                        <div>SST Hnd</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                       </div>
                                       <div className="space-y-2 ml-4 mt-6">
                                       <div className="bg-blue-100 p-2 justify-between w-28 rounded-lg flex ">
                                        <div>Maths</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-100 w-28 rounded-lg flex p-2 justify-between">
                                        <div>SST Eng</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                    <div className="bg-blue-100 w-28 rounded-lg flex justify-between p-2">
                                        <div>SST Hnd</div>
                                        <div><img src="Group 68.svg"/></div>
                                    </div>
                                       </div>

                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      
                      
                      
                        </div>
                    </div>
                   





                </div>
                <div className='border border-blue-700 flex rounded-md py-2 px-4 items-center text-xs tracking-wider'>
                     <div className='bg-blue-700 w-8 h-20 -mt-2 rounded-b-xl flex justify-center'><img src='/Vector 17.svg ' className='mt-8 w-4 '/></div>
                    <div className='border h-4 w-4 border-blue-700 mx-3 '></div>
                    <div className="text-center">
                    <div className='rounded-full w-12 m-2 h-12 bg-blue-700 mx-4 '></div>
                    <div className='text-yellow-600'>ID:   T09567</div>
                    </div>
                    <div className='text-blue-700 mx-4 w-48 space-y-1' >
                        <div className='font-bold text-xm stracking-wider '>Ramesh kumar</div>
                        <div className="text-green-900"> clAge:    27 Yr</div>
                        <div className="">Joining Date : 23/10/2022</div>
                    </div>
                    <div className='text-blue-700 mx-2 space-y-1 '> 
                        <div className='text-xm font-semibold'>+91 9999999999</div>
                        <div className='text-yellow-600 '>Education@gmail.com</div>
                        <div className="text-green-900">Batch:  B_7890</div>
                    </div>
                    <div className="text-blue-700 leading-5 mx-2  space-y-2">
                        <div className="text-xm font-semibold">S/o, G/o: Mr. Ramesh kumar</div>
                        <div>   Address: 555, Block B, Laxmi Nagar, Delhi-110092</div>
                    </div>
                    <div className="flex justify-between space-x-6 mr-4  pl-4 align-middle items-center text-center">
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 205 (1).svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 207.svg"/></div>
                        <div className="h-8 w-8 rounded-full bg-blue-700 align-middle items-center text-center flex justify-center"><img src="Group 319 (1).svg"/></div>
                   </div>




                </div>
                
        </div>
        </div>
      </div>
    </div>
        </div>
    )
}