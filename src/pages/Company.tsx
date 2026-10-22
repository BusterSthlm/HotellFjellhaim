import { Link } from "react-router-dom";
import { ArrowRight, Presentation, Utensils, BedDouble, Mountain } from "lucide-react";
import Header from "../components/layout/Header";
import FeatureBar from "../components/layout/FeatureBar";
import PageHero from "../components/layout/PageHero";
import skog from "../assets/Images/Bilder_aktiveter/Skoig.jpg";
import vandring from "../assets/Images/Bilder_startsida/IMG_7918.jpg";
import ren from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";
import skidor from "../assets/Images/Bilder_aktiveter/skidor.jpg";
import konferensrum from "../assets/Images/Bilder_bokning/yta.jpg";
import hotell from "../assets/Images/Bilder_om/sporthotellet.jpg";

const offers = [
  {
    image: konferensrum,
    title: "Dagskonferens",
    text: "Ett effektivt och inspirerande möte med allt ni behöver för en lyckad dag.",
    link: "Från 695 kr / person",
  },
  {
    image: hotell,
    title: "Konferens med övernattning",
    text: "Kombinera arbete med avkoppling och goda måltider i en unik miljö.",
    link: "Från 1 995 kr / person",
  },
  {
    image: skog,
    title: "Skräddarsydd konferens",
    text: "Vi hjälper er att skapa ett upplägg som passar era mål och önskemål.",
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

      <main>
        <section className="container-page py-14">
          <p className="eyebrow">Våra erbjudanden</p>
          <h2 className="mb-8 text-4xl">Konferens för alla behov</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {offers.map((offer) => (
              <a
                key={offer.title}
                href="mailto:booking@fjallheim.se?subject=Konferensförfrågan"
                className="group overflow-hidden rounded-lg bg-brown text-cream transition hover:-translate-y-1"
              >
                <img src={offer.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-2xl">{offer.title}</h3>
                  <p className="mt-2 text-sm text-cream/80">{offer.text}</p>
                  <p className="mt-5 flex items-center justify-between underline">
                    {offer.link}
                    <ArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid h-100 bg-brown text-cream md:grid-cols-[0.9fr_1.2fr_0.9fr]">
          <img
            src={vandring}
            alt="Vandrare på fjället"
            className="h-100 w-full object-cover md:h-100"
          />
          <div className="p-8 md:p-12">
            <p className="eyebrow">Mer än bara möten</p>
            <h2 className="text-4xl leading-tight text-cream md:text-5xl">
              Stärk samarbetet med upplevelser.
            </h2>
            <p className="mt-4 font-light">
              Kombinera konferensen med aktiviteter som vandring, cykling, bastu,
              matupplevelser eller en kväll vid lägerelden. Vi hjälper er att
              skapa ett program som passar ert team.
            </p>
            <Link
              to="/experience"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-cream px-5 py-3 font-semibold text-brown hover:bg-white"
            >
              Utforska aktiviteter <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="hidden min-h-[360px] flex-col gap-2 md:flex">
            <img
              src={ren}
              alt="Person möter en ren"
              className="h-1/2 w-full object-cover"
            />
            <img
              src={skidor}
              alt="Skidor i fjällmiljö"
              className="h-1/2 w-full object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
