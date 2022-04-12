import Tagcard10 from "../../component/Tagcard10"
import Button2 from "../../component/Button"
const Section301=()=>{
return(

<>

<div className="flex">
<Tagcard10 T="Dashboard" i="home.svg" img="down.svg"/>
            <Tagcard10 T="Page Layout" i="home.svg" img="down.svg"/>
            <Tagcard10 T="Widget" i="home.svg" img="down.svg"/>
            <Tagcard10 T="user" i="home.svg" img="down.svg"/>
</div>
<div className="flex justify-between">
<Button2>Read me</Button2>
<Button2> Login</Button2>
<Button2>Signup </Button2>
<Button2>Send</Button2>

</div>
<div className="animate-spin h-10 w-10 ml-10"><img src="right.svg" className="bg-red-700 rounded-full"/></div>
</>


)



}
export default Section301