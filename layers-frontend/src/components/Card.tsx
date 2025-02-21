interface cardel{
    title:string,
    description:string,
    children?:React.ReactNode
}

export function Cards({title,description,children}:cardel){
    
    return (
        <div className="bg-neutral-900 border w-[330px] rounded-3xl border-white/10 p-6">
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