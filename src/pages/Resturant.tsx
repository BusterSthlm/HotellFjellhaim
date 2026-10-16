import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Hero from "../components/ui/Hero";
import { ArrowRight, CalenderDays, Clock, Coffee, Coins, Leaf, Wine} from "lucide-react";
import ren from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";

const IMG={
    hero: ren,
    frukost: ren,
    retsturang1: ren,
    resturang2: ren,
    miljo: ren,
    host: ren

}

const serif= "font-['Coromant_Garmond']";
const label ="text-xs uppercase tracking-[0.2em]";

const features = [
    {
        icon: Leaf, titel:"lokala råvaror", text:"från närområdet"
    },
    {
        icon: CalenderDays, titel:"lokala råvaror", text:"från närområdet"
    },
    {
        icon: Wine, titel:"lokala råvaror", text:"från närområdet"
    },
    {
        icon: Coffee, titel:"lokala råvaror", text:"från närområdet"
    },
    {
        icon: Coins, titel:"lokala råvaror", text:"från närområdet"
    },
    {
        icon: Clock, titel:"lokala råvaror", text:"från närområdet"
    },
]
const hours = [
   {titel: "Frukostbuffe", rows: [["måndag-fredag", "07:00-10:00"], ["lördag-söndag", "07:30-10:30"]]},
   {titel: "Resturang", rows: [["måndag-fredag", "07:00-10:00"], ["lördag-söndag", "07:30-10:30"]]},
    {titel: "Bar", rows: [["måndag-fredag", "07:00-10:00"], ["lördag-söndag", "07:30-10:30"]]},
];


export default function MatOchDryck(){
    return(
        <>
        <Nav/>
        <main className="bg-[#FAECDD] text-[#2b2118]">
            <section className="realtive flex min-h-[420px] items-end bg-cover bg-center text-[#f4ECDD]" style={{backgroundImage:'url{IMG.hero}'}}>
            <p className="{label}">Mat och dryck</p>
            <h1>Smak som hör hemma här</h1>
            <p>lokal råvaror och säsonginspirerade måltider som gör varje måltid lite speciell</p>
            </section>

            <section className="border-b border-[#2b2118]">
                <ul className="mx-auto grid max-w-6xl grid cols-2 md:grid cols-4">
                </ul>

                <p>{titel}</p>
                <p>{text}</p>

            </section>


            <section className="grid md: grid-cols-2">
                <img src= {IMG.frukost} alt="Frukostbuffe" className="h-72 w-full object cover md:h-full"/>
                <div className="bg-[#3f4a35] px-6 py-12 text-[#FAECDD] md:px-12">
                    <p className="{label}">Frukost</p>
                    <h2 className="">Njut av en generös frukostbuffe med lokala råvaror , nybakat bröd, varma och kalla alternativ</h2>
                </div>

            </section>
        </main>

        </>
    )
}


