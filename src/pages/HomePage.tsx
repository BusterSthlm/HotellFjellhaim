import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Images/Bilder_startsida/IMG_7906.jpg";
import HotelCheckIn from "../components/ui/HotelCheckIn";
import dogimage from "../assets/Images/Bilder_startsida/IMG_7800.jpg";
import roomImage from "../assets/Images/Bilder_bokning/rum1.jpg";
import suiteImage from "../assets/Images/Bilder_bokning/Rum_vit.jpg";

export default function HomePage() {
  return (
    <>
      {/* Sektion med bakgrundsbild */}
      <div
        className="relative min-h-[760px] bg-cover bg-center bg-no-repeat pb-8 sm:min-h-[900px] "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        <Header overImage />

        <main className="relative px-6 pt-88 sm:px-10 sm:pt-96">
          <p className="pt-20 text-left font-garamond text-[#F3E9D7] sm:pt-28">
            HOTELL I DALARNA
          </p>

          <h1 className="text-left text-5xl text-secondary sm:text-6xl">
            Din plats att njuta i fjällen
          </h1>

          <p className="mb-14 mt-4 text-left text-secondary sm:mb-20">
            Natur, avkoppling och äventyr - året runt.
          </p>

          <HotelCheckIn />
        </main>
      </div>

      {/* Beige sektion under bilden */}
      <section className="w-full bg-[#F3E9D7] py-8">
        {/* Brun ruta */}
        <div className="min-h-[500px] w-full bg-[#3a2516] pl-6 pr-0 sm:pl-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            {/* Text till vänster */}
            <div className="min-w-0 flex-1">
              <h3 className="mt-10  text-left text-serif text-secondary">
                Hotell i Dalarna
              </h3>

              <h2 className="text-left text-5xl text-[#F3E9D7]">
                Mer än ett hotell.
                <br /> En upplevelse
              </h2>

              <p className="mb-10 mt-6 text-left text-[#F3E9D7]">
                Fjällheim är en plats där natur, gemenskap och avkoppling möts.
                Hos oss får du en äkta Dala-upplevelse med komfort,
                <br /> god mat och minnen som stannar kvar livet ut.
              </p>

              <a
                href="/dalarna"
                className="mt-4 block text-left font-lato text-[#F3E9D7] hover:underline"
              >
                Upptäck Dalarna →
              </a>
            </div>

            {/* Bild till höger */}
            <div className="min-w-0 flex-1 md:self-stretch">
              <img
                src={dogimage}
                alt="Fjällheim och den omgivande naturen"
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-full md:min-h-[500px] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-2 py-12 md:flex-row md:gap-12">
          {/* Text till vänster */}
          <div className="min-w-0 flex-1">
            <h2 className="mt-10 text-left text-5xl text-[#3a2516]">Boende</h2>

            <p className="mt-5 ml-10 text-left text-[#3a2516]">
              Rum för alla tillfällen
            </p>

            <p className="mt-5 ml-10 text-left text-[#3a2516]">
              Oavsett om du kommer för en romantisk helg, en aktiv semester
              eller konferens har vi ett rum som passar dig.
            </p>
          </div>

          {/* Platshållare för två cards till höger */}
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                image: roomImage,
                title: "Dubbelrum",
                description: "Ett ombonat rum för en avkopplande vistelse.",
              },
              {
                image: suiteImage,
                title: "Fjällsvit",
                description: "Mer utrymme att landa efter dagens äventyr.",
              },
            ].map((room) => (
              <Link
                key={room.title}
                to="/booking"
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold">{room.title}</h2>
                  <p className="mt-2 font-lato text-sm">{room.description}</p>
                  <span className="mt-4 inline-block font-garamond underline">
                    Se boende
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
