import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Tryit(){
    const animation=useRef<AnimationPlaybackControls>();
    const[scope,animate]=useAnimate()
    const[isHovered,setIsHovered]=useState(false)
    useEffect(()=>{
   animation.current=animate (
    scope.current,
    {x:"-50%"},
    {duration:8,ease:"linear",repeat:Infinity}
   )
    
   
    },[])
    useEffect(()=>{
            if(animation.current){
                if(isHovered)
                {
                    animation.current.speed=0.5
                }else{
                    animation.current.speed=1
                }
            }
    },[isHovered])
    return (
        <section className="mt-20 overflow-x-clip">
            <motion.div ref={scope} className="mx-auto p-4 flex "
            onMouseEnter={()=>{
                setIsHovered(true)
            }}
            onMouseLeave={()=>{
                setIsHovered(false)
            }}
            >
                <div className="flex flex-none   lg:text-6xl text-5xl font-medium  gap-16">
                    {Array.from({length:20}).map((_, i) =>
                    (
                        <div key={i} className=" flex group justify-center items-center gap-15">
                            <span className="text-lime-400">&#10038;</span>
                            <span className="text-white group-hover:text-lime-400 ">Try it for free</span>
                        </div>
                    ))
                    
                    }
                </div>
            </motion.div>
        </section>
    )
}