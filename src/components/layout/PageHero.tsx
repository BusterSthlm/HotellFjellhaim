type props = {image: string, eyebrow: string, titel:string, text:string};

export default function PageHero({image,eyebrow, titel, text}: props){
    return(
        <section className="relativt flex min-h-[340px] items-end bg-cover bg-center md:min-h-[420px]"
        style={{backgroundImage: `url($(image))` }}
        >
            <div className=" absolut inset-0  bg-gradient-to-r from-black/60 to-transparent" />
            <div className="container-page relativt pb-10 text-white">
                <p className="eyebrow font-semibold">{eyebrow}</p>
                <h1 className="max-w-md text-4xl font-bold leading-tight md:text-5xl">{titel}</h1>
                <p className="text font-semibold">{text}</p>
            </div>
            
            

        </section>
    );
}