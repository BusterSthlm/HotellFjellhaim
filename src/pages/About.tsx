import Header from "../components/layout/Header";
import aboutBild from "../assets/Images/Bilder_om/IMG_7813.jpg";
import svartvitBild from "../assets/Images/Bilder_om/fjällheim_svartvit.png";
import personBild from "../assets/Images/Bilder_om/IMG_8032.jpg";
import renBild from "../assets/Images/Bilder_om/ren.jpg";

export default function HomePage() {
  return (
    <>
      <Header overImage />

      <main className="w-full bg-secondary">
        <div className="relative w-full">
          <img
            src={aboutBild}
            alt="Fjällbild"
            className="h-[500px] w-full object-cover object-[center_30%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute left-0 top-1/3 max-w-3xl px-6 font-garamond text-white sm:px-12">
            <p className="mb-2 text-2xl">OM FJÄLLHEIM</p>

            <h1 className="mb-3 text-6xl">
              Mer än ett hotell.
              <br />
              En plats att landa på.
            </h1>

            <p className="max-w-xl text-lg">
              Genom Dalarnas natur erbjuder vi en unik kombination av boende,
              mat, upplevelser och möten året runt.
            </p>
          </div>
        </div>
        {/* Brun ruta under bilden */}
        <div className="w-full bg-[#3a2516] text-white mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Text till vänster */}
            <div className="px-12 py-24">
              <h2 className="text-4xl">Där allt en gång började</h2>

              <p className="text-lg leading-relaxed mt-5">
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
            <div className="min-h-[350px]">
              <img
                src={svartvitBild}
                alt="Hotell Fjällheim"
                className="w-full h-full min-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* Beige ruta under den bruna */}
        <div className="w-full bg-[#f3e9d7] mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Bild till vänster */}
            <div className="min-h-[350px]">
              <img
                src={personBild}
                alt="Person på Fjällheim"
                className="w-full h-full min-h-[350px] object-cover"
              />
            </div>

            {/* Text till höger */}
            <div className="px-12 py-24 text-[#3a2516]">
              <h2 className="text-4xl">
                Här fortsätter berättelsen
              </h2>

              <p className="text-lg mt-5 leading-relaxed">
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
              <div className="px-12 py-24 text-[#3a2516]">
                <h2 className="mb-3 text-4xl">Fjällheim Friends</h2>

                <p className="text-lg leading-relaxed">
                  Bli medlem och få tillgång till fina förmåner, erbjudanden och
                  lite extra fjällkärlek både från Hotell Fjällheim och Hotell
                  Fridhemsgatan i Mora.
                </p>
              </div>

              {/* Bild till höger */}
              <div className="min-h-[350px]">
                <img
                  src={renBild}
                  alt="Ren på fjället"
                  className="w-full h-full min-h-[350px] object-cover object-[center_35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
