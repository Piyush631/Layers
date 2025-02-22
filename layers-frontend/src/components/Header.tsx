import logoimage from "../assets/logo.svg"
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence,motion } from "motion/react";
const navLinks=[
    
        {lable:"home",href:"#"},
        {lable:"Features",href:"features"},
        {lable:"Integeration",href:"integeration"},
        {lable:"FAQs",href:"faq"},
    
]
export function Header(){
    const[isOpen,setIsOpen]=useState(false)
    return(
        <section className=" px-4 md:px-1 opacity-95 fixed z-50 w-full pt-5 text-white">   

   <div className="border-1 max-w-5xl md:mx-auto  mx-5 px-4 rounded-3xl   border-white/70  bg-black "> 
        <div className="h-16   items-center grid grid-cols-2  lg:grid-cols-3">
        <div>
           <img  src={logoimage} alt="logo image"/>

        </div>
        <div className="lg:flex gap-3 items-center justify-center hidden">
    
        {
            navLinks.map((link)=>(
                <a href={link.href}>{link.lable}</a>
            ))
        }
        </div>
        <div className="flex gap-2 items-center justify-end">
            <div  onClick={()=>{
                setIsOpen(!isOpen)
            }}className="inline md:hidden text-3xl">
         {isOpen ?<IoMdClose /> :<MdMenu/>
         }   
            </div>

            <button className="border-white/70 border-2 hidden md:block  rounded-3xl  text-white h-9 px-5">Log In</button>
            <button className="bg-[#A3E635] text-black  hidden md:block rounded-3xl h-9 px-5">Sign Up</button>
        </div>
    </div>
    <div className="bg-black ">
        <AnimatePresence>

      
        {
            
            isOpen &&   <motion.div  
            initial={{height:0}}
            animate={{height:"auto"}}
            exit={{height:0}}
            
            className="py-2 overflow-hidden ">
                <div className="flex flex-col justify-center items-center gap-3 ">
                {
                navLinks.map((link)=>(
                    <a href={link.href}>{link.lable}</a>
                ))
            }
                </div>
          <div className="flex  flex-col pb-2  gap-3 mt-2 justify-center items-center">
          <button className="border-white/70 border-2   rounded-3xl  text-white h-9 px-5">Log In</button>
          <button className="bg-[#A3E635] text-black   rounded-3xl h-9 px-5">Sign Up</button>
          </div>
               
            </motion.div>
        }
    </AnimatePresence>
    </div>
    </div>
  
    </section>
    )
}