const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <div className="py-24">
        <div className="flex justify-center">
            <div className="border-[#BCE954] uppercase px-2 py-1 rounded-3xl text-white border-2 ">
             
                <span className="text-[#BCE954]">inroduction layers</span>
            </div>
        </div>
        <div className="pt-24 text-4xl md:text-5xl lg:text-6xl text-center px-11">
            <span className="text-white">Your creative process deserves better.</span>
            <span className="text-white/40">{text}</span>
            <span className="text-[#BCE954]">Thats why we built Layers.</span>
        </div>
        
        </div>;
}
