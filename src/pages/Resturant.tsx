import FeatureBar from "../components/layout/FeatureBar";
import Header from "../components/layout/Header";
import { ArrowRight, Clock, Coffee, Leaf, Wine } from "lucide-react";
import heroImage from "../assets/Images/Bilder_resturang/IMG_7854.jpg";
import omtankeImage from "../assets/Images/Bilder_resturang/IMG_8022.jpg";
import restaurantImage from "../assets/Images/Bilder_resturang/IMG_7858.jpg";
import drinkingImage from "../assets/Images/Bilder_resturang/IMG_7962.jpg";
import ambienteImage from "../assets/Images/Bilder_resturang/IMG_8020.jpg";
import PageHero from "../components/layout/PageHero";
import skoghoger from "../assets/grafisk-material/Illustrations/Skog/Skog_hoger.svg";
import skogvanster from "../assets/grafisk-material/Illustrations/Skog/Skog_vanster.svg";

const IMG = {
  hero: heroImage,
  omtanke: omtankeImage,
  retsturang1: restaurantImage,
  resturang2: drinkingImage,
  miljo: ambienteImage,
};

const label = "text-xs uppercase tracking-[0.2em]";

const hours = [
  {
    titel: "Frukostbuffe",
    rows: [
      ["Mån-Fre", "07:00-10:00"],
      ["Lör-Sön", "07:30-10:30"],
    ],
  },
  {
    titel: "Restaurang",
    rows: [
      ["Mån-Fre", "07:00-10:00"],
      ["Lör-Sön", "07:30-10:30"],
    ],
  },
  {
    titel: "Bar",
    rows: [
      ["Mån-Fre", "07:00-10:00"],
      ["Lör-Sön", "07:30-10:30"],
    ],
  },
];

export default function MatOchDryck() {
  return (
    <>
      <Header overImage />
      <main className="bg-[#F3E9D7] text-[#331f11]">
        <PageHero
          image={IMG.hero}
          eyebrow="Mat och dryck"
          title="Smaker som hör hemma här"
          text=""
        />

        <FeatureBar
          items={[
            { icon: Leaf, titel: "Lokala råvaror", text: "från närområdet" },
            { icon: Coffee, titel: "Frukost", text: "varje morgon" },
            { icon: Wine, titel: "Restaurang och bar", text: "året runt" },
            { icon: Clock, titel: "Öppettider", text: "för alla tillfällen" },
          ]}
        />

        <section className="grid items-stretch bg-[#3A5232] md:grid-cols-2">
          <div className="h-96 min-w-0 overflow-hidden py-4 md:h-[520px] md:py-6">
            <img
              src={IMG.omtanke}
              alt="Hotellägaren"
              className="h-full w-full rounded-r-2xl object-cover object-[center_20%]"
            />
          </div>

          <div className="py-12 text-[#f3e9d7] md:px-12">
            <h2 className="font-garamond mb-5 mt-10 font-bold text-3xl">
              Mat med omtanke
            </h2>

            <p className="font-lato font-light">
              Vi vill ta vara på det vi har och använder så mycket som möjligt
              av varje råvara. I köket arbetar vi med råvaror efter säsong och
              väljer gärna produkter från lokala leverantörer. Det ger oss
              möjlighet att laga mat med råvaror som är nära, aktuella och i sin
              bästa tid, samtidigt som vi försöker minska vårt svinn och vår
              påverkan på miljön. Vi hoppas att du som gäst vill dela vår syn på
              mat och hållbarhet. Genom att tillsammans ta vara på maten –
              minska det som går till spillo kan vi göra skillnad. För oss
              handlar hållbarhet om att använda det vi har på ett klokt sätt,
              att uppskatta bra råvaror och att hela tiden försöka hitta bättre
              sätt att arbeta.
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="px-6 py-12 md:px-12">
            <h2 className="font-bold mb-5 text-3xl text-primary">
              Restaurang & bar
            </h2>
            <p>
              Restaurangen varierar efter säsong. Baren är välfylld med dryck
              från Mora Bryggeri, ölsorter som Njupeskär, Dalapils, Dala ipa och
              Koppar är vi extra stolta över. Sälens Fjällbryggeri fjälldimma är
              också en storsäljare. Bubbeldryck från Wi Sjåsum – ett lokalt
              importerat bubbel från Orsa. Vi har flera goda viner i
              sortimentet.
            </p>

            <a
              href="mailto:booking@fjallheim.se?subject=Bordsbokning"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#6b3f22] px-5 py-3 text-[#f3e9d7] transition hover:bg-[#4e2d18]"
            >
              Boka bord
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:booking@fjallheim.se?subject=Bordsbokning"
              className="mt-8 ml-15 inline-flex items-center gap-2 rounded-md border border-black bg-white px-5 py-3 text-[#331f11] transition hover:bg-gray-200"
            >
              Se vår meny
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid min-h-72 grid-cols-2 gap-3">
            <img
              src={IMG.retsturang1}
              alt="Dukat bord i restaurangen"
              className="h-full min-h-72 w-full rounded-l object-cover"
            />
            <img
              src={IMG.resturang2}
              alt="Dukat bord i restaurangen"
              className="h-full min-h-72 w-full rounded-l object-cover"
            />
          </div>
        </section>

        <section
          className="relative flex min-h-[320px] items-start bg-cover bg-center md:min-h-[400px]"
          style={{
            backgroundImage: `url(${IMG.miljo})`,
            backgroundSize: "115%",
            backgroundPosition: "30% 67%",
          }}
        >
          <div className="container-page relative w-full pt-8 text-[#331f11] md:pt-12">
            <h2 className="ml-10 font-bold text-3xl mb-5">Frukostbuffé</h2>

            <p className="mb-10 ml-10 max-w-[58ch] text-[#331f11]">
              Det ska vara bekvämt och kännas lyxigt att bo på hotell och
              frukost är bästa starten på dagen. På vår omtyckta frukostbuffé
              hittar du bland annat hembakad lingonlimpa, croissanter, olika
              sorters ost och smörgåspålägg, kokt ägg, frukt och juice, fil,
              yoghurt med flingor, müsli och fröer. Självklart har vi riktigt
              gott kaffe. Våfflor gräddar du själv och toppar med det du önskar,
              exempel sylt och grädde eller Nutella.
            </p>
          </div>
        </section>

        <section
          id="opening-hours"
          className="container-page grid gap-10 py-16 md:grid-cols-3"
        >
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-3">
            {hours.map(({ titel, rows }) => (
              <div key={titel}>
                <h3 className="text-xl font-semibold font-serif">{titel}</h3>
                <dl className="mt-3 space-y-1 text-sm">
                  {rows.map(([dag, tid]) => (
                    <div key={dag} className="flex justify-start gap-6">
                      <dt>{dag}</dt>
                      <dd>{tid}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
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
    </>
  );
}
