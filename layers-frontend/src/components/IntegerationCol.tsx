import { type IntegerationType } from "./Integerations"
import { twMerge } from "tailwind-merge";
export function Integerationcols(props:{integerations:IntegerationType
    className?:string
}){
    const{integerations,className}=props
    return (
        <div>
              <div className={twMerge (" flex flex-col   justify-center items-center gap-2 w-56",className)}>
                        {integerations.map(i=>
                            <div className="bg-neutral-900  rounded-2xl flex flex-col justify-center items-center py-6  px-4">
                                <div><img src={i.icon} className="h-20 w-20"/></div>
                                <div className="text-white mt-4 text-xl font-medium">{i.name} </div>
                                <div className="text-white/60 mt-4  text-center">{i.description}</div>

                            </div>
                        )}
                    </div>
        </div>
    )
}