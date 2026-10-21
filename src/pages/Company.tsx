import { Link } from "react-router-dom";
import { ArrowRight, Presentation, Utensils, BedDouble, Mountain } from "lucide-react";
import FeatureBar from "../components/layout/FeatureBar";
import PageHero from "../components/layout/PageHero";
import skog from "../assets/Images/Bilder_aktiveter/Skoig.jpg";


const offers = [
  { image: skog, title: "Dagskonferens", text: "Ett effektivt och inspirerande möte med allt ni behöver för en lyckad dag.", link: "Från 695 kr / person" },
  { image: skog, title: "Konferens med övernattning", text: "Kombinera arbete med avkoppling och goda måltider i en unik miljö.", link: "Från 1 995 kr / person" },
  { image: skog, title: "Skräddarsydd konferens", text: "Vi hjälper er att skapa ett upplägg som passar era mål och önskemål!", link: "Kontakta oss för offert" },
];

export default function Foretag() {
  return (
    <>
      <PageHero
        image="../assets/Images/Bilder_aktiveter/Skoig.jpg"
        eyebrow="Konferens på Fjällheim"
        title="Möten som gör skillnad."
        text="Kombinera produktiva dagar med natur, god mat och upplevelser. På Fjällheim får ni en konferens utöver det vanliga."
      />

      <FeatureBar
        items={[
          { icon: Presentation, titel: "Möten och konferens", text: "Moderna lokaler i naturnära miljö" },
          { icon: Utensils, titel: "Mat och dryck", text: "Lokala råvaror och skräddarsydda menyer" },
          { icon: BedDouble, titel: "Boende", text: "Enkelrum, dubbelrum och sviter" },
          { icon: Mountain, titel: "Aktiviteter", text: "Stärk teamet med upplevelser i naturen" },
        ]}
      />

      <section className="container-page py-14">
        <p className="eyebrow">Våra erbjudanden</p>
        <h2 className="mb-8 text-4xl">Konferens för alla behov</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((o) => (
            <a
              key={o.title}
              href="mailto:booking@fjallheim.se?subject=Konferensförfrågan"
              className="group overflow-hidden rounded-lg bg-brown text-cream transition hover:-translate-y-1"
            >
              <img src={o.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl">{o.title}</h3>
                <p className="mt-1 text-sm text-cream/80">{o.text}</p>
                <p className="mt-5 flex justify-between underline">
                  {o.link} <ArrowRight className="transition group-hover:translate-x-1" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="grid bg-brown text-cream md:grid-cols-[1.2fr_1.2fr_0.8fr]">
        <img src="/images/vandring.jpg" alt="Vandrare på fjället" className="h-72 w-full object-cover md:h-full" />
        <div className="p-8 md:p-12">
          <p className="eyebrow">Mer än bara möten</p>
          <h2 className="text-5xl leading-tight">Stärk samarbetet med upplevelser.</h2>
          <p className="mt-4 font-light">
            Kombinera konferensen med aktiviteter som vandring, cykling, bastu, matupplevelser eller en kväll vid
            lägerelden. Vi hjälper er att skapa ett program som passar ert team.
          </p>
          <Link to="/upplevelser" className="btn mt-8 bg-black text-white hover:bg-ink">
            Utforska aktiviteter <ArrowRight />
          </Link>
        </div>
        <div className="hidden flex-col gap-2 md:flex">
          <img src="/images/ratt.jpg" alt="" className="h-1/2 w-full object-cover" />
          <img src="/images/skidor-liten.jpg" alt="" className="h-1/2 w-full object-cover" />
        </div>
      </section>
    </>
  );
}



{/**

import { Link } from "react-router-dom";
import FeatureBar from "../components/layout/FeatureBar.tsx";
import { ArrowRight, Presentation, Utensils, BedDouble, Mountain } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";

<<<<<<< HEAD

const offers = [
  {
    id: 1,
    image: "./assets/images/Bilder_bokning/yta.jpg",
    title: "Dagskonferens",
    text: "Ett effektivt och inspirerande möte med allt ni behöver för en lyckad dag.",
    price: "Från 875 kr / person",
  },
  {
    id: 2,
    image: "/images/konferensrum.jpg",
    title: "Konferens med övernattning",
    text: "Kombinera produktiva möten med god mat och en avkopplande natt.",
    price: "Kontakta oss för pris",
  },
  {
    id: 3,
    image: "/images/konferensrum.jpg",
    title: "Möten och aktiviteter",
    text: "Kombinera konferensen med upplevelser och aktiviteter i fjällmiljö.",
    price: "Kontakta oss för pris",
  },
  {
    id: 4,
    image: "/images/konferensrum.jpg",
    title: "Skräddarsydd konferens",
    text: "Vi hjälper er att skapa ett upplägg som passar just ert företag.",
    price: "Enligt offert",
  },
];

export default function Foretag(){
  return(
    <>
    <PageHero
    image="/images/Bilder_bokning/brasa2.jpg"
    eyebrow="Konferens på Fjellheim"
    titel="Möten som gör skillnad"
    text="KOmbinera produktiva dagar med natur, god mat och upplevelser. På fjellheim får ni en konferens utöver det vanliga."
    />

    <FeatureBar 
    items={[
      { icon: Presentation, titel: "Möten och konferens", text: "Mderna lokaler i naturnära miljö"},
      { icon: Utensils, titel: "Möten och konferens", text: "Mderna lokaler i naturnära miljö"},
      { icon: BedDouble, titel: "Möten och konferens", text: "Mderna lokaler i naturnära miljö"},
      { icon: Mountain, titel: "Möten och konferens", text: "Mderna lokaler i naturnära miljö"},
    ]}
    />


<section className="container-page py-14">
<p className="mb-8 text-4xl"> Våra erbjudande</p>
<h2 className="grid gap-8 md:grid-cols-4"> Konferens för alla behov</h2>

    <div className="grid gap-8 md:grid-cols-3">
      {offers.map((o) => (
        <a
        key={o.title}
        href="mailto:booking@fjellheim.se?subject-konferenseförfrågan"
        className=" group overflow hidden rounded-lg bg-tertiary text-white transition hover:-translate-y-1"
        >
        
        <img src={o.image} alt="" className="h-40 w-full object-cover" />
        <div className="p-5">
          <h3 className="txt-2xl">{o.title}</h3>
          <p className="mt-1 text-sm text-secondary">{o.text}</p>
          <p className="mt-5 flex justify-betwen underline">
            {o.link} <ArrowRight className=" transition group-hover:translate-x-1" />
          </p>
        </div>
        </a>
      ))}
    </div>
</section>

<section>
<img src="/images/vandring.jpg" alt="vandrare på fjället" className="h-72 w-full object-cover md:h-full" />
<div className="p-8 md:p-12">
      <p className="eyebrow">Mer än bara möten</p>
      <h2 className="text-5xl leading-tight">Stärker sammarbeten med upplevser.</h2>
      <p className="mt-4 font-light">
        Kombinerat med aktiviteter som vandring, cykling, bastu, matupplevelser eller en kväll vid lägerelden. Vi hjälper er att skapa et program somm passasr ert team. 

      </p>
      <Link to="/upplevelser" className="btn mt-8 bg-green text-white hover:bg-brown">
      Utforska aktiviteter <ArrowRight />
      </Link>
</div>
  <div className="hidden flex-col gap-2 md:flex">
    <img src="/images/ratt.jpg" alt="" className="h1/2 w-full obejct-cover" />
    <img src="/images/skidor-liten.jpg" alt="" className="h1/2 w-full obejct-cover" />
  </div>

</section>

</>
);
=======
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
>>>>>>> 0d58d47f62f169e1254920b71af2d998e22df6f6
}
/}
*/}