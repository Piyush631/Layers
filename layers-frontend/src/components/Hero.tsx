import { useAnimate,motion } from "motion/react"
import leftiamge from "../assets/design-example-1.png"
import rightimage from "../assets/design-example-2.png"
import { useEffect } from "react";
import coursorImg from "../assets/cursor-you.svg"
export function Hero(){
    const[leftImageScope,leftImageAnimate]=useAnimate();
    const[rightImageScope,rightImageAnimate]=useAnimate();
    useEffect(()=>{
        leftImageAnimate([
            [leftImageScope.current,{opacity:1},{duration:0.5}],
            [leftImageScope.current,{y:0,x:0},{duration:0.5}],
          
        ])
        rightImageAnimate([
            [rightImageScope.current,{opacity:1},{duration:0.5,delay:1}],
            [rightImageScope.current,{y:0,x:0},{duration:0.5}]
        ])
    },[])
    return(
        <section
        style={{cursor:`url(${coursorImg}),auto` }}
        
        className="  overflow-x-clip relative w-full pt-24  flex justify-center">   

        <motion.div
        ref={leftImageScope}
        initial={{opacity:0,y:100,x:-100}}
        drag
        whileDrag={{
            scale:0.9
        }}
        dragConstraints={{
            left:30,
            top:-200,
            right:1200,
            bottom:350
        }}
        className="absolute  z-100 top-40  -left-20 hidden  lg:block h-96">
        <img  className="h-full object-cover " draggable="false"  src={leftiamge}/>
        </motion.div>
        <motion.div 
            ref={rightImageScope}
            initial={{opacity:0,y:100,x:100}}
            drag
            whileDrag={{
                scale:0.9
            }}
            dragConstraints={{
               left:-1100,
               top:-200,
               right:30,
               bottom:350
            }}
        className="absolute   z-100 top-40 -right-20 hidden lg:block h-96"> 
                <img src={rightimage} className="h-full object-cover"  draggable="false"  /> 
            </motion.div>
       <div className="w-1/2 mt-24 bg-black flex flex-col gap-3 items-center text-white ">
        
        <div className=" text-black font-semibold   text-sm md:text-lg md:tracking-widest bg-gradient-to-r from-purple-400 to-pink-400  py-1 px-2 rounded-3xl">
        $5.7 seed round raised
        </div>
        <div className="lg:text-7xl text-5xl md:text-6xl text-center  ">
        Impactful Design, Created Effortlessly
        </div>
        <div className="text-center mt-4 text-white/60   pt-2">
        Design tool should not slow you down. Layers combine powerfull features with an intuitive interface that keeps you in your creative flow.
        </div>
        <div className="flex border-1 mt-10  rounded-3xl p-1 border-white/70  ">
<input type="text" className="flex-1  lg:w-72 md:w-64 w-52  rounded-3xl p-2" placeholder="Enter your email"></input>
<button className="bg-[#A3E635] text-black text-xs md:text-lg  rounded-3xl md:w-28 w-24  h-9 px-5 ">Sign Up</button>

        </div>
       </div>
       </section>
    )
}