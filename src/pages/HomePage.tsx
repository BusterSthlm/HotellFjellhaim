import Header from "../components/layout/Header";
import backgroundImage from "../assets/Images/Bilder_startsida/IMG_7906.jpg";
import HotelCheckIn from "../components/ui/HotelCheckIn";
import dogimage from "../assets/Images/Bilder_startsida/IMG_7800.jpg";

export default function HomePage() {
  return (
    <>
      {/* Sektion med bakgrundsbild */}
      <div
        className="relative min-h-[900px] bg-cover bg-center bg-no-repeat pb-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "140%",
          backgroundPosition: "10% center",
        }}
      >
        <Header />

        <main className="relative pt-45">
          <p className="ml-10 pt-70 text-left font-garamond text-[#F3E9D7]">
            HOTELL I DALARNA
          </p>

          <p className="ml-10 text-left font-garamond text-6xl text-[#F3E9D7]">
            En plats att
            <br /> landa på
          </p>

          <p className="mb-20 ml-10 mt-4 text-left font-garamond text-[#F3E9D7]">
            Natur, avkoppling och äventyr - året runt.
          </p>

          <HotelCheckIn />
        </main>
      </div>

      {/* Beige sektion under bilden */}
      <section className="min-h-[1000px] w-full bg-[#F3E9D7] pl-6 py-0">
        {/* Brun ruta */}
        <div className="min-h-[500px] w-auto rounded-bl-xl bg-[#3a2516] p-6">
          <div className="flex items-center gap-10">
            {/* Text till vänster */}
            <div className="flex-1 min-w-0">
              <p className="mb-5 text-left font-garamond text-[#F3E9D7]">
                VÄLKOMMEN TILL FJÄLLHEIM
              </p>

              <p className="text-left font-garamond text-5xl text-[#F3E9D7]">
                Mer än ett hotell.
                <br /> En upplevelse
              </p>

              <p className="mb-10 mt-6 text-left font-Lato text-[#F3E9D7]">
                Fjällheim är en plats där natur, gemenskap och avkoppling möts.
                Hos oss får du en äkta Dala-upplevelse med komfort,
                <br /> god mat och minnen som stannar kvar livet ut.
              </p>

              <a
                href="/dalarna"
                className="mt-4 block text-left font-garamond text-[#F3E9D7] hover:underline"
              >
                Upptäck Dalarna →
              </a>
            </div>

            {/* Bild till höger */}
            <div className="flex-1 min-w-0 -mr-6 rounded-1-2xl">
              <img
                src={dogimage}
                alt="Fjällheim och den omgivande naturen"
                className="h-[500px] w-full rounded-l-xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-5 py-10 md:flex-row">
          {/* Text till vänster */}
          <div className="min-w-0 flex-1">
            <p className="mt-10 text-left font-garamond text-5xl text-[#3a2516]">
              Boende
            </p>

            <p className="mt-5 text-left font-Lato text-[#3a2516]">
              Rum för alla tillfällen
            </p>

            <p className="mt-5 text-left font-Lato text-[#3a2516]">
              Oavsett om du kommer för en romantisk helg, en aktiv semester
              eller konferens har vi ett rum som passar dig.
            </p>
          </div>

          {/* Platshållare för två cards till höger */}
          <div className="grid min-w-0 flex-1 grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="min-h-[300px] rounded-xl border-2 border-dashed border-[#3a2516]/40 bg-[#3a2516]/5">
              <p className="p-4 text-center font-Lato text-sm text-[#3a2516]/60">
                Card 1
              </p>
            </div>

            {/* Card 2 */}
            <div className="min-h-[300px] rounded-xl border-2 border-dashed border-[#3a2516]/40 bg-[#3a2516]/5">
              <p className="p-4 text-center font-Lato text-sm text-[#3a2516]/60">
                Card 2
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
