import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import {ArrowRight} from "lucide-react";
import ren from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";



const IMG = {
    dag:ren, 
    overnattning:ren,
    skraddarsydd:ren, 
    vandring:ren,
    mat:ren,
    
}
const serif="font['Cormorant_Garmond'l Georgie serif]";

const offers = [
    {
        img: IMG.dag,
        titel: "Dagkonferense", 
        text: "Text här ",
        cta: "från 768 kr/ person",
        href: "#dagkonferense"
    },
     {
        img: IMG.overnattning,
        titel: "Övernattning", 
        text: "text ghär med",
        cta: "från 768 kr/ person",
        href: "#overnattning"
    },
     {
        img: IMG.skraddarsydd,
        titel: "Skräddarsydd", 
        text: "text h",
        cta: "från 768 kr/ person",
        href: "#skaddarsydd"
    }
];

export default function Konferens() {
    return(
       <>
        <Nav/>
        
        <div className="bg-[#E4ECDD] text-[#2B2118]">
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
            <p className="text-sx uppercase">Vårt erbjudande </p>
            <h2>konferens för alla behov</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
                {offers.map((o) => (
                    <article key={o.titel} className="flex flex-col overflow-hidden rounded-lg">
                    <img src={o.img} alt={o.titel} className="aspect-[16/9] w-full object-cover" loading="lazy" />
                    <div className="flex flex-1 flex-col p-5">
                        <h3 className={'${serif} text-2xl'}>{o.titel}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#FAECDD]">{o.text}</p>
                        <a href={o.href} className="group mt-auto flex items-center justify-between pt-5 text-sm"/>
                        <span className="underline underline-offset-4">{o.cta}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />                         
                    </div>
                    </article>
                ))}
            </div>
        </section>

        <section className="grid bg-[#5A3D28] text-[#FAECDD] md:grid-cols-[2fr_1.6fr_1fr]">
            <img src={IMG.vandring} alt="vandring i fjällen" className="h-72 w-full object-cover md:h-full"/>
            <div className="relative flex flex-col justify-center overflow-hidden px-6 py-12 md:px-10">

                <p className="text-sx uppercase ">Mer än bara möten </p>
                <h2 className={'${serif} text-2xl text-4xl md:text-5xl'}>Stärker sammarbete med upplevelse</h2>
                <p className="mt-4 max-w-sm text-sm">Kombinera konferense med aktiviteter som vandring, cykling, fiskning, matupplevelser eller en kväll vid lägerälden , vi hjälper er att skapa ett program som passar ert team.</p>
            <a href="#Aktivitet" className="group mt-8 inline-flex w-fit items-center gap-3 rounded-md hover:bg-black">Utforska aktiviteter</a>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />  
            
            </div>

        </section>
        </div>
      
      
    </>
    )
    
};


