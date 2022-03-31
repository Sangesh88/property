import Image from "next/image"
import Link from "next/link"

export default function Home(){
    return (
  <>     
<div>
    <div className="flex justify-between items-center bg-blue-700 fixed w-full z-50"> 
        <Link href="https://www.google.com/">
        <div className="w-10 h-10 border-2 p-1 m-4 justify-center flex items-center cursor-pointer">
            <div className="bg-blue-900  p-1 rounded-md   h-6 w-6"></div>
        </div>
        </Link>
        <div className="flex justify-between space-x-8 text-white">
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Buyer</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Tenants</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Owners</div></Link>
         <Link href="https://www.google.com/"><div className="cursor-pointer">For Dealers/Builders</div></Link>
        </div>
        <Link href="https://www.google.com/"><div className="bg-white text-blue-700 m-4 py-1 rounded-md px-4 cursor-pointer">login</div></Link>
    </div>
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
   
    <div className="text-gray-500 text-xs mt-32 font-semibold">
        <div className="text-center"> GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </div>
        <div className="mx-20">
        <div className="flex justify-between mt-8 font-bold text-sm">
            <div className="text-gray-500 w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img1.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>Buying a home</div>
            </div>
            <div className="w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img2.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>Renting a home</div>
            </div>
            <div className="w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img3.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>sell/Rent your property</div>
            </div>
            <div className="w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img4.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>Pg and Co-living</div>
            </div>
            <div className="w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img7.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>Buying Commercial spaces</div>
            </div>
            <div className="w-40">
                <div className="h-24 cursor-pointer rounded-md"><img src="img6.jpg" className=" w-40 hover:rounded-none  rounded-md  h-24"/></div>
                <div>Lease Commercial spaces</div>
            </div>
        </div>
        </div>
    </div>
    <div>
        <div className="text-center mt-8">
            <div className="text-xs text-gray-500">ALL PROPERTY NEEDS - ONE PORTAL
            </div>
            <div className="text-4xl mt-2 font-semibold">Find Better Places to Live, Work<br/> and Wonder...</div>
        </div>
    </div>
    <div className="flex">
        <div className="w-2/5 mx-24 mt-6"><img src="img6.jpg"/></div>
        <div className="mt-20 ">
            <div className="text-xs text-gray-500">BUY A HOME
            </div>
            <div className="text-gray-900 mt-2 text-3xl font-semibold"> Find, Buy & Own Your<br/> Dream Home</div>
            <div className="text-gray-500 mt-2">Explore from Apartments, land, builder floors, villas <br/> and more
                </div>
            <div className="bg-blue-500 px-4 align-middle items-center flex justify-center mt-4  py-4 font-semibold text-white w-48 rounded-md">Explore Buying</div>
        </div>
    </div>
    <div>
        <div className="bg-white border-2 mx-36 my-6 rounded-md shadow-md">
            <div>
                <div className="text-atart px-8 py-8 text-2xl font-bold">Top articles on home buying
                    </div>
                <div className="items-center flex justify-between px-8">
                    <div className=" flex space-x-1">
                        <div className=""><img src="img1.jpg" className="h-14 mx-2 rounded-md space-x-8 w-20 flex"/></div>
                        <div>
                        <div className=" text-sm">What is a Co-Operative <br/> Housing Society?</div>
                        <div className=" text-xs text-gray-500">Jan 25 2022</div>
                        </div>
                    </div>
                    <div className="flex space-x-1">
                        <div className=""><img src="img2.jpg" className="h-14 mx-2 flex rounded-md space-x-8 w-20"/></div>
                        <div>
                        <div className="text-sm ">All abouut the Societies <br/> Registration Act</div>
                        <div className="text-xs text-gray-500">Oct 07 2021</div>
                        </div>
                    </div>
                    <div className="flex space-x-1">
                        <div><img src="img3.jpg" className="h-14 mx-2 flex rounded-md space-x-8 w-20"/></div>
                        <div>
                        <div className="text-sm">Can govt. encroach on <br/> private property?</div>
                        <div className="text-xs text-gray-500">Oct 28 2021</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex px-4 py-6 border-t">
                <div className="flex"><img src="img8.jpg" className="h-20 w-40 px-6 rounded-md"/></div>
                <div className="">
                <div className="text-2xl font-semibold">Check your home buying budget </div>
                <div className="text-sm text-gray-500">based on your saving and EMI</div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className="px-32 pt-6">
            <div className="text-xl font-semibold"> Handpicked Residential Projects
                </div>
            <div className="text-gray-500 text-sm">Featured Residential projects across India
                </div>
        </div>
        <div className="mt-4 flex justify-between">
            <div className="ml-32"><img src="img1.jpg"className="h-full w-80  rounded-md"/></div>
            <div  className=" "><img src="img4.jpg"className="h-50 w-96  rounded-md"/></div>
            <div className="mr-32"><img src="img2.jpg" className=" rounded-md h-56 w-80"/></div>
        </div>
    </div>
    <div className="flex -mt-10 mb-10 justify-between px-36"> 
    <div className="bg-white rounded-md border-2 w-72  px-8 pt-14 pb-4 shadow-md">
        <div className="text-lg font-semibold">NTV stoppimg By The Woods</div>
        <div className="text-gray-500 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
        <div className="font-semibold mt-4">$ 2.38-3.44 Cr</div>
    </div>
    <div className="bg-white rounded-md border-2 w-80 px-8 pt-14 pb-4 shadow-md">
        <div className="text-lg font-semibold">NTV stoppimg By The Woods</div>
        <div className="text-gray-500 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
        <div className="font-semibold mt-4">$ 2.38-3.44 Cr</div>
    </div>
    <div className="bg-white rounded-md border-2 w-72 px-8 pt-14 pb-4 shadow-md">
        <div className="text-lg font-semibold">NTV stoppimg By The Woods</div>
        <div className="text-gray-500 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
        <div className="font-semibold mt-4">$ 2.38-3.44 Cr</div>
    </div>
    </div>
    <div className="flex">
        <div className="w-2/5 mx-24 mt-6"><img src="img4.jpg"/></div>
        <div className="mt-20 ">
            <div className="text-xs text-gray-500">RENT A HOME
            </div>
            <div className="text-gray-900 mt-2 text-3xl font-semibold"> Rental Homes for <br/>Everyone
                </div>
            <div className="text-gray-500 mt-2">Explore from Apartments, land, builder floors, villas <br/> and more
                </div>
            <div className="bg-blue-500 px-4 align-middle items-center flex justify-center mt-4  py-4 font-semibold text-white w-48 rounded-md">Explore Buying</div>
        </div>
    </div>
    <div>
        <div className="bg-white border shadow-md px-10 py-8 align-middle justify-center items-center justify-between  mx-40 flex my-10">
        <div className="w-1/3">
            <div className="font-semibold text-xl">Best Renting Advice by <br/>Our Top Editors
            </div>
            <div className="text-sm text-gray-500 mt-2">Read from Beginners check-list to Pro Tips
                </div>
        </div>
        <div className="w-2/3 flex justify-between">
            <div className="mt-4     mr-4">
                <div className="flex mx-2 w-full my-2">
                    <div className=""><img src="img1.jpg" className="h-20 rounded-md w-24"/></div>
                    <div className="mx-4">
                        <div className="text-gray-700 font-semibold text-sm">Negotiating a rent increase <br/>with landlords</div>
                        <div className="text-gray-500 text-xs mt-2">Jan 13 2022</div>
                    </div>
                </div>
                <div className="flex mx-2 w-full my-2">
                    <div className=""><img src="img2.jpg" className="h-20 rounded-md w-24"/></div>
                    <div className="mx-4">
                        <div className="text-gray-700 font-semibold text-sm">Negotiating a rent increase <br/>with landlords</div>
                        <div className="text-gray-500 text-xs mt-2">Jan 13 2022</div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex mx-2 w-full my-2">
                    <div className=""><img src="img3.jpg" className="h-20 rounded-md w-24"/></div>
                    <div className="mx-4">
                        <div className="text-gray-700 font-semibold text-sm">Negotiating a rent increase <br/>with landlords</div>
                        <div className="text-gray-500 text-xs mt-2">Jan 13 2022</div>
                    </div>
                </div>
                <div className="flex mx-2 w-full my-2">
                    <div className=""><img src="img4.jpg" className="h-20 rounded-md w-24"/></div>
                    <div className="mx-4">
                        <div className="text-gray-700 font-semibold text-sm">Negotiating a rent increase <br/>with landlords</div>
                        <div className="text-gray-500 text-xs mt-2">Jan 13 2022</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className="text-center mt-8">
            <div className="text-xs text-gray-500">ARE YOU AN OWNER?
            </div>
            <div className="text-4xl mt-2 font-semibold">Sell or Rent your property faster <br/>with 99acres
                </div>
        </div>
        <div className="flex">
        <div className="w-2/5 mx-24 mt-6"><img src="img1.jpg"/></div>
        <div className="mt-10 ">
            <div className="text-xs text-gray-500">POST YOUR PROPERTY 
            </div>
            <div className="text-gray-900 mt-2 text-3xl font-semibold"> Property owners get free <br/>posting when they <br/>register
                </div>
            <div className="text-gray-500 mt-2">Sell or rent your residential/ commercial <br/>`property
                </div>
            <div className="bg-blue-500 px-4 align-middle items-center flex justify-center mt-4  py-4 font-semibold text-white w-48 rounded-md">Explore Buying</div>
        </div>
    </div>
    <div className="bg-white border shadow-md px-10 py-8 align-middle justify-center items-center justify-between  mx-40 my-10">
        <div>
            <div className="py-8 text-2xl text-gray-900 font-semibold">Articles and guides for property owners
                </div>
            <div className="flex justify-between">
                <div className="flex mt-1">
                    <div className="h-24 w-24 mx-2"><img src="img1.jpg" /></div>
                    <div className=""> 
                        <div className="text-sm text-gray-700">Tips to Communicate the <br/>total cost of buyi...</div>
                        <div className="text-xs text-gray-500 my-2">FEb 05 2021</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-16 w-20 mx-2 flex"><img src="img2.jpg"/></div>
                    <div>
                        <div className="text-gray-700 text-sm">Step by step guide to post <br/>your property O...</div>
                        <div className="text-xs text-gray-500 my-2">Feb 03 2021</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-16 w-20 mx-2 flex"><img src="img3.jpg"/></div>
                    <div>
                        <div className="text-gray-700 text-sm">Cost involved while-<br/> property</div>
                        <div className="text-xs text-gray-500 my-2">Nov 18 2020</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div>
        <div>
            <div className="mx-32">
                <div className="text-2xl text-gray-900 font-semibold">Our services for owners
                </div>
                <div className="text-xs text-gray-500 mt-2">Make your life easier with our services
                    </div>
            </div>
            <div className="flex mx-24 justify-between">
                <div className="bg-green-100 h-96 hover:rounded-2xl hover:shadow-md my-10 ">
                    <div className=""><img src="notepad.png" className="h-52 my-8 w-60 "/></div>
                    <div className=" px-8">
                    <div className="text-xl text-gray-900 font-semibold">Rental Agreement</div>
                    <div className="text-xs mt-2 text-gray-500">Share nasic details online and get doorstep delivery of your rental agreement</div>
                    <div className="text-sm mt-2  text-blue-700 font-semibold">Know more</div>
                    </div>
                </div>
                <div className="bg-red-100 h-96 my-10 hover:rounded-2xl hover:shadow-md">
                    <div><img src="pc.png" className="h-64 w-60"/></div>
                    <div className=" px-8 pt-4  ">
                    <div className="text-xl text-gray-900 font-semibold">Get assistance in selling faster</div>
                    <div className="text-xs mt-2 text-gray-500">Dedicated Relationship manager to help you sell your property faster </div>
                    <div className="text-sm mt-2 font-semibold text-blue-700"> Explore now</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div className="text-center mt-8">
            <div className="text-xs text-gray-500">COMMERCIAL SPACES
                 </div>
            <div className="text-4xl mt-2 font-semibold">Choose from a wide variety of <br/> commercial properties

                </div>
                <div className="flex mx-24 justify-between space-x-8">
                <div className="bg-green-100 w-1/2 cursor-pointer h-96 hover:rounded-2xl hover:shadow-md my-10 ">
                <div className="relative">
                    <img src="img1.jpg" className="h-96 "/>
                    <div className="top-0 bottom-0 left-0 right-0 bg-blue-50 absolute opacity-50"></div>
                    <div className="absolute top-0 px-14 py-16 text-left">
                        <div className="text-sm text-gray-500 font-semibold">BUY FOR COMMERCIAL USE</div>
                        <div className="text-4xl font-semibold mt-4">Buy a Commercial property</div>
                        <div className="text-gray-700 mt-4 text-lg">Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more</div>
                        <div className="text-sm text-white font-semibold mt-4 bg-blue-500 py-4 px-4 flex justify-center align-middle text-center items-center w-60 rounded-md">Explore Buying Commercial</div>
                    </div>
                    </div>
                 </div>
                 <div className="bg-green-100 w-1/2 cursor-pointer h-96 hover:rounded-2xl hover:shadow-md my-10 ">
                  <div className="relative">
                    <img src="img3.jpg" className="h-96 "/>
                    <div className="top-0 bottom-0 left-0 right-0 bg-red-50 absolute opacity-50"></div>
                    <div className="absolute top-0 px-14 py-16 text-left">
                        <div className="text-sm text-gray-500 font-semibold">BUY FOR COMMERCIAL USE</div>
                        <div className="text-4xl font-semibold mt-4">Buy a Commercial property</div>
                        <div className="text-gray-700 mt-4 text-lg">Explore from Office Spaces, Co-working spaces, Retail Shops, Land, Factories and more</div>
                        <div className="text-sm text-white font-semibold mt-4 bg-blue-500 py-4 px-4 flex justify-center align-middle text-center items-center w-60 rounded-md">Explore Buying Commercial</div>
                    </div>
                    </div>
                 </div>
                   </div>
                   </div> 
                    <div className="bg-black full text-white">
                        <div className="flex">
                            <div className="pt-16 mx-20 ">
                                <div className="text-xl font-semibold">99acres</div>
                                <div className="mt-4">Mobile Apps</div>
                                <div className="mt-4">Our services</div>
                                <div className="mt-4">Price trends</div>
                                <div className="mt-4">Post your property</div>
                                <div className="mt-4">Builders in india</div>
                                <div className="mt-4">Area Converter</div>
                                <div className="mt-4">Articles</div>
                               <div className="mt-4">Customer services</div>
                               <div className="mt-4">Sitemap</div>
                            </div>
                            <div className="text-white mt-16 ">
                                <div className="text-xl font-semibold">Company</div>
                                <div className="mt-4">About us</div>
                                <div className="mt-4"> clContact us</div>
                                <div className="mt-4">Careers with us</div>
                                <div className="mt-4">Trems&Conditions</div>
                                <div className="mt-4">Request info</div>
                                <div className="mt-4">Feedback</div>
                                <div className="mt-4">report a problem</div>
                                <div className="mt-4">Testimonials</div>
                                <div className="mt-4">Privacy Policy</div>
                                <div className="mt-4">Summons/Notices</div>
                                <div className="mt-4">Grievances</div>
                                <div className="my-4">Safety Guide</div>
                            </div>
                            <div className="text-white mt-16 mx-20">
                                <div className="text-xl font-semibold">Our Partners</div>
                                 
                                <div className="mt-4">Naukri.Com-jobe in india</div>
                                <div className="mt-4">Naukrigulf.Com-jobe in <br/>middle east</div>
                                <div className="mt-4">Jeevansathi.Com-<br/>Matrimonials</div>
                                <div className="mt-4">Briji.Com-Professional<br/>Networking</div>
                                <div className="mt-4">Shiksha.Com-Education<br/>Career info</div>
                                <div className="mt-4">Policybazaar.Com-<br/>insurance india</div>
                                <div className="mt-4">Maritnation.com-Online<br/>Educational Assessment</div>
                                <div className="mt-4">PaisaBazaar.Com</div>
                                <div className="mt-4">AmbitionBox.Com</div>
                                <div className="mt-4">FirstNaukri.Com-A Jobsite<br/>for compus hiring</div>
                                <div className="mt-4">Jobhai.Com-Find jobs<br/>Near you</div>
                                </div>
                            <div className="text-white mt-16 mx-28">
                                <div className="text-xl font-semibold">Contact Us </div>
                                 <div className="mt-4">
                                     <div>Toll Free - 1800 41 99099
                                    </div>
                                     <div className="text-xs text-gray-500 mt-1">Monday - Saturday (9:00AM to 11:00PM IST)
                                    </div>
                                 </div>
                                <div className="mt-4">Email - feedback@99acres.com</div>
                                                           
                                <div className="mt-4">Connect with us</div>                                                                   
                                <div className="mt-4">5</div>
                                <div className="mt-4">Download the App</div>                                                                                
                                <div className="mt-4">
                                    <div></div>
                                    <div className="text-xs text-gray-500">Usage of 99acres.com to upload content showing area in non standard units or <br/>which enables targeting by religion/community/caste/race is prohibited. Please <br/>report inappropriate content by writing to us at report abuse

                                        </div>
                                </div>
                                <div className="mt-4">All rights reserved - Info Edge (India) Ltd.<br/>
                                                        A naukri.com group venture</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div><img src="img5.jpg" className="h-96 w-full my-10"/></div>
                        <div className="top-0 bottom-0 right-0 left-0 bg-green-500 opacity-20 absolute "></div>
                        <div className="text-white font-semibold text-3xl absolute z-30 my-4 top-0 h-full w-full items-center flex justify-center align-middle  text-center">hello word</div>
                    </div>
             <div className="flex mx-60">
                    <div className="bg-white relative rounded-md border-2 my-4 px-8 pt-14 pb-4 shadow-md">
                        <div className="text-lg font-semibold">NTV stoppimg By The Woods</div>
                        <div className="text-gray-500 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
                        <div className="font-semibold mt-4">$ 2.38-3.44 Cr</div>
                        <div className="h-14 w-14 bg-slate-600 rounded-full -mt-8 absolute top-0 align-middle flex justify-center text-center items-center text-white">1</div>
                  </div>
                  <div className="bg-white relative rounded-md border-2 my-4 px-8 pt-14 mx-40 pb-4 shadow-md">
                      <div className="text-lg font-semibold">NTV stoppimg By The Woods</div>
                     <div className="text-gray-500 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
                     <div className="font-semibold mt-4">$ 2.38-3.44 Cr</div>
                     <div className="h-14 w-14 bg-slate-600 rounded-full -mt-8 align-middle flex justify-center items-center text-center text-white absolute top-0">2</div>
                 </div>
          </div>
          <div className="bg-cyan-700 text-white border-cyan-900 relative rounded-md border-2 py-10 mx-24 w-1/3 my-10 shadow-md">
                      <div className="text-lg px-8 font-semibold">NTV stoppimg By The Woods</div>
                     <div className=" px-8 mt-2 text-sm">4 BHK independent House/villa whitefield. Bangalore East </div>
                     <div className="font-semibold px-8 mt-4">$ 2.38-3.44 Cr</div>
                     <div className="flex"> 
                     <div className="absolute w-full flex justify-between  px-12 top-0">
                     <div className="h-14 w-14 bg-slate-600 rounded-full border-white border- border-4 -mt-8 align-middle  flex justify-center items-center text-center text-white ">1</div>
                     <div className="h-14 w-14 bg-slate-600 rounded-full border-4 border-white -mt-8 align-middle flex justify-center items-center text-center text-white">2</div>
                     </div>
                     </div>
                     </div>
                     <div  className=" relative rounded-md border-2 h-96 w-4 ml-96 my-8 bg-slate-900 shadow-md">
                         <div>
                             <div className="">
                                 <div className="h-14 w-14 bg-slate-400 top-16 -ml-6 rounded-full -mt-8  text-balck align-middle flex justify-center items-center text-center absolute">1</div>
                             </div>
                             <div>
                                 <div className="h-14 w-14 bg-slate-400 top-48 -ml-6 rounded-full -mt-8  text-balck align-middle flex justify-center items-center text-center absolute">2</div>
                             </div>
                             <div>
                                 <div className="h-14 w-14 bg-slate-400 top-80 -ml-6 rounded-full -mt-8  text-balck align-middle flex justify-center items-center text-center absolute">3</div>
                             </div>
                         </div>
                     </div>
                </div>
</> 

    )
}
