import { useRef, useState } from "react";
import { CalendarDays, Users, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HotelCheckIn() {
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [guestMenuOpen, setGuestMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch() {
    navigate("/booking");
  }

  return (
    <div className="mx-4 flex w-auto items-stretch gap-2 rounded-xl bg-white p-4 shadow-sm">
      {/* Check-in */}
      <div className="flex flex-1 min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Välj incheckningsdatum"
          onClick={() => checkinRef.current?.showPicker()}
          className="shrink-0 text-primary hover:text-secondary"
        >
          <CalendarDays size={22} />
        </button>

        <div className="flex flex-col items-start">
          <p className="mb-1 text-primary">Incheckning</p>

          <input
            ref={checkinRef}
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            aria-label="Incheckningsdatum"
            className="sr-only"
          />

          <button
            type="button"
            onClick={() => checkinRef.current?.showPicker()}
            className="text-left text-sm text-primary font-lato"
          >
            {checkin || "Välj datum"}
          </button>
        </div>
      </div>

      {/* Check-out */}
      <div className="flex flex-1 min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Välj utcheckningsdatum"
          onClick={() => checkoutRef.current?.showPicker()}
          className="shrink-0 text-gray-600 hover:text-black"
        >
          <CalendarDays size={22} />
        </button>

        <div className="flex flex-col items-start">
          <p className="mb-1 text-primary">Utcheckning</p>

          <input
            ref={checkoutRef}
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            aria-label="Utcheckningsdatum"
            className="sr-only"
          />

          <button
            type="button"
            onClick={() => checkoutRef.current?.showPicker()}
            className="text-left text-sm text-primary font-lato"
          >
            {checkout || "Välj datum"}
          </button>
        </div>
      </div>

      {/* Gäster */}
      <div className="relative flex flex-1 min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={() => setGuestMenuOpen(!guestMenuOpen)}
          aria-label="Välj antal gäster"
          aria-expanded={guestMenuOpen}
          className="shrink-0 text-primary hover:text-black"
        >
          <Users size={22} />
        </button>

        <div className="flex flex-col items-start">
          <p className="mb-1 text-primary">Gäster</p>

          <button
            type="button"
            onClick={() => setGuestMenuOpen(!guestMenuOpen)}
            className="text-left text-sm font-lato text-gray-700"
          >
            {adults + children} {adults + children === 1 ? "gäst" : "gäster"}
          </button>
        </div>

        {guestMenuOpen && (
          <div className="absolute left-0 top-full z-10 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            {/* Vuxna */}
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-primary">Vuxna</p>
                <p className="text-xs text-primary">13 år eller äldre</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Ta bort en vuxen"
                  disabled={adults <= 1}
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="rounded-full border p-2 disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <span>{adults}</span>
                <button
                  type="button"
                  aria-label="Lägg till en vuxen"
                  onClick={() => setAdults(adults + 1)}
                  className="rounded-full border p-2"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Barn */}
            <div className="flex items-center justify-between border-t py-3">
              <div>
                <p className="font-medium text-primary">Barn</p>
                <p className="text-xs text-primary">0–12 år</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Ta bort ett barn"
                  disabled={children <= 0}
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="rounded-full border p-2 disabled:opacity-30"
                >
                  <Minus size={14} />
                </button>
                <span>{children}</span>
                <button
                  type="button"
                  aria-label="Lägg till ett barn"
                  onClick={() => setChildren(children + 1)}
                  className="rounded-full border p-2"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setGuestMenuOpen(false)}
              className="mt-2 w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-[#f3e9d7] hover:bg-gray-700"
            >
              Klart
            </button>
          </div>
        )}
      </div>

      {/* Sök */}
      <button
        type="button"
        onClick={handleSearch}
        className="flex-1 rounded-lg bg-[#3a2516] px-5 py-3 font-lato text-[#f3e9d7] hover:bg-[#72492C] transition-colors"
      >
        Sök lediga rum
      </button>
    </div>
  );
}
