import logoimage from "../assets/logo.svg"

const navLinks=[
    
        {lable:"contact ",href:"#"},
        {lable:"Privacy Policy",href:"features"},
        {lable:"Terms & Conditions",href:"integeration"},
    
    
]


export function Footer(){
    return (
       
               <section className=" py-6  mt-4  bg-black px-4  w-full pt-5 text-white">   

   
<div className="h-16     mx-6 px-2 rounded-3xl  items-center flex  flex-col gap-4   bg-black lg:grid lg:grid-cols-2  ">
<div>
   <img  className=" w-28 " src={logoimage} alt="logo image"/>

</div>
<div className="flex gap-1 md:gap-3  text-white/60  text-sm md:text-sm md:items-center md:justify-end md:px-5">

{
    navLinks.map((link)=>(
        <a href={link.href}>{link.lable}</a>
    ))
}
</div>

</div>
</section>
        
    )
}