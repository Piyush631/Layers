export function Tryit(){
    return (
        <section className="mt-20">
            <div className="overflow-x-clip p-4 flex ">
                <div className="flex flex-none   lg:text-6xl text-5xl font-medium  gap-16">
                    {Array.from({length:10}).map((_, i) =>
                    (
                        <div key={i} className=" flex justify-center items-center gap-15">
                            <span className="text-lime-400">&#10038;</span>
                            <span className="text-white ">Try it for free</span>
                        </div>
                    ))
                    
                    }
                </div>
            </div>
        </section>
    )
}