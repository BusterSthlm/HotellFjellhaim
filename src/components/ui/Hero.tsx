import { Link } from "react-router-dom";
import Heroimage from "../../assets/Images/Bilder_startsida/bergen.jpg"


type heroProps = {
    titel: string;
    description: string;
    href: string;
    button?: string;
}

export default function Hero ({ titel, description, href, button = "Boka rum"}: heroProps){
    return(
        <section className="relative z-10 mx-auto flex min-h-[36rem] w-full flex-col justify-center space-y-8 overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
            
            <img src={Heroimage} alt="" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center text-white">
                <h1 className="text-4xl font-bold text-white md:text-6xl">{titel}</h1>
                <p className="pt-4" >{description}</p>
                <Link to={href} className="mt-8 inline-block w-fit text-white rounded-md bg-primary px-6 py-3 font-medium hover:opacity-90">{ button}</Link>
            </div>
        </section>
    )

}