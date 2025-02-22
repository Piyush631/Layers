import { type IntegerationType } from "./Integerations"
import { twMerge } from "tailwind-merge";
import {motion} from "motion/react"
import { Fragment } from "react";
export function Integerationcols(props:{integerations:IntegerationType
    className?:string
    reverse?:boolean
}){
    const{integerations,className,reverse}=props
    return (
       
              <motion.div 
              initial={{
                y: reverse ? "-50%" :0
              }}
              animate={{
                  y:reverse  ? "0":"-50%"
              }}
              transition={{
                  duration:15,
               
                  ease:"linear",
                  repeat:Infinity
              }}  className={twMerge (" flex flex-col   justify-center items-center gap-2 w-56",className)}>
                {
                    Array.from({length:2}).map((_,i)=>
                        <Fragment key={i}>
{integerations.map(i=>
                            <div className="bg-neutral-900  rounded-2xl flex flex-col justify-center items-center py-6  px-4">
                                <div><img src={i.icon} className="h-20 w-20"/></div>
                                <div className="text-white mt-4 text-xl font-medium">{i.name} </div>
                                <div className="text-white/60 mt-4  text-center">{i.description}</div>

                            </div>
                        )}
                        </Fragment>
                    )
                }
                        
                    </motion.div>
      
    )
}