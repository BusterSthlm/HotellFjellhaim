
import { useState } from "react";
import { ArrowLeft, ArrowRight, Bed } from "lucide-react";
import { Link } from "react-router-dom";
import skidor from "../assets/Images/Bilder_aktiveter/skidor.jpg";
import skog from "../assets/Images/Bilder_aktiveter/skog.jpg";
import ren from "../assets/Images/Bilder_aktiveter/ren.jpg";
import Hero from "../components/ui/Hero";

type Activity = { image:string, titel: string, text: string};
type Season = "Vinter"  | "Sommar";


const Aktivitet: Record <"Vinter" | "Sommar", Activity[]> = {
    Vinter: [
        {image: skidor, titel:"Skidakning", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: skog, titel:"Skidakning2", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: skog, titel:"Skidakning3", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: skog, titel:"Skidakning4", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: skog, titel:"Skidakning5", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
    ],
    Sommar: [
        {image: ren, titel:"Skidakning6", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: ren, titel:"Skidakning7", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: ren, titel:"Skidakning8", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: ren, titel:"Skidakning9", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
        {image: ren, titel:"Skidakning10", text:"Idre himmelfjäll är den perspekta skidsystemet för familjen och den som gillar långa sköna promenader" },
    ]
}

export default function Upplevelser(){
    const [season, setSeason] = useState <Season>("Vinter");

    return(
        <>
         <Hero titel="Hotell Fjellheim" description="Ett varmt hotell" href="/booking" button="Klicka här för att boka rum" />
        
        <section className="container-page py-10 mx-auto max-w-7xl bg-[#f7eedf]">
            <Link to="/" className="flex items-center gap-2 text-xl"><ArrowLeft />Tillbaka</Link>
       

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-4xl">
                Att göra {season === "Vinter" ? "vinter": "vår, sommar & Höst "} 
            </h1>

            <div className="flex rounded md-border">
                

                {(["Vinter", "Sommar"] as const).map((s) => (
                    <button 
                    key={s} 
                    onClick={() => setSeason(s)} 
                    className={`px-5 py-2 font-serif text-lg capitalize ${season === s ? "bg-brown text-cream": "text-brown" 

                    }`} 
                    >
                    {s} 
                    </button>
                ))}
            </div>
        </div>


<div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-24">
    {Aktivitet[season].map((a) =>(
        <article key={a.titel} className="overflow-hidden rounded-lg bg-white shadow-md">
            <img src={a.image} alt={a.image} className="64 w-full object cover md:h-80" /> 
                <div className="p-6 md:px-16">
                    <h2 className="text-3xl font-semibold">{a.titel}</h2>
                    <p className="mt-3">{a.text}</p>
                </div>

        </article>

    ))}
 
</div>


        </section>
        </>
        );
    }

