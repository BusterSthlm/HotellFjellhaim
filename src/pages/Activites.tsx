import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Hero from "../components/ui/Hero";
import Card, {type CardData } from "../components/ui/card_info";
import bild from "../assets/Images/Bilder_startsida/IMG_8138.jpg";

const ACTIVITIES: CardData[] = [

{id:1, name: "skidåkning", description: "..", image: bild, href: "/activity/skidor"}, 
{id:2, name: "Vandring", description: "..", image: bild, href: "/activity/skidor"},
{id:3, name: "Bada utomhus", description: "..", image: bild, href: "/activity/skidor"}
]
    
export default function Acitvities(){
    return (
        <>
        <Nav />
        <Hero titel="Hotell Fjellheim" description="Ett varmt hotell" href="/booking" button="Klicka här för att boka rum" />

        <main>
            <h1>Upplevelser</h1>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {ACTIVITIES.map(item => (
                    <Card key={item.id} card = {item} />
                ))}
            </div>
        </main>

        <Footer/>

        </>
    )
}