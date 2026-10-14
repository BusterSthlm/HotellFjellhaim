import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function HomePage(){
    return (
        <>
        <Nav/>
        <main className="flex flex-col items-center justify-center w-full  text-center bg-secondary">
        <h1>Boka konferenserum idag </h1>
        <section aria-label="banner" className="px-4 md:px-8 mt-6">
        </section>
        
        </main>
        <Footer />
        </>
    );
}

