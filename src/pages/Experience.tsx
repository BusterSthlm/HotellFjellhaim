import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { ArrowLeft } from "lucide-react";
import berg from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/Berg.png";
import berg2 from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/berg2.png";
import skidor from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/Skidor.png";
import skoter from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/skoter.png";
import vandring from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/vandring.png";
import vinter from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/Vinter.png";
import cykling from "../assets/Images/Bilder_aktiveter/Bilder_upplevelse/cykeltur.png";
import bastu from "../assets/Images/Bilder_bokning/Bastu2.jpg";
import skoghoger from "../assets/grafisk-material/Illustrations/Skog/Skog_hoger.svg";
import skogvanster from "../assets/grafisk-material/Illustrations/Skog/Skog_vanster.svg";
import PageHero from "../components/layout/PageHero";
import headerimage from "../assets/Images/Bilder_startsida/IMG_7813.jpg";

import paket1 from "../assets/Images/Bilder_paket/paket1.png";
import paket2 from "../assets/Images/Bilder_paket/paket2.png";
import paket3 from "../assets/Images/Bilder_paket/paket3.png";

const paket: Activity[] = [
  {
    image: paket1,
    title: "Fjällheims Julvecka",
    text: "Fira jul och nyår i en varm och personlig fjällmiljö mitt i Idre...",
  },
  {
    image: paket2,
    title: "Fjällheims Julweekend",
    text: "Fira jul och nyår i en varm och personlig fjällmiljö mitt i Idre...",
  },
  {
    image: paket3,
    title: "Mellandagar på Fjällheim",
    text: "Fira mellandagarna på Fjällheim i Idre med tre nätters boende...",
  },
];

type Season = "vinter" | "sommar";
type Activity = { image: string; title: string; text: string };

const seasonCards: {
  image: string;
  title: string;
  text: string;
  href: string;
}[] = [
  {
    image: vinter,
    title: "Att göra vinter",
    text: "Upptäck längdspår, skidbackar och vinteräventyr i Idres vackra fjällmiljö.",
    href: "/upplevelse/vinter",
  },
  {
    image: berg,
    title: "Att göra vår, sommar & höst",
    text: "Vandra, fiska och cykla – eller koppla av i bastun efter en dag ute i naturen.",
    href: "/upplevelse/sommar",
  },
];

const activities: Record<Season, Activity[]> = {
  vinter: [
    {
      image: vinter,
      title: "Längdskidor",
      text: "Snöra på dig skidorna och följ spåren genom skog och fjäll. Här finns fina möjligheter till både kortare turer och längre utflykter.",
    },
    {
      image: skidor,
      title: "Utförsåkning",
      text: "Njut av fartfyllda åk och härlig fjälluft i Idres skidbackar, med nedfarter för både nybörjare och vana skidåkare.",
    },
    {
      image: skoter,
      title: "Vinteräventyr",
      text: "Ge dig ut på skoter och upplev det snötäckta fjällandskapet från nya vyer.",
    },
    {
      image: vandring,
      title: "Upptäck Idre på några dagar",
      text: "Kombinera dagar ute i vinterlandskapet med god mat och sköna stunder på hotellet.",
    },
    {
      image: berg2,
      title: "Upplev Idre under 7 dagar",
      text: "Ta gott om tid att upptäcka fjällen och variera semestern med skidåkning och andra vinteraktiviteter.",
    },
  ],
  sommar: [
    {
      image: vandring,
      title: "Vandring",
      text: "Följ leder genom skog och fjäll, från lugna promenader till längre turer med storslagna vyer.",
    },
    {
      image: berg,
      title: "Fiske",
      text: "Upplev lugnet vid vattnet och prova fiskelyckan i Idres sjöar och vattendrag. Kom ihåg att kontrollera lokala fiskeregler och fiskekort.",
    },
    {
      image: bastu,
      title: "Bastu",
      text: "Varva ner och låt dagens äventyr sjunka in med en stunds avkoppling i bastun.",
    },
    {
      image: cykling,
      title: "Cykling",
      text: "Upptäck omgivningarna på cykel längs stigar och vägar genom den vackra fjällnaturen.",
    },
  ],
};

