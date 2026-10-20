import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Hero from "../components/ui/Hero";


export default function HomePage(){
    return (
        <>
        <Nav/>
        <Hero  titel="Välkommen till hotell Fjellheim" description="Ett fjällhotell med värme och karaktär" href="/booking"  /> 
        <main className="flex flex-col items-center justify-center w-full  text-center bg-secondary">
        <h1>Upplevelser</h1>
        
        </main>
        <Footer />
        </>
    );
}

