import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import bild from "../assets/Images/Bilder_startsida/Hotellet_vinter .jpg";
import Hero from "../components/ui/Hero";


const inputClass= "w-70 h-auto rounded-md border text-sm bg-secondary p-4";
const labelClass= "md-1.5 block text-sm font-medium text-primary w-50 m-2";   


export default function HomePage(){
    return (
        <>
        <Nav/>
        <Hero  titel="Kontakt oss" description="Ett fjällhotell med värme och karaktär" href="/booking"  /> 
        <main className="flex flex-col justify-center item-center text-center bg-secondary">

        

        <h1>Kontakta oss  </h1>
         <p>Har du frågor kan du kontakta oss här eller genom att ringa. </p>
        <section aria-label="banner" className="px-4 md:px-8 mt-6 bg-white">
        </section>
        
        <label htmlFor="email" className={labelClass}>namn</label>
        <input id="email" name="email" type="email" placeholder="exempel@gmail.com" className={inputClass}/>
        <label htmlFor="email" className={labelClass}>Telefon</label>
        <input id="email" name="email" type="email" placeholder="exempel@gmail.com" className={inputClass}/>

        <label htmlFor="email" className={labelClass}>epost</label>
        <input id="email" name="email" type="email" placeholder="exempel@gmail.com" className={inputClass}/>
        
        
        <label htmlFor="message" className="{labelClass}"> meddelande* </label>
        <textarea id="message" name="message" required placeholder="Skriv ditt meddelandet här.." className={inputClass} />

        <button className="bg-primary text-white outline-1 rounded-md p-5 w-40">
            Skicka meddelande
        </button>
        
        
        </main>
        <Footer />
        </>
    );
}