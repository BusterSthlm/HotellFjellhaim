import { Link } from "react-router-dom";
import (ArrowRight, ArrowLeft, Presentation, Utensils, BedDouble, Mountain) from "lucide-react";
import PageHero from "../components/ui/Hero";
import Featurebar from "../Components/ui/FeatureBar";

const offers =[

    {image: "/images/konferensrum.jpg", titel: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: "/images/konferensrum.jpg", titel: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: "/images/konferensrum.jpg", titel: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
    {image: "/images/konferensrum.jpg", titel: "dagskonferense", text: "Ett effektivt och inspirerande möte meda llt ni behöver för en lyckad dag.", link: "Från 875 kr / person"},
];
export default function Företag(){
    return(
        <>
        <Hero />
        <Featurebar />

        <section className="container-page py-14">
            <p>Våra erbjudanden</p>
            <h2>Konferens för alla behov</h2>
            <div className="grid gap-8 md:grid-cols- ">
                {offers.map((o) => (
                    <a key={o.titel}
                    href="mailto:booking@fjellheim.se=subject=konferensförfrågan" className="'" 
                    >
            
            </div>


        </section>



        </>
    )
}