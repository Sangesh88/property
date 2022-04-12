import Section0 from "../../Section0"
import Section300 from "../../Sectionnew/Section300"
import Section301 from "../../Sectionnew/Section301"
import Card800 from "../../component/Card800"
import Signup_Form from "../../component/From"
import Form1 from "../../component/From1"
import Form2 from "../../component/Form2"
import Button from "../../component/Button"
import Button2 from "../../component/Button2"
const View1=()=>{
return(

<>

<Section300/>
<Section301/>
<Section0/>
<div className="flex justify-between">
<Card800 H="Featured" T="Special title treatment" P="With supporting text below as a natural lead-in to additional content." />
<Card800 H="Featured" T="Special title treatment" P="With supporting text below as a natural lead-in to additional content." />
<Card800 H="Featured" T="Special title treatment" P="With supporting text below as a natural lead-in to additional content." />
</div>
<div className="m-8 w-full flex justify-center items-center align-middle">
    <Signup_Form/>
   
</div>
<div>
<Form1 T1="Welcome" T2="To the Zone of heppiness" T3="Hello Pleace tell us a little bit about yourself"
    T4="First Name" T5="Last Name" T6="Phone" T7="Address" T8="City" B20="Back" B21="next"/>
    </div>
    <div className="m-8">
        <Form2 H="Hello Friends" T1=" Create Account" T2="Name" T3="Email" T4="Password"/>
    </div>

</>

)


}
export default View1