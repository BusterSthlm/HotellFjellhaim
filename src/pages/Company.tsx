import Featurebar from "../components/layout/FeatureBar.tsx";
import { ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";

type Card = {
  image: string;
  titel: string;
  text: string;
  linkLabel: string;
  href: string;
};

const cards: Card[] = [
  {
    image: "/images/bilder_om/sporthotellet.jpg",
    titel: "Möten och konferenser",
    text: "Moderna lokaler i en naturnära miljö.",
    linkLabel: "Se våra lokaler",
    href: "#konferens",
  },
  {
    image: "/images/bilder_om/sporthotellet.jpg",
    titel: "Boende",
    text: "Hitta ett rum för en avkopplande vistelse.",
    linkLabel: "Se våra rum",
    href: "#boende",
  },
];

function FeaturedCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        {cards.map((card) => (
          <article key={card.titel} className="group flex flex-col">
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.titel}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold">{card.titel}</h2>

            <p className="mt-2">{card.text}</p>

            <a href={card.href} className="mt-4 underline">
              {card.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />

      <Hero
        titel="Välkommen till hotell Fjellheim"
        description="Ett fjällhotell med värme och karaktär"
        href="/booking"
      />

      <main className="flex w-full flex-col items-center bg-secondary text-center">
        <h1 className="mt-8 text-3xl font-semibold">Boka konferensrum idag</h1>

        <section
          id="konferens"
          aria-label="Möten och konferenser"
          className="mt-6 w-full px-4 py-10 md:px-8"
        >
          <h2 className="text-2xl font-semibold">Möten och konferenser</h2>
          <p>Moderna lokaler i naturlig miljö.</p>
        </section>

        <section
          id="boende"
          aria-label="Boende"
          className="w-full px-4 py-10 md:px-8"
        >
          <h2 className="text-2xl font-semibold">Boende</h2>
        </section>

        <FeaturedCards />
      </main>

      <Footer />
    </>
  );
}
