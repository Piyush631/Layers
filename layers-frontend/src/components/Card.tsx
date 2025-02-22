import { twMerge } from "tailwind-merge"

interface cardel{
    title:string,
    description:string,
    children?:React.ReactNode
    className?:string
}

export function Cards({title,description,children,className}:cardel){
    
    return (
        <div className={twMerge("bg-neutral-900 border w-[330px] rounded-3xl border-white/10 p-6",className)}>
        <div className="flex  items-center justify-center">
        {children}
        </div>
        <div className="text-4xl mt-9">
{
    title
}        </div>
        <div className="text-white/50 mt-3">
          {description}
        </div>
    </div>
    )
}