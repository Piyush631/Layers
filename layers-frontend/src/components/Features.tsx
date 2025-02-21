import { Cards } from "./Card";
import avatar1 from "../assets/avatar-ashwin-santiago.jpg"
import avatar2 from "../assets/avatar-florence-shaw.jpg"
import avatar3 from "../assets/avatar-owen-garcia.jpg"
import { IoIosStar } from "react-icons/io";


const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];
const btn=[
    "shift",
    "alt",
    "c"
]

export function Features(){
    return (
        <div className="text-white py-24">
            <div className=" flex justify-center">
             
             <div className="text-[#BCE954] border-[#BCE954] px-4 py-1 rounded-3xl uppercase  text-center border-1">
                Features
                
                </div>
         </div>
            <div className="flex justify-center">
               <div className="lg:text-8xl md:text-7xl text-5xl px-24 text-center">
               When power meets <span className="text-[#aee62d]">simplicity</span>
                </div> 
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-12">
                <Cards title="Real time Collaboration" description="work together sameless with conflict free team editing">
<div className="flex py-4  ">
    <div className=" z-100  rounded-full border-4 border-blue-700">
        <img src={avatar1} className=" border-3  w border-black rounded-full"/>
    </div>
    <div className=" -ml-6  z-20 rounded-full border-4 border-blue-700">
        <img src={avatar2} className=" border-3 border-black rounded-full"/>
    </div>
    <div className="-ml-6 z-10 rounded-full border-4 border-amber-500">
        <img src={avatar3} className=" border-3 border-black rounded-full"/>
    </div>
    <div className="h-16 w-16 -ml-5 mt-4  items-center justify-center  gap-1 flex bg-white/20 rounded-full">
       <div className="bg-white rounded-full h-1 w-1 ">

       </div>
       <div className="bg-white  rounded-full h-1 w-1 ">

</div>
<div className="bg-white h-1 w-1 rounded-full ">

</div>
    </div>
</div>

                </Cards>
                <Cards title="Interactive Prototype" description="Engage your client with prototypes that react to user action">
                    <p className="text-center text-4xl font-semibold text-white/30">
                        We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
  incredible
</span> growth this year
                    </p>

</Cards>
<Cards title="Keyboard Quick Actions" description="Powerfull command to help you create design more quickly">
<div className="flex gap-2 justify-center items-center py-9">
  {btn.map(b=>
    <button className="bg-gray-200 rounded-2xl text-xl font-medium px-6 text-black py-2">{b}</button>
  )}
</div>
</Cards>
            </div>
        <div className=" mx-5 lg:mx-20  md:mx-12 flex  flex-wrap text-center mt-8 justify-center gap-8">
           { features.map(feature =>
            <div className="bg-neutral-800 border-1   px-3   gap-2 flex  justify-center items-center py-1 rounded-xl text-white text-md  font-medium  border-white/50">
                <div className="h-5  w-5 flex items-center text-xs text-black justify-center rounded-full bg-[#aee62d]">

                <IoIosStar />


                </div>
              
                <div>
                {feature}

                </div>
                </div>
        )  } 
        </div>
        </div>
    )
}