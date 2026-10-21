type props = {image: string, eyebrow: string, title:string, text:string};

export default function PageHero({image ,eyebrow, title, text}: props){
    return(
        <section className="relative flex min-h-[340px] items-end bg-cover bg-center md:min-h-[420px]"
    style={{backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="container-page relative pb-10 text-white">
                <p className="eyebrow font-semibold">{eyebrow}</p>
                <h1 className="max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
                <p className="text font-semibold">{text}</p>
            </div>

        </section>
    );
}