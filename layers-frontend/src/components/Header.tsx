import logoimage from "../assets/logo.svg"
import { MdMenu } from "react-icons/md";

const navLinks=[
    
        {lable:"home",href:"#"},
        {lable:"Features",href:"features"},
        {lable:"Integeration",href:"integeration"},
        {lable:"FAQs",href:"faq"},
    
]
export function Header(){
    return(
        <section className=" px-4 md:px-1 w-full pt-5 text-white">   

   
        <div className="h-16  max-w-5xl md:mx-auto  mx-5 px-4 rounded-3xl  items-center border-1 border-white/70  bg-black grid grid-cols-2  lg:grid-cols-3">
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
            <div className="inline sm:hidden text-3xl">
            <MdMenu />
            </div>

            <button className="border-white/70 border-2 hidden md:block  rounded-3xl  text-white h-9 px-5">Log In</button>
            <button className="bg-[#A3E635] text-black  hidden md:block rounded-3xl h-9 px-5">Sign Up</button>
        </div>
    </div>
    </section>
    )
}