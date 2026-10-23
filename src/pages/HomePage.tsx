import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Images/Bilder_startsida/IMG_7906.jpg";
import HotelCheckIn from "../components/ui/HotelCheckIn";
import dogimage from "../assets/Images/Bilder_startsida/IMG_7800.jpg";
import roomImage from "../assets/Images/Bilder_bokning/rum1.jpg";
import suiteImage from "../assets/Images/Bilder_bokning/Rum_vit.jpg";
import skoghoger from "../assets/grafisk-material/Illustrations/Skog/Skog_hoger.svg";
import skogvanster from "../assets/grafisk-material/Illustrations/Skog/Skog_vanster.svg";

export default function HomePage() {
  return (
    <>
      {/* Sektion med bakgrundsbild */}
      <div
        className="relative min-h-[760px] bg-center bg-no-repeat pb-8 sm:min-h-[900px] "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center 20%",
          backgroundSize: "140%",
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
        <div className="min-h-[500px] w-full bg-[#68452d] pl-6 pr-0 sm:pl-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            {/* Text till vänster */}
            <div className="min-w-0 flex-1">
              <h3 className="mt-10  text-left text-serif text-secondary">
                Välkommen till Fjällheim
              </h3>

              <h2 className="text-left text-5xl text-[#F3E9D7]">
                Mer än ett hotell.
                <br /> En upplevelse
              </h2>

              <p className="mb-10 mt-6 text-left text-[#F3E9D7]">
                Fjällheim är en plats där natur, gemenskap och avkoppling möts.
                Hos oss får du en äkta Dala-upplevelse med komfort, god mat och
                minnen som stannar kvar livet ut.
              </p>

              <a
                href="/dalarna"
                className="mt-4 block text-left font-lato text-[#F3E9D7] hover:underline"
              >
                Upptäck Dalarna →
              </a>
            </div>

            {/* Bild till höger */}
            <div className="min-w-0 flex-1 py-6 md:self-stretch">
              <img
                src={dogimage}
                alt="Fjällheim och den omgivande naturen"
                className="h-[320px] w-full rounded-l-xl object-cover sm:h-[420px] md:h-[450px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-2 py-12 md:flex-row md:gap-12">
          {/* Text till vänster */}
          <div className="min-w-0 flex-1">
            <h2 className="mt-10 ml-10 text-left text-5xl text-[#3a2516]">
              Boende
            </h2>

            <p className="mt-5 ml-10 text-left text-[#3a2516]">
              Rum för alla tillfällen. Oavsett om du kommer för en romantisk
              helg, en aktiv semester eller konferens har vi ett rum som passar
              dig.
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
    </>
  );
}
