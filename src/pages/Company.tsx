import Featurebar from "../components/layout/FeatureBar.tsx";
import { ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";

const offers = [
  {
    id: 1,
    image: "/images/konferensrum.jpg",
    titel: "Dagskonferens",
    text: "Ett effektivt och inspirerande möte med allt ni behöver för en lyckad dag.",
    price: "Från 875 kr / person",
  },
  {
    id: 2,
    image: "/images/konferensrum.jpg",
    titel: "Konferens med övernattning",
    text: "Kombinera produktiva möten med god mat och en avkopplande natt.",
    price: "Kontakta oss för pris",
  },
  {
    id: 3,
    image: "/images/konferensrum.jpg",
    titel: "Möten och aktiviteter",
    text: "Kombinera konferensen med upplevelser och aktiviteter i fjällmiljö.",
    price: "Kontakta oss för pris",
  },
  {
    id: 4,
    image: "/images/konferensrum.jpg",
    titel: "Skräddarsydd konferens",
    text: "Vi hjälper er att skapa ett upplägg som passar just ert företag.",
    price: "Enligt offert",
  },
];

export default function Foretag() {
  return (
    <>
      <Header />
      <Hero
        titel="Konferens på Fjällheim"
        description="Inspirerande möten, god mat och minnesvärda upplevelser i fjällmiljö."
        href="#erbjudanden"
        button="Se våra erbjudanden"
      />

      <section className="container-page py-14">
        <p className="font-garamond text-lg text-[#72492C]">Våra erbjudanden</p>

        <h2 className="font-garamond text-4xl text-[#3a2516] mb-10">
          Konferens för alla behov
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <article key={o.id} className="overflow-hidden bg-white shadow-sm">
              <img
                src={o.image}
                alt={o.titel}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-garamond text-2xl text-[#3a2516]">
                  {o.titel}
                </h3>

                <p className="font-lato text-base leading-relaxed mt-3">
                  {o.text}
                </p>

                <p className="font-lato text-sm mt-4 text-[#72492C]">
                  {o.price}
                </p>

                <a
                  href={`mailto:booking@fjellheim.se?subject=${encodeURIComponent(
                    `Konferensförfrågan – ${o.titel}`,
                  )}`}
                  className="mt-5 inline-flex items-center gap-2 font-lato text-[#72492C] hover:underline"
                >
                  Skicka förfrågan
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
