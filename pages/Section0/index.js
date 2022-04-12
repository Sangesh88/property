import AlertTag from "../component/Alerttag"
import Card500 from "../component/Card500"
import Card600 from "../component/Card600"
import Card700 from "../component/Card700"
import Piccard from "../component/Piccard"

const Section0=()=>{
return(

<>
<div>
    <AlertTag T="A simple primary alert—check it out!"/>


</div>
<div className="flex justify-between">

    <Card500 H="Card title" P="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." F="Last updated 3 mins ago"/> 
    <Card600 H="Card title" P="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." F="Last updated 3 mins ago"/> 
    <Card700 H="Card title" P="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." F="Last updated 3 mins ago"/> 

</div>

</>

)

}
export default Section0