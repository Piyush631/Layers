import Figma from "../assets/figma-logo.svg"
import Notion from "../assets/notion-logo.svg"
import Slack from "../assets/slack-logo.svg"
import Relume from "../assets/relume-logo.svg"
import Framer from "../assets/framer-logo.svg"
import GitHub from "../assets/github-logo.svg"
import { Integerationcols } from "./IntegerationCol"
const integrations = [
    { name: "Figma", icon: Figma, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: Notion, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: Slack, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: Relume, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: Framer, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: GitHub, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegerationType=typeof integrations

export default function  Integerations(){
    return(
        <div className="flex flex-col lg:flex-row  gap-8 px-24 ">
            <div className="flex flex-col justify-center  " >
            <div className="border-[#BCE954]  w-52 uppercase px-2 py-1 rounded-3xl text-white border-2 ">
             
             <div className="text-[#BCE954] text-center">inroduction layers</div>
         </div>
            <div className="text-white text-5xl lg:text-7xl   mt-8">
            Plays with well <span className="text-[#BCE954]">others</span>
            </div>
            <div className="text-white/70 mt-4 md:mr-24  lg:mr-20  ">
            Layers samelessly connect with favourite tool,make it easy to plug into any workflow and collaborates accross platform
            </div>
            </div>
            <div>
                <div className="  flex  gap-3 lg:h-[700px] h-[400px]  overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
                  <Integerationcols integerations={integrations} />
                  <Integerationcols integerations={integrations.slice().reverse()}  className="hidden md:block"/>
                </div>
            </div>
        </div>
    )
}