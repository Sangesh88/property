import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { createFactory } from "react/cjs/react.production.min"
import Button2 from "../Button2"

const Card800=(props)=>{
return(
<>
<div className="w-80 bg-white bordeer-4 shadow-md mx-10 my-10 py-6 px-4">
    <div className="text-gray-700 font-semibold mb-4">{props.H}</div>
    <div className="h-0.5 bg-gray-200 "></div>
    <div className="text-gray-700 font-semibold mt-4">{props.T}</div>
    <div className="text-gray-600 text-xs mt-2 mb-6">{props.P}</div>
    <Button2 bg="bg-green-500">Go someWhere</Button2>
</div>
</>

)

}
export default Card800