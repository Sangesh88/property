import Image from "next/image"
import Link from "next/link"
import Section1 from "./component/section1"
import Section2 from "./component/Section2"
import First from "./component/section3"
import Header from "./component/header"
import HeroArea from "./component/hero"
import Heading from "./component/HeadingSection"
import Section4 from "./component/Section4"
import Section5 from "./component/Section5"
import Section6 from "./component/Section6"
import Section7 from "./component/Section7"
import Section8 from "./component/Section8"
import Section9 from "./component/Section9"
import Section10 from "./component/Section10"
import Section11 from "./component/Section11"
import Section12 from "./component/Section12"
import Section13 from "./component/Section13"
import Section14 from "./component/Section14"
import Section15 from "./component/Section15"
import Section16 from "./component/Section16"
import TagCard from "./component/TagCard"
import TagCard1 from "./component/TagCard1"
import TagCard2 from"./component/TagCard2"
import Button from "./component/Button"
import Tag from "./component/Tag"
import Tagdata from "./component/Tagdata"
import Pholio from "./component/Pholio"
import Totalcard from "./component/Totalcard"
import Tagcard10 from "./component/Tagcard10"
import Button2 from "./component/Button2" 
import Button3 from "./component/Button3"
import Newset from "./component/Newset"
import Section100 from "./Section/Section100"
import View1 from "./views/view1"
import Section0 from "./Section0"
import Formgreen from "./component/Formgreen"
export default function Home(){
    return (
  <>     
<div>
   <Header/>
   <HeroArea/>
   <Section1/>
   
   <Heading/>
   
<Section2/>
<Section2/>

   <Section4/>
   <Section5/>
   <Section6/>
    <Section7/>
    <Section8/>
   <Section9/>
    <Section10/>
   <Section11/>
    <Section12/>
    <Section13/>               
                   </div>
             <div className="space-x-8 mt-24 flex ">
                   <Section14/>
                 <Section14/>
          </div>
         <Section15 heading="NTV stoppimg By The Woods<" p="4 BHK independent House/villa whitefield. Bangalore East" price="$ 2.38-3.44 Cr"/>
         
         <Section16/> 
         <Section15 heading="NTV stoppimg By The Woods<" p=" independent House/villa whitefield. Bangalore East" price="$ 5.38-3.44 Cr"/>
         <div className="flex">
         <TagCard T="Tittle1" n="20"/>
         <TagCard T="Tittle2" n="21"/>
         <TagCard T="Tittle3" n="22"/>
         <TagCard T="Tittle4" n="23"/>
         <TagCard T="Tittle5" n="24"/>


         </div>
         <div className="flex mx-32">
         <TagCard T="Tittle6" n="25"/>
         <TagCard T="Tittle7" n="26"/>
         <TagCard T="Tittle8" n="27"/>
         <TagCard T="Tittle9" n="28"/>

         </div>
         <div className="flex">
         <TagCard T="Tittle10" n="29"/>
         <TagCard T="Tittle11" n="30"/>
         <TagCard T="Tittle12" n="31"/>
         <TagCard T="Tittle13" n="32"/>
         <TagCard T="Tittle14" n="33"/>


         </div>
         <div className="flex">
         
           <TagCard1 T="Tittle1" r="Rate: 100"i="img1.jpg"/>
         
         
           <TagCard1 T="Tittle2" r="Rate: 200"i="img2.jpg"/>
         
         
           <TagCard1 T="Tittle3" r="Rate: 300"i="img3.jpg"/>
         
         </div>
         <div className="flex container my-10 ">
         
           <TagCard1 T="Tittle1" r="Rate: 400"i="img4.jpg"/>
         
         
           <TagCard1 T="Tittle2" r="Rate: 500"i="img8.jpg"/>
         
         
                   
         </div>
         <div className="flex">
         <TagCard2 T="Tittle1" n="1"/>
         <TagCard2 T="Tittle2" n="2"/>
         <TagCard2 T="Tittle3" n="3"/>
         </div>
         <div className="flex">
           <Button onclick="">click</Button>
           <Button>login</Button>
           <Button>signup</Button>
           <Button>send</Button>
           <Button>next</Button>
           <Button>click</Button>
           </div>
           

           <div className="flex">
             <Tag T="Tittle1" i="up.svg"/>
             <Tag T="Tittle2" i="down.svg"/>
             <Tag T="Tittle3" i="up.svg"/>
             <Tag T="Tittle4" i="down.svg"/>
             <Tag T="Tittle5" i="up.svg"/>


           </div>
           <div className="flex">
         
         <Tagdata T="Tittle:this is a tittle1" i="img1.jpg" d1="Data;50" d2="Data;35" d3="Data;25"d4="Data;10" imgr="right.svg"/>
       
       
         <Tagdata T="Tittle:this is a tittle2" i="img2.jpg" d1="Data;50" d2="Data;35" d3="Data;25"d4="Data;10" imgr="right.svg"/>
       
       
         <Tagdata T="Tittle:this is a tittle3" i="img3.jpg" d1="Data;50" d2="Data;35" d3="Data;25"d4="Data;10" imgr="right.svg"/>      
       </div>


         


         <div className="flex container justify-between">

            <Pholio src="right.svg" tittle="8.62k Subscribers" desp="Your main list is growing" btn="Manage List" bg="bg-blue-500"/>
            <Pholio src="right.svg" tittle="+40 Followers" desp="Your main list is growing" btn="Click them out" bg="bg-green-500"/>
            <Pholio src="right.svg" tittle="Business Plan" desp="This is your current active plan " btn="Upgrade to VIP" bg="bg-red-500"/>



         </div>
         <div className="flex justify-between"> 



           <Totalcard T="Happy Customers" i="right.svg" n="5984"/>
           <Totalcard T="Total Leads" i="right.svg" n="5984"/>
           <Totalcard T="Total Vendors" i="right.svg" n="5984"/>


         </div>
         <div className="flex justify-between flex-wrap "> 
            <Tagcard10 T="Dashboard" i="home.svg" img="down.svg"/>
            <Tagcard10 T="Page Layout" i="home.svg" img="down.svg"/>
            <Tagcard10 T="Widget" i="home.svg" img="down.svg"/>
            <Tagcard10 T="user" i="home.svg" img="down.svg"/>




         </div>
         <div className="flex">

              <Button2 >click</Button2>
              <Button2 >login</Button2>
              <Button2 >signup</Button2>
              <Button2 >send</Button2>





         </div>
         <div className="flex">
            <Button3>click</Button3>
            <Button3>login</Button3>
            <Button3>signup</Button3>
            <Button3>send</Button3>





         </div>
         <div className=" h-32 border-4 text-right align-top items-start flex justify-end bg-blue-700">
           <div className=" w-32">
           <Newset i="home.svg" img="down.svg" img2="home.svg"/>
           </div>
         </div>



         <Section100/>
         
          {/* <Section200/> */}

          <View1/>
          
          
          
          
          

          
            
                
</> 

    )
}
