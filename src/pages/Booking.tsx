import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BedDouble,
  User,
  Wifi,
  Bath,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";

const PRICE_PER_NIGHT = 1543;
const BREAKFUST = 185;
const LATE_CHECKOUT = 250;

const images = ["../images/Bilder_bokning/badrum.jpg"];
const amenities = [
  { icon: BedDouble, text: "queen size säng" },
  { icon: User, text: "1-4 Gäster" },
  { icon: Wifi, text: "Gratis Wifi" },
  { icon: Bath, text: "Privat badrum" },
  { icon: CheckCircle2, text: "Parkering" },
];

const kr = (n: number) => `${n.toLocaleString("sv-SE")} kr`;

function nightsBetween(from: string, to: string) {
  const diff = (new Date(to).getTime() - new Date(from).getTime()) / 86_400_000;
  return Math.max(0, Math.round(diff));
}

export default function Boka() {
  const [mainImage, setMainImage] = useState(images[0]);
  const [checkIn, setCheckIn] = useState("2026-10-21");
  const [checkOut, setCheckOut] = useState("2026-10-21");
  const [guests, setGuests] = useState(2);
  const [breakfast, setBreakfast] = useState(false);
  const [lateCheckout, setLateCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const nights = nightsBetween(checkIn, checkOut);
  const roomCost = nights * PRICE_PER_NIGHT;
  const breakfastCost = breakfast ? BREAKFUST * guests * nights : 0;
  const lateCost = lateCheckout ? LATE_CHECKOUT : 0;
  const total = roomCost + breakfastCost + lateCost;

  if (confirmed) {
    return (
      <section className="container-page flex flex-col items-center py-24 text-center">
        <CheckCircle2 size={24} className="text-forest" />
        <h1 className="mt-4 text-5xl">Tack för din bokning</h1>
        <p className="mt-4 max-w-md">
          Fjällsvit {nights} nätter före{guests} gäster({checkIn} - {checkOut}).
          total {kr(total)}
        </p>
        <Link to="/" className="btn-brown mt-8">
          {" "}
          till startsidan
        </Link>
      </section>
    );
  }
  return (
    <>
      <Header />
      <Hero
        titel="Konferens på Fjällheim"
        description="Inspirerande möten, god mat och minnesvärda upplevelser i fjällmiljö."
        href="#erbjudanden"
        button="Se våra erbjudanden"
      />
      <section className="container-page py-10">
        <Link to="/" className="mb-6 inline-flex " aria-label="Tillbaka">
          <ArrowLeft size={32} />
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:divide-x lg:divide-forest">
          {/*ruminfo */}
          <div className="lg:pr-10">
            <img
              src={mainImage}
              alt="Fjällsvit"
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.slice(1).map((img) => (
                <button
                  type="button"
                  key={img}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt=""
                    className={`aspect-[3/2] w-full rounded-md object-cover ${mainImage === img ? "ring-2 ring-brown" : ""}`}
                  />
                </button>
              ))}
            </div>

            <h2 className="mt-6 text-5xl"> Fjällsvit</h2>
            <p className="mt-1 max-w-md font-serif">Mysigt stort rum</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
              {amenities.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon size={18} /> {text}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="lg:pl-10"
            onSubmit={(e) => {
              e.preventDefault();
              if (nights > 0) setConfirmed(true);
            }}
          >
            <h1 className="text-5xl">Boka Fjällheim</h1>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xl font-light"> Incheckning</span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-ink bg-white px-4 py-3 text-lg"
                />
              </label>

              <label className="block">
                <span className="text-xl font-light"> Utcheckning</span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-ink bg-white px-4 py-3 text-lg"
                />
              </label>

              <label className=" mt-4 block">
                <span className="text-xl font-light"> Gäster</span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-ink bg-white px-4 py-3 text-lg"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "vuxen" : "vuxna"}{" "}
                    </option>
                  ))}
                </select>
              </label>

              <div className="mt-6 border-t border-forest pt-4">
                <h3 className="font-sans text-xl font-bold"> Tillägg</h3>

                <label className="mt-4 flex cursour-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    checked={breakfast}
                    onChange={(e) => setBreakfast(e.target.checked)}
                    className="mt-1 size-7 accent-forest"
                  />
                  <span className="flex-1">
                    <span className="block text-xl">Sen utcheckning</span>
                    <span className=" text-sm">185 kr / person</span>
                  </span>
                  <span className="text-xl">
                    {kr(BREAKFUST * guests * nights)}
                  </span>
                </label>

                <label className="mt-4 flex cursour-pointer items-start gap-4">
                  <input
                    type="checkbox"
                    checked={breakfast}
                    onChange={(e) => setLateCheckout(e.target.checked)}
                    className="mt-1 size-7 accent-forest"
                  />
                  <span className="flex-1">
                    <span className="block text-xl">Frukost</span>
                    <span className=" text-sm">250 kr / rum</span>
                  </span>
                  <span className="text-xl">{kr(LATE_CHECKOUT)}</span>
                </label>
              </div>

              <dl className="mt-4 flex justify-between border-t boarder-ink/40 pt-4 text-2xl">
                <span>
                  <b>total</b> Inkl. moms
                </span>
                <b>{kr(total)}</b>
              </dl>

              {nights === 0 && (
                <p className="mt-2 text-berry">
                  {" "}
                  Utcheckning måste vara efter incheckning
                </p>
              )}

              <button type="submit">
                <p className="mt-3 flex items-center justify-center gap-1 text-sm">
                  <Lock size={14} /> Säker betalning- du debteras inte för än
                  bokningen är bekräftat.{" "}
                </p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