export default function Experience() {
  return (
    <>
      <Header overImage />

      <PageHero
        image={headerimage}
        eyebrow="Upplevelserna på Fjällheim"
        title="Mer än ett hotell. En hel destination."
        text=""
      />

      <div className="min-h-screen bg-[#F3E9D7]">
        <main className="container-page py-10">
          {/* Säsongskort */}
          <div className="grid gap-8 md:grid-cols-2">
            {seasonCards.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group overflow-hidden rounded-lg bg-[#68452d] text-[#F3E9D7] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={card.image}
                  alt=""
                  className="h-64 w-full object-cover md:h-80"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-semibold">{card.title}</h2>
                  <p className="mt-3">{card.text}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Paket */}
          <div className="mt-20">
            <h2 className="text-center font-serif text-4xl font-semibold">
              Paket
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-1/2 bg-brown" />

            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {paket.map((p) => (
                <article
                  key={p.title}
                  className="overflow-hidden rounded-lg bg-[#68452d] text-[#F3E9D7] shadow-md"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>

      <section className="relative h-72 overflow-hidden bg-[#F3E9D7] md:h-80">
        <img
          src={skogvanster}
          alt=""
          className="absolute bottom-0 left-6 h-64 w-auto max-w-[40%] object-contain md:left-10"
        />

        <img
          src={skoghoger}
          alt=""
          className="absolute bottom-0 right-6 h-64 w-auto max-w-[40%] object-contain md:right-10"
        />
      </section>
    </>
  );
}

export function ExperienceSeason({ season }: { season: Season }) {
  const isWinter = season === "vinter";

  return (
    <>
      <div className="min-h-screen bg-[#F3E9D7]">
        <Header />
        <main className="container-page py-10 pt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-4xl">
              {isWinter ? "Att göra vinter" : "Att göra vår, sommar & höst"}
            </h1>

            <nav
              aria-label="Välj säsong"
              className="flex rounded-md border border-brown"
            >
              {(["vinter", "sommar"] as const).map((option) => (
                <Link
                  key={option}
                  to={`/upplevelse/${option}`}
                  aria-current={season === option ? "page" : undefined}
                  className={`px-5 py-2 font-serif text-lg capitalize ${
                    season === option ? "bg-brown text-cream" : "text-brown"
                  }`}
                >
                  {option}
                </Link>
              ))}
            </nav>
          </div>
          <Link
  to="/upplevelse"
  className="group mb-6 inline-flex items-center gap-2 text-xl text-brown"
>
  <ArrowLeft
    aria-hidden="true"
    className="transition group-hover:-translate-x-1"
  />
  Tillbaka
</Link>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities[season].map((activity) => (
              <article
                key={activity.title}
                className="overflow-hidden rounded-lg bg-[#68452d] text-[#F3E9D7] shadow-md"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-64 w-full object-cover md:h-80"
                />
                <div className="p-6">
                  <h2 className="text-3xl font-semibold">{activity.title}</h2>
                  <p className="mt-3">{activity.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-center font-serif text-4xl font-semibold">
              Paket
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-1/2 bg-brown" />

            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {paket.map((p) => (
                <article
                  key={p.title}
                  className="overflow-hidden rounded-lg bg-[#68452d] text-[#F3E9D7] shadow-md"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm">{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <section className="relative h-72 overflow-hidden bg-[#F3E9D7] md:h-80">
          <img
            src={skogvanster}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-6 h-64 w-auto max-w-[40%] object-contain md:left-10"
          />

          <img
            src={skoghoger}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 right-6 h-64 w-auto max-w-[40%] object-contain md:right-10"
          />
        </section>
      </div>
    </>
  );
}
