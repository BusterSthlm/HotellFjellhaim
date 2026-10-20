
import Hero from "../components/ui/Hero";

import {useState} from "react";
import {Link } from "react-router-dom";
import {ArrowRight, ArrowLeft, BedDouble, User, Wifi, Bath, Mountain, ParkingCircle, Lock, CheckCircle2} from "lucide-react";


const PRICE_PER_NIGHT = 3333;
const BREAKFUST = 222;
const LATE_CHECKOUT = 214;

const images= ["/images/Bilder_bokning/Rum_vit.jpg"];

const amenities = [
    {icon: BedDouble, text: "QueenSize Bed"},
    {icon: User, text: "1-4 gäster"},
    {icon: Wifi, text: "Gratis Wi-fi"},
    {icon: Bath, text: "Badkar"},
    {icon: Mountain, text: "Utsikt mot bergen"},
    {icon: ParkingCircle, text: "Parkering"},


];

const kr = (n: number) => `${n.toLocaleString("sv-SE")} kr`;

function nightsBetween(from: string, to: string){
    const diff = (new Date(to).getTime() - new Date(from).getTime()) /86_400_00;
    return Math.max(0, Math.round(diff));
}


export default function Boka() {
    const [mainImage, setMainImage] = useState(images[0]);
    const [checkIn, setCheckIn] = useState("2026-04-12");
    const [checkOut, setCheckOut] = useState("2026-04-12");
    const [guests, setGuests ] = useState(2);
    const [breakfust, setBreakfust] = useState(false);
    const [lateCheckOut, setLateCheckOut] = useState(false);
    const [confirmed, setConfirmed] = useState(false);


    const nights = nightsBetween(checkIn, checkOut)
    const roomCost = nights * PRICE_PER_NIGHT;
    const breakfustCost = breakfust ? BREAKFUST * guests * nights : 0;
    const lateCost = lateCheckOut ? LATE_CHECKOUT : 0;
    const total = roomCost + breakfustCost + lateCost;

if (confirmed){
    return (
        <section className="container-page flex flex-col items-center py-24 text-center">
            <CheckCircle2 size={64} className="text-forest"/>
            <h1 className="mt-4 text-5xl">Tack för din bokning</h1>
            <p className="mt-4 max-w-md">Fjällsvit, {nights} nätter för {guests} ({checkIn} - {checkOut}). Total{total} En bekräftelse skickas till din e-post</p>
       <Link to="/" className="btn-brown mt-8">Till startsidan</Link>
        </section>
    );
}

return(
    <section className="container-page grid gap-10">
        <Link to="/" className="mb-6 inline-flex" aria-label="tillbaka">
            <ArrowLeft size={32} />
        </Link>

    <div className="grid gap-10 lg:grid-cols-2 lg:divide-x lg:divide-forest">
        <div className="lg:pr-10">
            <img src={mainImage} alt="Fjällsvit" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <div className="mt-4 grid grid-cols-4 gap-3">
                {images.slice(1).map((img) =>(
                    <button key={img} onClick={() => setMainImage(img) } >
                        <img
                            src={img} alt=""
                        className={`aspect-[3/2] w-full rounded-md object-cover ${mainImage === img ? "ring-2 ring-brown": "" }`}></img>
                    </button>
                ))}

            </div>

            <h2 className="mt-6 text-5xl">Fjällsvit</h2>
            <p className="mt-1 max-w-md font-serif">
                mysig stort rum med härligt fjällkänsla. Här finns dubbelsäng med fluffig HotellTäcke
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                {amenities.map(({icon: Icon, text}) => (
                    <li key={text} className="flex items-center gap-2">
                        <Icon size={18} /> {text}
                    </li>
                ))}
            </ul>
        </div>

        {/*Bokningsformuläret */}
        <form className="lg:pl-10" onSubmit={(e) =>{
           e.preventDefault();
           if (nights > 0 ) setConfirmed(true); 
        }}>
            <h1 className="text-5xl"> Boka</h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                    <span className="text-xl font-light">incheckning</span>
                    <input type="date" value="{checkIn}" onChange={(e) => setCheckIn(e.target.value)}></input>
                </label>

            <label className="block">
                    <span className="text-xl font-light">Utcheckning</span>
                    <input type="date" value="{checkOut}" min={checkIn} onChange={(e) => setCheckIn(e.target.value)}></input>
                </label>
            </div>


            <label className="mt-4 block">
                <span className="text-xl font-light">Gäster</span>
                <select 
                value={guests} 
                onChange={(e)=> setGuests(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border bg-white px-4 py-2 text-lg"
                >
                {[1,2,3,4].map((n)=>(
                    <option key={n} value={n}>{n} {n === 1 ? "vuxen": "vuxna"} </option>
                ))}
            </select>
            </label>


            <div className="mt-6 border-t border-forest pt-4">
                <h3 className="font-sans text-xl font-bold">Tillägg</h3>

                <label className="mt-4 flex cursor-pointer items-start gap-4">
                <input type="checkbox" checked={breakfust} onChange={(e) => setBreakfust(e.target.checked)} className="mt-1 size-8" />
                <span className="flex-1">
                    <span className="block text-xl"> Frukost</span>
                    <span className="text-sm">197 kr /person och natt </span>
                </span>
                <span className="text-xl">{kr(BREAKFUST * guests * nights)}</span>
                </label>
            </div>

        </form>
    </div>
    </section>
    );
}
