import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence,motion } from "motion/react";
const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];
export function Faq(){
    const [selectedIndex,setSelectedIndex]=useState(-2)
    const index=9
    return (
        <div className="container mt-26">
            <div className="flex justify-center">
                <div className="text-lime-400 border-lime-400 border-1 px-3 py-1 rounded-2xl">
                 <span>&#10038;</span>   FAQS
                </div>
            </div>
          
                <div className="  text-center  font-regular text-6xl  mt-4 text-white lg:text-8xl mx-10">
                    Questions? We've got{" "} <span className="text-lime-400"> answer</span>
                </div>
        
            <div className=" mt-10 flex flex-col items-center justify-center gap-2  ">
                    {faqs.map((f,fi)=>
                        <div id={f.question} className="bg-neutral-900 pt-4 border-1 border-white/20  pb-4 px-5 lg:w-[500px]  md:w-[450px] w-[310px]   rounded-2xl flex-col text-white">
                            <div className=" flex justify-between gap-2 items-center  " onClick={()=>setSelectedIndex(fi)}> 
                                <div  onClick={()=>setSelectedIndex(fi)} className="text-white/100  ">
                                    {f.question}
                                </div>
                              <div  >
                             { selectedIndex !== fi ? <FaPlus />: <div onClick={()=>{
                                setSelectedIndex(0)
                             }}>  < IoCloseSharp /> </div>

                             
                             } 

                              </div>
                            </div>
                            <AnimatePresence>

                                 { 
                                    selectedIndex === fi &&
                                            <motion.div
                                            initial={{height:0,
                                                marginTop:0
                                            }}
                                            animate={{height:"auto",
                                                marginTop:24
                                            }}
                                            transition={{
                                                ease:"easeInOut",
                                                duration:0.7
                                            }}
                                            exit={{height:0,
                                                marginTop:0}}
                                            
                                            className={twMerge (" overflow-hidden  text-white/70  text-justify",)}>
                                            {f.answer}
                                            </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    )}
            </div>
        </div>
    )
}