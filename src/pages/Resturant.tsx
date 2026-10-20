import Footer from "../components/layout/Footer";
import Hero from "../components/ui/Hero";
import Header from "../components/layout/Header";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Coffee,
  Coins,
  Leaf,
  Wine,
} from "lucide-react";
import ren from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";

const IMG = {
  hero: ren,
  frukost: ren,
  retsturang1: ren,
  resturang2: ren,
  miljo: ren,
  host: ren,
};

const serif = "font-['Cormorant_Garmond' serif]";
const label = "text-xs uppercase tracking-[0.2em]";

const features = [
  {
    icon: Leaf,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
  {
    icon: CalendarDays,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
  {
    icon: Wine,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
  {
    icon: Coffee,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
  {
    icon: Coins,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
  {
    icon: Clock,
    titel: "lokala råvaror",
    text: "från närområdet",
  },
];
const hours = [
  {
    titel: "Frukostbuffe",
    rows: [
      ["måndag-fredag", "07:00-10:00"],
      ["lördag-söndag", "07:30-10:30"],
    ],
  },
  {
    titel: "Resturang",
    rows: [
      ["måndag-fredag", "07:00-10:00"],
      ["lördag-söndag", "07:30-10:30"],
    ],
  },
  {
    titel: "Bar",
    rows: [
      ["måndag-fredag", "07:00-10:00"],
      ["lördag-söndag", "07:30-10:30"],
    ],
  },
];

export default function MatOchDryck() {
  return (
    <>
      <Header />
      <Hero
        titel="Hotell Fjellheim"
        description="Ett varmt hotell"
        href="/booking"
        button="Klicka här för att boka rum"
      />
      <main className="bg-[#FAECDD] text-[#2b2118]">
        <section
          className="relative flex min-h-[420px] items-end bg-cover bg-center text-[#f4ECDD]"
          style={{ backgroundImage: "url{IMG.hero}" }}
        >
          <p className="{label}">Mat och dryck</p>
          <h1>Smak som hör hemma här</h1>
          <p>
            lokal råvaror och säsonginspirerade måltider som gör varje måltid
            lite speciell
          </p>
        </section>

        <section className="border-b border-[#2b2118]/15">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {features.map(({ icon: Icon, titel, text }) => (
              <li
                key={titel}
                className="flex items-center gap-3 border-[#2b2118]/15 px-4 py-5 md:justify-center md:border-1"
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <p>{titel}</p>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid md: grid-cols-2">
          <img
            src={IMG.frukost}
            alt="Frukostbuffe"
            className="h-72 w-full object-cover md:h-full"
          />
          <div className="bg-[#3f4a35] px-6 py-12 text-[#FAECDD] md:px-12">
            <p className={label}>Frukost</p>
            <h2 className="">
              Njut av en generös frukostbuffe med lokala råvaror , nybakat bröd,
              varma och kalla alternativ
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <Clock
                  className="mt-1 h-6 w-6 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="flex-1">
                  <p>Tider</p>
                  <div className="flex justify-between gap-6">
                    {hours[0].rows.map(([dag, tid]) => (
                      <div>
                        <dt>{dag}</dt>
                        <dt>{tid}</dt>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div>
            <p>Resturang och bar</p>
            <h2 className="">Mat, dryck och sällskap året runt</h2>
            <p>
              Vår resturang erbjuder vällagade rätter med inspiration fårn
              Dalarna och säsongens råvaror. I baren hittar du välkomponerade
              drycket, lokala favoriter och en avslappnad atmosfär - perfekt
              efter en dag i nature.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#meny" className="bg-[#6b3f22] hover:bg-[#6b3f22] " /> se
              vår meny <ArrowRight className="h-4 w-4 aria-hidden" />
              <a href="Boka"> boka bord</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={IMG.retsturang1}
              alt="Dukat bord i resturang"
              className="rounded object-cover"
            />
            <img
              src={IMG.resturang2}
              alt="Dukat bord i resturang"
              className="rounded object-cover"
            />
          </div>
        </section>

        <section
          className="relative flex min-h-[320px] items-center bg-cover bg-center md:min-h-[400px]"
          style={{ backgroundImage: "url(${IMG.miljo})" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black-40 to-transparent" />
          <div className="relative max-auto w-full max-w-6xl px-6">
            <h2 className="text-3xl leading-tight md:text-4xl">
              Lokala smaker i unik miljö
            </h2>
            <p className="mt-3 max-w-xs text-sm text-[#FAECDD]">
              Oavsett om du är här för en helgfrukost, middag med vänner eller
              ett glas i baren - här tar vi oss tid för det god.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md: grid-cols-[1gr_1.4fr] md:items-center">
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {hours.map(({ titel, rows }) => (
              <div key={titel}>
                <h3>{titel}</h3>
                <dl className="mt-3 space-y-1 text-sm">
                  {rows.map(([dag, tid]) => (
                    <div key={dag} className="flex justify-between gap-4">
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
