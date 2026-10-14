import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import RoomCard, { type Room } from "../components/ui/Card";
import Hero from "../components/ui/Hero";
import rum_vit from "../assets/Images/Bilder_bokning/Rum_vit.jpg";



const ROOMS: Room[] = [
{
 id: 1,
 name: "Deluxe Room",
 description: "En lujig deluxe-rum med utsikt.",
 image: rum_vit,
 price: 1500,
 guests: 2,
 href: "/rooms/deluxe"
 }, 
  ];

export default function Activities() {

    return (
        <> {/* Wrapper div för att innehålla allt innehåll */ }
        <Nav />
        
        <Hero  titel="Välkommen till hotell Fjellheim" description="Ett fjällhotell med värme och karaktär" href="/booking" button="Klicka här för att boka" /> 

        

        <main className="mx-auto flex-row Sm:grid-cols-4 max-w-6xl gap-6 px-4 py-16 md-grid-cols-4  w-full text-center bg-secondary"> {/*items-center justify-center */}

            {/* Rumkort */}
            <div className="  grid mt-8 flex-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>
            
            {/* Rumkort */}
            <div className=" grid  mt-8 flex-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>
            
            {/* Rumkort */}
            <div className=" grid  mt-8 flex-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>

                {/* Rumkort */}
            <div className=" grid  mt-8 flex-col sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ROOMS.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}

            </div>

            
       
        </main>
        
        </>
        
    );   
}         