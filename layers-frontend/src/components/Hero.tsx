import leftiamge from "../assets/design-example-1.png"
import rightimage from "../assets/design-example-2.png"
export function Hero(){
    
    return(
        <section className="  overflow-x-clip relative w-full pt-24  flex justify-center">   

        <div className="absolute -left-35 hidden  lg:block h-96">
        <img  className="h-full object-cover" src={leftiamge}/>
        </div>
        <div className="absolute  top-15 -right-20 hidden lg:block h-96"> 
                <img src={rightimage} className="h-full object-cover" /> 
            </div>
       <div className="w-1/2 bg-black flex flex-col gap-3 items-center text-white ">
        
        <div className=" text-black font-semibold   text-sm md:text-lg md:tracking-widest bg-gradient-to-r from-purple-400 to-pink-400  py-1 px-2 rounded-3xl">
        $5.7 seed round raised
        </div>
        <div className="lg:text-7xl text-5xl md:text-6xl text-center  ">
        Impactful Design, created effortlessly
        </div>
        <div className="text-center  text-white/60   pt-2">
        Design tool should not slow y ou down. Layers combine powerfull features with an intuitive interface that keeps you in your creative flow.
        </div>
        <div className="flex border-1 rounded-3xl p-1 border-white/70  ">
<input type="text" className="flex-1  lg:w-72 md:w-64 w-56  rounded-3xl p-2" placeholder="Enter your email"></input>
<button className="bg-[#A3E635] text-black  rounded-3xl h-9 px-5">Sign Up</button>

        </div>
       </div>
       </section>
    )
}