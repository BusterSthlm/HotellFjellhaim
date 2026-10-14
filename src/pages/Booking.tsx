import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import RoomCard, { type Room } from "../components/ui/Card";




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
        <main className="flex flex-col items-center justify-center w-full h-screen text-center">
            
            <h1>Boka ditt rum idag</h1>
            <p>Välkommen!</p>

            {/* Rumkort */}
            <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={rooms} />
                ))}

            </div>

            <Footer />
        </main>
        </>
        
    );   
}         