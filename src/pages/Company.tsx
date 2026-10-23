import { Link } from "react-router-dom";
import {
  ArrowRight,
  Presentation,
  Utensils,
  BedDouble,
  Mountain,
} from "lucide-react";
import Header from "../components/layout/Header";
import FeatureBar from "../components/layout/FeatureBar";
import PageHero from "../components/layout/PageHero";
import skog from "../assets/Images/Bilder_aktiveter/michael-odelberth-RjLMo0S9ifE-unsplash.jpg";
import fjallvinter from "../assets/Images/Bilder_om/Fjallheimvinter.jpg";
import vandring from "../assets/Images/Bilder_startsida/IMG_7918.jpg";
import ren from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";
import skidor from "../assets/Images/Bilder_aktiveter/skidor.jpg";
import konferensrum from "../assets/Images/Bilder_bokning/IMG_7960.jpg";
import hotell from "../assets/Images/Bilder_om/Rum.jpg";
import skoghoger from "../assets/grafisk-material/Illustrations/Skog/Skog_hoger.svg";
import skogvanster from "../assets/grafisk-material/Illustrations/Skog/Skog_vanster.svg";

const offers = [
  {
    image: konferensrum,
    title: "Event",
    text: "Stora ögonblick, små sammankomster och allt däremellan. Det finns alltid en anledning att samlas! Hos oss på Fjällheim vill vi skapa plats för möten, gemenskap och minnesvärda stunder.",
    link: "Läs mer",
  },
  {
    image: hotell,
    title: "Konferens",
    text: "Nya tankar, goda möten och tid att landa. Ibland behöver man byta miljö för att hitta nya perspektiv. Hos oss på Hotell Fjällheim möts ni i en personlig och avslappnad atmosfär.",
    link: "Läs mer",
  },
  {
    image: fjallvinter,
    title: "Abonnera Fjällheim",
    text: "Er stund. Ert sällskap. Er upplevelse. Ibland vill man ha en plats alldeles för sig själv. Hos oss finns möjlighet att abonnera delar av vår verksamhet för både privata och företagsrelaterade tillställningar.",
    link: "Kontakta oss för offert",
  },
];

export default function Foretag() {
  return (
    <>
      <Header overImage />
      <PageHero
        image={skog}
        eyebrow="Konferens på Fjällheim"
        title="Möten som gör skillnad."
        text=""
      />

      <FeatureBar
        items={[
          {
            icon: Presentation,
            titel: "Möten och konferens",
            text: "Moderna lokaler i naturnära miljö",
          },
          {
            icon: Utensils,
            titel: "Mat och dryck",
            text: "Lokala råvaror och skräddarsydda menyer",
          },
          {
            icon: BedDouble,
            titel: "Boende",
            text: "Enkelrum, dubbelrum och sviter",
          },
          {
            icon: Mountain,
            titel: "Aktiviteter",
            text: "Stärk teamet med upplevelser i naturen",
          },
        ]}
      />

      <main>
        <section className="bg-[#f3e9d7] py-14 text-[#331f11]">
          <div className="container-page">
            <p className="eyebrow">Våra erbjudanden</p>
            <h2 className="mb-8 text-4xl font-bold">
              Konferens för alla behov
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {offers.map((offer) => (
                <a
                  key={offer.title}
                  href="mailto:booking@fjallheim.se?subject=Konferensförfrågan"
                  className="group overflow-hidden rounded-lg bg-[#68452d] text-[#f3e9d7] transition hover:-translate-y-1"
                >
                  <img
                    src={offer.image}
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-2xl">{offer.title}</h3>
                    <p className="mt-2 text-sm">{offer.text}</p>
                    <p className="mt-5 flex items-center justify-between">
                      {offer.link}
                      <ArrowRight
                        className="transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="grid items-center gap-6 bg-[#68452d] py-8 pb-16 text-cream md:grid-cols-[0.9fr_1.2fr_0.9fr] md:gap-8 md:pt-10 md:pb-20">
          <img
            src={vandring}
            alt="Vandrare på fjället"
            className="h-[280px] w-full rounded-r-2xl object-cover md:h-[360px]"
          />

          {/* Text i mitten */}
          <div className="px-6 md:px-4">
            <p className="eyebrow">Mer än bara möten</p>
            <h2 className="text-4xl leading-tight text-[#f3e9d7] font-bold md:text-5xl">
              Stärk samarbetet med upplevelser.
            </h2>
            <p className="mt-4">
              Kombinera konferensen med aktiviteter som vandring, cykling,
              bastu, matupplevelser eller en kväll vid lägerelden. Vi hjälper er
              att skapa ett program som passar ert team.
            </p>
            <Link
              to="/experience"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-cream px-5 py-3 font-semibold text-[#331f11] hover:bg-white"
            >
              Utforska upplevelser <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="hidden flex-col gap-3 md:flex">
            <img
              src={ren}
              alt="Person möter en ren"
              className="h-[174px] w-full rounded-l-2xl object-cover"
            />
            <img
              src={skidor}
              alt="Skidor i fjällmiljö"
              className="h-[174px] w-full rounded-l-2xl object-cover"
            />
          </div>
        </section>
        <section className="relative -mt-8 h-72 bg-[#F3E9D7] md:-mt-12 md:h-80">
          <img
            src={skogvanster}
            alt="Skog vänstersida"
            className="absolute bottom-0 left-6 block h-64 w-auto max-w-[40%] object-contain md:left-10"
          />

          <img
            src={skoghoger}
            alt="Skog högersida"
            className="absolute bottom-0 right-6 block h-64 w-auto max-w-[40%] object-contain md:right-10"
          />
        </section>
      </main>
    </>
  );
}
