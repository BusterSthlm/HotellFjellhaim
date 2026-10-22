import FeatureBar from "../components/layout/FeatureBar";
import Header from "../components/layout/Header";
import { ArrowRight, Clock, Coffee, Leaf, Wine } from "lucide-react";
import heroImage from "../assets/Images/Bilder_resturang/IMG_7854.jpg";
import frukostImage from "../assets/Images/Bilder_resturang/IMG_7865.jpg";
import restaurantImage from "../assets/Images/Bilder_resturang/IMG_7858.jpg";
import drinkingImage from "../assets/Images/Bilder_resturang/IMG_7962.jpg";
import ambienteImage from "../assets/Images/Bilder_resturang/IMG_8020.jpg";

const IMG = {
  hero: heroImage,
  frukost: frukostImage,
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
      <main className="bg-[#F3E9D7] text-[#2b2118]">
        <section
          className="relative flex min-h-[520px] items-end bg-cover bg-center px-6 pb-12 pt-32 text-[#f4ECDD] md:min-h-[620px]"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="container-page relative">
            <p className={label}>Mat och dryck</p>
            <p className="text-5xl leading-tight text-[#f3e9d7] md:text-7xl font-garamond">
              Smaker som hör hemma här
            </p>
            <p className="mt-4 max-w-xl text-lg text-[#f3e9d7]">
              Lokala råvaror och säsongsinspirerade måltider som gör varje
              måltid lite speciell.
            </p>
          </div>
        </section>

        <FeatureBar
          items={[
            { icon: Leaf, titel: "Lokala råvaror", text: "från närområdet" },
            { icon: Coffee, titel: "Frukost", text: "varje morgon" },
            { icon: Wine, titel: "Restaurang och bar", text: "året runt" },
            { icon: Clock, titel: "Öppettider", text: "för alla tillfällen" },
          ]}
        />

        <section className="grid md:grid-cols-2">
          <img
            src={IMG.frukost}
            alt="Frukostbuffe"
            className="h-72 w-full object-cover md:h-full"
          />
          <div className="bg-[#3f4a35] px-6 py-12 text-[#f3e9d7] md:px-12">
            <p className="text-[#f3e9d7] font-bold">Frukost</p>
            <p className="text-[#f3e9d7]">
              Det ska vara bekvämt och kännas lyxigt att bo på hotell och
              frukost är bästa starten på dagen. På vår omtyckta frukostbuffé
              hittar du bland annat hembakad lingonlimpa, croassanter, olika
              sorters ost och smörgåspålägg, kokt ägg, frukt och juice, fil,
              yoghurt med flingor, müsli och fröer. Självklart har vi riktigt
              gott kaffe. Våfflor gräddar du själv och toppar med det du önskar,
              exempel sylt och grädde eller nutella. Välkommen på frukost även
              om du inte bor hos oss, 185,-/person
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="px-6 py-12 md:px-12">
            <p className="font-bold">Restaurang & bar</p>
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
          </div>

          <div className="grid min-h-72 grid-cols-2 gap-3">
            <img
              src={IMG.retsturang1}
              alt="Dukat bord i restaurangen"
              className="h-full min-h-72 w-full rounded object-cover"
            />
            <img
              src={IMG.resturang2}
              alt="Dukat bord i restaurangen"
              className="h-full min-h-72 w-full rounded object-cover"
            />
          </div>
        </section>

        <section
          className="relative flex min-h-[320px] items-center bg-cover bg-center md:min-h-[400px]"
          style={{
            backgroundImage: `url(${IMG.miljo})`,
            backgroundPosition: "center 80%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="container-page relative w-full text-[#f3e9d7]">
            <p className="text-[#f3e9d7] ml-10 mt-10 font-bold">
              Mat med omtanke
            </p>
            <p className="ml-10 mb-10 max-w-xs text-[#f3e9d7]">
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

        <section
          id="opening-hours"
          className="container-page grid gap-10 py-16 md:grid-cols-3"
        >
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-3">
            {hours.map(({ titel, rows }) => (
              <div key={titel}>
                <h3 className="text-xl font-semibold">{titel}</h3>
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
    </>
  );
}
