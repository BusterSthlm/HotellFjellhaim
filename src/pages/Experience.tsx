import { useState } from "react";
import Header from "../components/layout/Header";
import skidor from "../assets/Images/Bilder_aktiveter/skidor.jpg";
import skog from "../assets/Images/Bilder_aktiveter/Skog.jpg";
import ren from "../assets/Images/Bilder_aktiveter/ren.jpg";
import personMedRen from "../assets/Images/Bilder_aktiveter/person-med-ren.jpg";
import bastu from "../assets/Images/Bilder_bokning/bastu.jpg";
import landskap from "../assets/Images/Bilder_startsida/bergen.jpg";
import vandring from "../assets/Images/Bilder_startsida/IMG_7918.jpg";

type Activity = { image: string; title: string; text: string };

const seasons: Record<"vinter" | "sommar", Activity[]> = {
  vinter: [
    { image: skidor, title: "Skidåkning", text: "Idre Himmelfjäll är det perfekta skidsystemet för familjen och den som gillar långa och sköna blå och gröna pister." },
    { image: skog, title: "Längdåkning", text: "Från byn i Idre utgår ett 5- och 10 km-spår samt ett elljusspår på 2 × 2,5 km. Du kan även åka skidor härifrån till Idre fjäll, en sträcka på ca 9 km." },
    { image: ren, title: "Renvandring", text: "Följ med på en guidad tur bland renarna och lär dig mer om samisk kultur och livet på fjället." },
    { image: personMedRen, title: "Snöskoter", text: "Skoterled runt hörnet – parkera gratis på hotellets parkering. Idre med omnejd erbjuder 160 mil skoterleder i naturskön och varierad miljö." },
  ],
  sommar: [
    { image: vandring, title: "Vandring", text: "Märkta leder för alla nivåer, från korta promenader till heldagsturer upp på kalfjället." },
    { image: landskap, title: "Fiske", text: "Öring i Grövelsjön, röding i Burusjön eller harr i Storån. Köp fiskekort och njut av din fisketur." },
    { image: bastu, title: "Bastu", text: "Avsluta dagen i vår bastu – boka den för dig själv eller tillsammans med sällskap." },
    { image: skog, title: "Cykling", text: "Stigar och grusvägar genom skog och fjäll. Perfekt för både lugna turer och utmanande pass." },
  ],
};

export default function Upplevelser() {
  const [season, setSeason] = useState<"vinter" | "sommar">("vinter");

  return (
    <>
      <Header />
      <main className="container-page py-10 pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-4xl">Att göra {season === "vinter" ? "vinter" : "vår, sommar & höst"}</h1>
          <div className="flex rounded-md border border-brown">
            {(["vinter", "sommar"] as const).map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={season === s}
                onClick={() => setSeason(s)}
                className={`px-5 py-2 font-serif text-lg capitalize ${season === s ? "bg-brown text-cream" : "text-brown"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {seasons[season].map((a) => (
            <article key={a.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img src={a.image} alt={a.title} className="h-64 w-full object-cover md:h-80" />
              <div className="p-6">
                <h2 className="text-3xl font-semibold">{a.title}</h2>
                <p className="mt-3">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
