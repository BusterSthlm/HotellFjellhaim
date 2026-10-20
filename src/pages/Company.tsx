import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight,Presentation, Utensils, BedDouble, Mountain, Bed } from "lucide-react";
import PageHero from "../components/ui/Hero";
import Featurebar from "../components/layout/FeatureBar";
import "../index.css";
import brasa2 from "../assets/Images/Bilder_bokning/brasa2.jpg";


const offers =[
    

    {image: brasa2, title: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: brasa2, title: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: brasa2, title: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: brasa2, title: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
];
export default function Företag(){

    return(
        <>
        <PageHero image=""
        eyebrow="Konferens på fjellheim"
        titel="Möten som gör skillnad"
        text="Kombinera produktiva dagar nmed natur, god mat och upplevelser. PÅ fjellheim får ni en konferens ut över det vanliga."
        />

        <Featurebar
        items={[
            { icon: Presentation, titel: "Möten och konferenser", text:"Moderna lokaler i anturnära miljö"},
            { icon: Utensils, titel:"Mat & dryck", text:"Moderna lokaler i anturnära miljö"},
            { icon: BedDouble, titel:"Boende", text:"Enkelrum, dubbelrum och sviter"},
            { icon: Mountain, titel:"Aktiviteter", text:"Stärk teamet med upplevelser i naturen"},
           
        ]}
        />


    
        <section className="container-page py-14 bg-secondary">
            <p className="eyebrow text-sm"> Våra erbjudanden</p>
            <h2 className="mb-8 text-4xl">Konferens för alla behov</h2>
            <div className="grid gap-8 md:grid-cols-3 ">
                {offers.map((o) => ( 
                    <a 
                    key={o.title}
                    href="mailto:booking@fjellheim.se?subject=konferensförfrågan"
                    className="group overflow-hidden rounded-lg bg-brown text-cream transition hover:-translate-y-1">

                    <img src={o.image} alt="" className="h-40 w-full object-cover" />
                    <div className="p-5 bg-white">
                        <h3 className="text-2xl">{o.title}</h3>
                        <p className="mt-1 text-sm text-cream/80">{o.text}</p>
                        <p className="mt-5 flex justify between underline">{o.link} <ArrowRight className="transition group-hover:translate-x-1" />
                        </p>
                    </div>
                    </a>

                ))}

            </div>

        </section>

        <section className="grid bg-brown text-cream md:grid-cols-[1.2fr_1.2fr_0.8fr]">
            <img src="/images/vandring.jpg" alt="vandrare på fjället" className="h-72 w-full object cover md:h-full" />
            <div className="p-8 md:p-12">
                <p className="eyebrow"> Mer än bara möten</p>
                <h2 className="text-5xl leading-tight">Stärk samarbetet med upplevelser</h2>
                <p className="mt-4 font-light"> Kombinera konferens med aktiviteter som vandring, cykling, bastu, matupplevelser, eller en kväll vid lägerelden. Vi hjälper er att skapa ett program som passar ert team </p>
                <Link to="/upplevelser" className="btn mt-8 bg black text-white hover:bg-ink">Utforska aktiviteter <ArrowRight /></Link>
            </div>
            <div className="hidden flex-col gap-2 md:flex">
                <img src="/images/ratt.jpg" alt="" className="h-1/2 w-full object-cover" />
                <img src="/images/skidor-liten.jpg" alt="" className="h-1/2 w-full object-cover" />


            </div>

        </section>

        </>
    )


};

