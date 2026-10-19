import { useState} from "react";
import { Link } from "react-router-dom"; 
import { ArrowLeft, ArrowRight, Bed } from "lucide-react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import RoomCard, { type Room } from "../components/ui/Card";
import Hero from "../components/ui/Hero";
import rum_vit from "../assets/Images/Bilder_bokning/Rum_vit.jpg";


const ROOMS: Room[]= [
    {id:1, name:"Delux room", description:"En trevligt rum", image:rum_vit, price:1234, guests:2, href:"/rooms/delux"  },
    {id:2, name:"Enkelrum", description:"En trevligt rum", image:rum_vit, price:1234, guests:2, href:"/rooms/delux"  },
    {id:3, name:"Dubbelrum", description:"En trevligt rum", image:rum_vit, price:1234, guests:2, href:"/rooms/delux"  },
    {id:4, name:"familjerum", description:"En trevligt rum", image:rum_vit, price:1234, guests:2, href:"/rooms/delux"  }
]


export default function Booking(){
    return (
        <>
        <Nav />
        <Hero titel="Hotell Fjellheim" description="Ett varmt hotell" href="/booking" button="Klicka här för att boka rum" />


        <main className="mx-auto w-full max-w-6x px-4 py-16 text-center bg-secondary" >
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md-grid-cols-3 l lg:grid-cols-4" >
                { ROOMS.map(room => ( 
                    <RoomCard key={room.id} room= {room} /> 
                ))}

            </div>
        </main>
        <Footer/>
        </>
    )

}
