import Button2 from "../../component/Button2"
import Button3 from "../../component/Button3"
import Tagcard10 from "../../component/Tagcard10"

const Section100=()=>{
return(

<>
<div>
    <div className="flex align-middle items-center border py-10 container justify-between">
<Tagcard10 T="Dashboard" img="home.svg" i="down.svg"/>
<Tagcard10 T="profile" img="home.svg" i="down.svg"/>
<Button2>login</Button2>
<Button3>signup</Button3>

    </div>
    <div></div>
</div>

</>


)



}
export default Section100