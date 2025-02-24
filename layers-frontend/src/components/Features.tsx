import { Cards } from "./Card";
import avatar1 from "../assets/avatar-ashwin-santiago.jpg"
import avatar2 from "../assets/avatar-florence-shaw.jpg"
import avatar3 from "../assets/avatar-owen-garcia.jpg"
import avatar4 from "../assets/avatar-lula-meyers.jpg"
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


export function Features(){
    return (
        <div id="features" className="text-white py-24">
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
                <Cards   className="group " title="Real time Collaboration" description="work together sameless with conflict free team editing">
<div className="  flex py-4  ">
    <div className=" z-100  rounded-full border-4 border-blue-700">
        <img src={avatar1} className=" border-3  w border-black rounded-full"/>
    </div>
    <div className=" -ml-6  z-20 rounded-full border-4 border-blue-700">
        <img src={avatar2} className=" border-3 border-black rounded-full"/>
    </div>
    <div className="-ml-6 z-10 rounded-full border-4 border-amber-500">
        <img src={avatar3} className=" border-3 border-black rounded-full"/>
    </div>
    <div className="absolute h-20 mt-2 w-20 ml-[210px] opacity-0 group-hover:opacity-100 rounded-full transition duration-600  border-green-700 border-4">
     <img src={avatar4} className=" border-3 border-black rounded-full"/>
</div>
    <div  className=" group   h-16 w-16 -ml-5 mt-4  items-center justify-center  gap-1 flex bg-white/20 rounded-full">
   
       <div className="bg-white rounded-full h-1 w-1 ">

       </div>
       <div className="bg-white  rounded-full h-1 w-1 ">

</div>

<div className="bg-white h-1 w-1 rounded-full ">

</div>
    </div>
</div>

                </Cards>
                <Cards  className="group" title="Interactive Prototype" description="Engage your client with prototypes that react to user action">
                    <p className=" relative text-center text-4xl font-semibold text-white/30 group-hover:text-white/70 transition duration-500">
                        We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
  incredible
  <br />
</span> 
    <video src="/gif-incredible.mp4" 
autoPlay
muted
loop
playsInline
className="absolute rounded-3xl  -top-13 left-12 opacity-0 group-hover:opacity-100 transition duration-500  h-24 w-48"
/>
growth this year
                    </p>

</Cards>
<Cards  className="group" title="Keyboard Quick Actions" description="Powerfull command to help you create design more quickly">
<div className="flex gap-4 justify-center items-center py-9">

    <button className="bg-gray-200    outline-2 outline-transparent  transition-all duration-600 group-hover:outline-lime-400  group-hover:translate-y-1 outline-offset-4 rounded-2xl text-xl font-medium px-6 text-black py-2">shift</button>
    
  
    <button className="bg-gray-200    outline-2 outline-transparent  transition-all duration-600 group-hover:outline-lime-400 group-hover:translate-y-1 delay-150  outline-offset-4 rounded-2xl text-xl font-medium px-4 text-black py-2">alt</button>
    
    <button className="bg-gray-200    outline-2 outline-transparent  transition-all  duration-600 group-hover:outline-lime-400 group-hover:translate-y-1  delay-200 outline-offset-4 rounded-2xl text-xl font-medium px-4 text-black py-2">c</button>
    
</div>
</Cards>
            </div>
        <div className=" mx-5 lg:mx-20  md:mx-12 flex   flex-wrap text-center mt-8 justify-center gap-8">
           { features.map(feature =>
            <div className="bg-neutral-800  group border-1  hover:scale-105 transition-all duration-500   px-3   gap-2 flex  justify-center items-center py-1 rounded-xl text-white text-md  font-medium  border-white/50">
                <div className="h-5 group-hover:rotate-45 transition duration-500 w-5 flex items-center text-xs text-black justify-center rounded-full bg-[#aee62d]">

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