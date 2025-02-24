import quantumLogo from "../assets/quantum.svg";
import acmeLogo from "../assets/acme-corp.svg";
import echoValleyLogo from "../assets/echo-valley.svg";
import pulseLogo from "../assets/pulse.svg";
import outsideLogo from "../assets/outside.svg";
import apexLogo from "../assets/apex.svg";
import celestialLogo from "../assets/celestial.svg";
import twiceLogo from "../assets/twice.svg";
import {motion} from "motion/react"
import { Fragment } from "react";
const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];
export function LogoTicker(){
    return (
        <div className="  container overflow-x-clip py-28">
<div className="text-white/60 text-center">
Already choose by these market leaders
</div>
<div className=" flex overflow-hidden mt-12" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>


    <motion.div 
    animate={{
        x:"-50%"
    }}
    transition={{
        duration:25,
     
        ease:"linear",
        repeat:Infinity
    }}
    
    className=" flex    flex-none gap-24 pr-24 ">
    
    {
        Array.from({length:2}).map((_,i)=>(
            <Fragment key={i}>
                {
logos.map((logo)=> (
    <img src={logo.image} key={logo.name}/>
)
               
            )
                }

            </Fragment>
        ))
}
    </motion.div>
           
</div>
        </div>
    )
}