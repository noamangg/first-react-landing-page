import { arrowUp } from "../assets"
import {features} from "../constants"
import Button from './Button'
const GetStarted = () => (
  <div className="ml-4 flex-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">

    <div className="flex-center flex-col bg-primary w-full h-full rounded-full">
      <p className="font-poppins font-medium text-lg leading-6 text-gradient">
        Get
        <img src={arrowUp} className="inline-block w-6 h-6 object-contain" alt="arrow"  />
        <br/>
        Started
      </p>
    </div>
  </div>
)

export default GetStarted