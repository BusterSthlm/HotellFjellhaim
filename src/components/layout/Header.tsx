import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#F3E9D7] shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      {/* Logotyp till vänster */}
      <a href="/" className="ml-6 shrink-0">
        <img
          src="/src/assets/grafisk-material/logotyp_fjällheim_primär.svg"
          alt="Logotyp"
          className="block h-[75px] w-auto object-contain"
        />
      </a>

      {/* Navigering */}
      <nav className="flex items-center gap-8">
        <a
          href="/Booking"
          className="font-garamond text-lg text-[#72492C] hover:underline"
        >
          Boka
        </a>
        <a
          href="/Company"
          className="font-garamond text-lg text-[#72492C] hover:underline"
        >
          Företag
        </a>
        <a
          href="/Experience"
          className="font-garamond text-lg text-[#72492C] hover:underline"
        >
          Upplevelser
        </a>
        <a
          href="/Resturant"
          className="font-garamond text-lg text-[#72492C] hover:underline"
        >
          Restaurang
        </a>
        <a
          href="/About"
          className="font-garamond text-lg text-[#72492C] hover:underline"
        >
          Om
        </a>
      </nav>

      {/* Knapp till höger */}
      <button className="shrink-0 rounded-lg bg-[#72492C] px-6 py-3 font-['Lato'] text-white transition hover:bg-[#5A3923]">
        Boka nu
      </button>
    </header>
  );
}

export default Header;
