import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Hero from "../components/ui/Hero";

export default function Activities() {

    return (
        <><Nav />
        <Hero titel="Välkommen till hotell Fjellheim" description="Ett fjällhotell med värme och karaktär" href="/booking" button="Klicka här för att boka" />
        <main className="flex flex-col items-center justify-center w-full  text-center bg-secondary">

            <h1>Activities</h1>
            <p>Welcome to the activities page!</p>
            <Footer />
        </main></>
    );
}