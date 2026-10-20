import Header from "../components/layout/Header";
import aboutBild from "../assets/Images/Bilder_om/IMG_7813.jpg";
import svartvitBild from "../assets/Images/Bilder_om/fjällheim_svartvit.png";
import personBild from "../assets/Images/Bilder_om/IMG_8032.jpg";
import renBild from "../assets/Images/Bilder_om/ren.jpg";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="w-full bg-secondary">
        <div className="relative w-full">
          <img
            src={aboutBild}
            alt="Fjällbild"
            className="w-full h-[500px] object-cover object-[center_30%]"
          />

          <div className="absolute top-1/3 left-0 pl-12 text-white font-garamond mt-30">
            <p className="text-2xl mb-2">OM FJÄLLHEIM</p>

            <p className="text-4xl mb-3">
              Mer än ett hotell.
              <br />
              En plats att landa på.
            </p>

            <p className="text-lg font-lato max-w-xl">
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
              <p className="text-4xl font-garamond">Där allt en gång började</p>

              <p className="text-lg font-lato leading-relaxed mt-5">
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
              <p className="text-4xl font-garamond">
                Här fortsätter berättelsen
              </p>

              <p className="text-lg font-lato mt-5 leading-relaxed">
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
                <p className="text-4xl font-garamond mb-3">Fjällheim Friends</p>

                <p className="text-lg font-lato leading-relaxed">
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
