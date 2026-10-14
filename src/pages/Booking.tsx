import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import RoomCard, { type Room } from "../components/ui/Card";
import Hero from "../components/ui/Hero"




const ROOMS: Room[] = [
{
 id: 1,
 name: "Deluxe Room",
 description: "En lujig deluxe-rum med utsikt.",
 image: "/images/bilder_bokning/Rum_vit.jpg",
 price: 1500,
 guests: 2,
 href: "/rooms/deluxe"
 }, 
  ];

export default function Activities() {

    return (
        <> {/* Wrapper div för att innehålla allt innehåll */ }
        <Nav />
        <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4  py-16 md-grid-cols-4 items-center justify-center w-full h-screen text-center bg-secondary">
            
            <Hero titel="välkommen till hotell Fjellheim" description="Ett fjällhotell med värme och karaktär" href="/booking" button="Klicka här för att boka" /> 
            <div className="md:col-span-4">    
                <h1 className="text-3xl colr-primary">Boka ditt rum idag</h1>
                <p>Välkommen!</p>
            </div>

            {/* Rumkort */}
            <div className=" mt-8 flex-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>
            <div className=" mt-8 flex-col-span-2 grid-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>
            
        </main>
        <Footer />
        </>
        
    );   
}         