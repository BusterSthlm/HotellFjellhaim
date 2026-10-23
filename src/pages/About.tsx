import Header from "../components/layout/Header";
import aboutBild from "../assets/Images/Bilder_om/IMG_7813.jpg";
import svartvitBild from "../assets/Images/Bilder_om/fjällheim_svartvit.png";
import personBild from "../assets/Images/Bilder_om/IMG_8032.jpg";
import renBild from "../assets/Images/Bilder_om/ren.jpg";
import PageHero from "../components/layout/PageHero";
import skoghoger from "../assets/grafisk-material/Illustrations/Skog/Skog_hoger.svg";
import skogvanster from "../assets/grafisk-material/Illustrations/Skog/Skog_vanster.svg";

const IMG = {
  hero: aboutBild,
};

export default function HomePage() {
  return (
    <>
      <Header overImage />
      <main className="bg-[#F3E9D7] text-[#f3e9d7]">
        <PageHero
          image={IMG.hero}
          eyebrow="Om Fjällheim"
          title="Mer än ett hotell. En plats att landa på."
          text=""
        />
        {/* Brun ruta under bilden */}
        <div className="w-full bg-[#3a2516] text-[#f3e9d7] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Text till vänster */}
            <div className="px-12 py-24">
              <h2 className="text-4xl font-bold">Där allt en gång började</h2>

              <p className="text-lg leading-relaxed mt-5 font-lato">
                Långt innan Fjällheim blev hotell var byggnaden ett skolhem för
                barn från Idre och de omkringliggande byarna. Avstånden var
                långa och skolskjuts fanns inte, så barn som bodde långt bort
                bodde på skolhemmet under skolveckan och återvände hem på
                lördagarna. Det första skolhemmet byggdes på Berget 1924. Den
                ursprungliga stommen bevarades senare som hembygdsgård och
                flyttades till centrala Idre 1992. Byggnaden som i dag är Hotell
                Fjällheim (föredetta Sporthotellet) uppfördes som skolhem i
                slutet av 1940-talet. Ett av barnen som bodde här var Mats
                Johnson från Lövåsen, som tillbringade tolv terminer på
                skolhemmet i slutet av 1950-talet. Han minns varm choklad i
                plåtmuggar, te i vita koppar och dagar fyllda av skola,
                läxläsning, skidåkning och lek. Men berättelserna från den tiden
                lever fortdarande kvar – i våra väggar, i minnena och hos
                människorna som en gång kallade huset sitt hem.
              </p>
            </div>

            {/* Bild till höger */}
            <div className="min-h-[350px] py-4">
              <img
                src={svartvitBild}
                alt="Hotell Fjällheim"
                className="h-full min-h-[350px] w-full rounded-l-2xl object-cover"
              />
            </div>
          </div>
        </div>
        {/* Beige ruta under den bruna */}
        <div className="w-full bg-[#f3e9d7] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Bild till vänster */}
            <div className="min-h-[350px] py-4">
              <img
                src={personBild}
                alt="Hotell Fjällheims ägare"
                className="h-full min-h-[350px] w-full rounded-r-2xl object-cover"
              />
            </div>

            {/* Text till höger */}
            <div className="px-12 py-24 text-[#331f11]">
              <h2 className="text-4xl font-bold">Här fortsätter berättelsen</h2>

              <p className="text-lg mt-5 leading-relaxed font-lato">
                I februari 2026 började ett nytt kapitel i Fjällheims historia
                när vi i familjen Nielsen tog över det stora röda huset mitt i
                Idre. Vi föll för husets historia och möjligheten att skapa den
                sorts plats som vi själva tycker om att komma till. För oss ska
                Fjällheim vara en plats att landa på efter dagens äventyr och
                ladda upp inför nästa. En plats där man kan njuta av en god
                frukost, komma hem efter en dag på fjället, koppla av i bastun
                eller sjunka ner framför brasan med något gott att äta och
                dricka. Framför allt vill vi skapa utrymme för att varva ner och
                bara vara. Vi vill att Fjällheim ska kännas personligt och
                familjärt. Inte tillrättalagt eller märkvärdigt, utan varmt,
                välkomnande och enkelt att trivas på. En plats där vi lär känna
                våra gäster och där både besökare och människor från byn känner
                sig hemma.
              </p>
            </div>
          </div>

          {/* Tredje ruta med text till vänster och bild till höger */}
          <div className="w-full bg-[#f3e9d7] mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              {/* Text till vänster */}
              <div className="px-12 py-24 text-[#331f11]">
                <h2 className="mb-3 text-4xl font-bold">Fjällheim Friends</h2>

                <p className="text-lg font-lato leading-relaxed text-[#331f11]">
                  Bli medlem och få tillgång till fina förmåner, erbjudanden och
                  lite extra fjällkärlek både från Hotell Fjällheim och Hotell
                  Fridhemsgatan i Mora. Fjällheim är en del av Vindla Hotels.
                  Vill du upptäcka vårt andra hotell är du varmt välkommen till
                  Hotell Fridhemsgatan i Mora.
                </p>
              </div>

              {/* Bild till höger */}
              <div className="min-h-[350px] py-4">
                <img
                  src={renBild}
                  alt="Ren på fjället"
                  className="h-full min-h-[350px] w-full rounded-l-2xl object-cover"
                />
              </div>
            </div>
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
    </>
  );
}
