import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Hero from "../components/ui/Hero";

type Card = {
    image:string;
    titel:string;
    text:string;
    linkLabel:string;
    href:string;
}

const card: Card[]= [
    {
        image: "/images/bilder_om/sporthotellet.jpg", 
        titel: "möten och konferensen",
        text: "text",
        linkLabel: "se våra lokaler",
        href: "#konferens",  

    }, 
    {
        image: "/images/bilder_om/sporthotellet.jpg", 
        titel: "Boende",
        text: "texter",
        linkLabel: "se våra rum",
        href: "#konferens",  

    }, 
]

export default function FeaturedCards(){
    return(
        <section className="bg white py-20">
            <div className="grid max-w-6xl gap-12 px-6 md:gap-16">

            {FeaturedCards.map(card)=> (
                <article key={card.titel} className="group flex flex-col"></article>
                <div className="overflown-hidden">
                    <img src={card.image} className="h-full w-full object cover transition transtion-transform-duration-500 group hover:scale-105"> 
                    </img>
                </div>

            )};

            </div>
        </section>
    )
}

export default function HomePage(){

    return (
        <>
        <Nav/>
        <Hero  titel="Välkommen till hotell Fjellheim" description="Ett fjällhotell med värme och karaktär" href="/booking"  /> 
        <main className="flex flex-col items-center justify-center w-full  text-center bg-secondary">
        <h1>Boka konferenserum idag </h1>
        <section aria-label="banner" className="px-4 md:px-8 mt-6">
        </section>

        <section aral-label="Info" className="bg white m-5 p-10 justify-center">
            <div className="m-1 text-center">
                <h1>Möten och konferenser </h1>
                <p>Modern lokaler i naturlig miljö</p>
            </div>

        </section>
        
        </main>
        <Footer />
        </>
    );
}

