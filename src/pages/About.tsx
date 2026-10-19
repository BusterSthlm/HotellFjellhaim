import Header from "../components/layout/Header";
import aboutBild from "../assets/Images/Bilder_om/IMG_7813.jpg";
import bastuBild from "../assets/Images/Bilder_om/kschlott-sauna-2844863_1920.jpg";
import hundBild from "../assets/Images/Bilder_om/teefarm-outlook-1844110_1920.jpg";
import fjällBild from "../assets/Images/Bilder_om/michael-odelberth-cA4m16RhDLE-unsplash.jpg";

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
              <p className="text-xl font-garamond mb-4">VÅR HISTORIA</p>

              <p className="text-4xl font-garamond">
                En plats med rötter i Dalarna.
              </p>

              <p className="text-lg font-lato mt-5 leading-relaxed">
                Fjällheim Idre är ett charmigt boende i hjärtat av Idre by med
                en varm och inbjudande atmosfär – perfekt för dig som vill
                kombinera avkoppling med natur- och fjällaktiviteter året runt.
                Här finns gott om plats för återhämtning vid brasan, i loungen
                eller varför inte unna dig en mysig stund i bastun som du kan
                abonnera för dig själv eller tillsammans med sällskap.
              </p>
            </div>

            {/* Bild till höger */}
            <div className="min-h-[350px]">
              <img
                src={bastuBild}
                alt="Bastu på Fjällheim"
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
                src={hundBild}
                alt="Hund på Fjällheim"
                className="w-full h-full min-h-[350px] object-cover"
              />
            </div>

            {/* Text till höger */}
            <div className="px-12 py-24 text-[#3a2516]">
              <p className="text-xl font-garamond mb-4">VI VILL</p>

              <p className="text-4xl font-garamond">
                Att fler ska uppleva det som gör Dalarna så speciellt.
              </p>

              <p className="text-lg font-lato mt-5 leading-relaxed">
                Vi vill inspirera fler att upptäcka naturen, kulturen och lugnet
                som finns här. Genom hållbar turism och genuina upplevelser
                skapar vi värde för våra gäster, vår bygd och kommande
                generationer.
              </p>
            </div>
          </div>
          <div className="relative w-full">
            <img
              src={fjällBild}
              alt="Fjällbild"
              className="w-full h-[500px] object-cover object-[center_35%] -scale-x-100"
            />

            <div className="absolute top-1/3 left-0 pl-12 text-[#3a2516] font-garamond ">
              <p className="text-xl font-garamond mb-4">
                VÄLKOMMEN TILL FJÄLLHEIM
              </p>

              <p className="text-4xl mb-3">En plats för alla årstider</p>

              <p className="text-lg font-lato max-w-xl">
                Oavsett om du söker äventyr, avkoppling, god mat eller en
                inspirerande konferens. Vi ser fram emot att välkomna dig till
                Fjällheim!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
