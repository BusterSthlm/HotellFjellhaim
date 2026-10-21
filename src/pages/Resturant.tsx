import FeatureBar from "../components/layout/FeatureBar";
import Header from "../components/layout/Header";
import {
  ArrowRight,
  Clock,
  Coffee,
  Leaf,
  Wine,
} from "lucide-react";
import heroImage from "../assets/Images/Bilder_resturang/IMG_7854.jpg";
import frukostImage from "../assets/Images/Bilder_resturang/IMG_7860.jpg";
import restaurantImage from "../assets/Images/Bilder_resturang/IMG_7858.jpg";
import diningImage from "../assets/Images/Bilder_resturang/IMG_7862.jpg";
import ambienteImage from "../assets/Images/Bilder_resturang/IMG_8020.jpg";

const IMG = {
  hero: heroImage,
  frukost: frukostImage,
  retsturang1: restaurantImage,
  resturang2: diningImage,
  miljo: ambienteImage,
};

const label = "text-xs uppercase tracking-[0.2em]";

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
      <Header overImage />
      <main className="bg-[#FAECDD] text-[#2b2118]">
        <section
          className="relative flex min-h-[520px] items-end bg-cover bg-center px-6 pb-12 pt-32 text-[#f4ECDD] md:min-h-[620px]"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="container-page relative">
            <p className={label}>Mat och dryck</p>
            <h1 className="mt-4 max-w-2xl text-5xl leading-tight text-white md:text-7xl">
              Smak som hör hemma här
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white">
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
                      <div key={dag}>
                        <dt>{dag}</dt>
                        <dd>{tid}</dd>
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
              Vår restaurang erbjuder vällagade rätter med inspiration från
              Dalarna och säsongens råvaror. I baren hittar du välkomponerade
              drycker, lokala favoriter och en avslappnad atmosfär – perfekt
              efter en dag i naturen.
            </p>
            <a
              href="mailto:booking@fjallheim.se?subject=Bordsbokning"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#6b3f22] px-5 py-3 text-white transition hover:bg-[#4e2d18]"
            >
              Boka bord <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid min-h-72 grid-cols-2 gap-3">
            <img
              src={IMG.retsturang1}
              alt="Dukat bord i resturang"
              className="h-full min-h-72 w-full rounded object-cover"
            />
            <img
              src={IMG.resturang2}
              alt="Dukat bord i resturang"
              className="h-full min-h-72 w-full rounded object-cover"
            />
          </div>
        </section>

        <section
          className="relative flex min-h-[320px] items-center bg-cover bg-center md:min-h-[400px]"
          style={{ backgroundImage: `url(${IMG.miljo})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="container-page relative w-full text-white">
            <h2 className="text-3xl leading-tight text-white md:text-4xl">
              Lokala smaker i unik miljö
            </h2>
            <p className="mt-3 max-w-xs text-sm text-[#FAECDD]">
              Oavsett om du är här för en helgfrukost, middag med vänner eller
              ett glas i baren - här tar vi oss tid för det god.
            </p>
          </div>
        </section>

        <section id="opening-hours" className="container-page grid gap-10 py-16 md:grid-cols-3">
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-3">
            {hours.map(({ titel, rows }) => (
              <div key={titel}>
                <h3 className="text-xl font-semibold">{titel}</h3>
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
