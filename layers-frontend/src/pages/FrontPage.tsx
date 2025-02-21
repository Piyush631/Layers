import { Features } from "../components/Features";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Integerations from "../components/Integerations";
import Introduction from "../components/Intoduction";
import { LogoTicker } from "../components/LogoTicker";

export function FrontPage(){
   return (
    <div className="h-auto bg-black ">
        <Header/>
        <Hero/>
        <LogoTicker/>
        <Introduction/>
        <Features/>
        <Integerations/>        
            </div>
   )
}