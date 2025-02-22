import { Faq } from "../components/Faq";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Integerations from "../components/Integerations";
import Introduction from "../components/Intoduction";
import { LogoTicker } from "../components/LogoTicker";
import { Tryit } from "../components/TryIt";

export function FrontPage(){
   return (
    <div className="h-auto bg-black ">
        <Header/>
        <Hero/>
        <LogoTicker/>
        <Introduction/>
        <Features/>
        <Integerations/> 
        <Faq/>
        <Tryit/>
        <Footer/>       
            </div>
   )
}