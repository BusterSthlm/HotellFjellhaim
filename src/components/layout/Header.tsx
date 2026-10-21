import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/grafisk-material/Illustrations/logo/logotyp_fjällheim_primär.svg";
import lightLogo from "../../assets/grafisk-material/Illustrations/logo/logotyp_fjällheim_vit.svg";

type HeaderProps = { overImage?: boolean };

function Header({ overImage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isTransparent = overImage && !isScrolled;

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
      className={`fixed left-0 top-0 z-50 w-full px-4 py-3 transition-all duration-300 sm:px-8 ${
        isTransparent ? "bg-transparent shadow-none" : "bg-[#F3E9D7] shadow-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <Link to="/" className="shrink-0">
        <img
          src={isTransparent ? lightLogo : logo}
          alt="Logotyp"
          className="block h-14 w-auto object-contain sm:h-[75px]"
        />
      </Link>

      <nav aria-label="Huvudmeny" className="hidden items-center gap-5 lg:flex xl:gap-8">
        <a
          href="/booking"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Boka
        </a>
        <a
          href="/company"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Företag
        </a>
        <a
          href="/experience"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Upplevelser
        </a>
        <a
          href="/restaurant"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Restaurang
        </a>
        <a
          href="/about"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Om
        </a>
        <a
          href="/contact"
          className={`font-garamond text-lg hover:underline ${isTransparent ? "text-white" : "text-[#72492C]"}`}
        >
          Kontakt
        </a>
      </nav>

      {/* Knapp till höger */}
      <Link to="/booking" className="hidden shrink-0 rounded-lg bg-[#72492C] px-6 py-3 font-lato text-white transition hover:bg-[#5A3923] sm:inline-block">
        Boka nu
      </Link>
      <button
        type="button"
        className={`rounded-lg border px-3 py-2 font-lato lg:hidden ${isTransparent ? "border-white text-white" : "border-[#72492C] text-[#72492C]"}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Stäng" : "Meny"}
      </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobilmeny" className="mx-auto mt-3 grid max-w-7xl gap-1 rounded-lg bg-[#F3E9D7] p-3 shadow-lg lg:hidden">
          {[
            ["Boka", "/booking"],
            ["Företag", "/company"],
            ["Upplevelser", "/experience"],
            ["Restaurang", "/restaurant"],
            ["Om", "/about"],
            ["Kontakt", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              onClick={() => setMenuOpen(false)}
              className="rounded px-3 py-2 font-garamond text-lg text-[#72492C] hover:bg-[#e8dac4]"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
