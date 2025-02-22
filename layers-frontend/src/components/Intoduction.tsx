import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words=text.split(' ')
export default function Introduction() {
    const scrollTarget=useRef<HTMLDivElement>(null);

    const {scrollYProgress} =useScroll({
        target:scrollTarget,
        offset:["start end" ,"end end"]
    })
    const [currentWord,setCurrentWord]=useState(0);
    const wordIndex=useTransform(scrollYProgress,[0,1],[0,words.length])
    useEffect(()=>{
wordIndex.on('change',(latest)=>setCurrentWord(latest))
    },[wordIndex])
    return <section className="py-20 flex justify-center " >
        <div className=" ">

        <div className="sticky top-20 md:top-28 lg:top-44">

  
        <div className="flex justify-center">
            <div className="border-[#BCE954] mt-8 uppercase px-2 py-1 rounded-3xl text-white border-2 ">
             
                <span className="text-[#BCE954]">inroduction layers</span>
            </div>
        </div>
        <div className="pt-20 text-4xl md:text-5xl lg:text-6xl text-center px-11">
            <span className="text-white">Your creative process deserves better.</span>
            <span className="text-white/40">{words.map((word,wordIndex)=>
            <span key={wordIndex} className={twMerge("transition duration-500 ease-in-out",wordIndex < currentWord && "text-white")}>{word}{" "}</span>
            )}</span>
            <span className="text-[#BCE954]">Thats why we built Layers.</span>
        </div>
        
        </div>
      
        </div>
        <div  ref={scrollTarget} className="h-[240vh]  ">

</div>
        </section >
        
}
